import validator from "validator";
import { getApi2 } from "./api-helper";
import { PAGE_LIMIT } from "./app.config";

export async function NextPreviousHandle(apiPath: string, searchParams: any) {
  let fullPathQuery = "";
  let cal_page;
  let cal_limit;
  if (searchParams != null) {
    const { page, limit } = searchParams;
    const c1 = validator.isNumeric(page ? page.toString() : "");
    const c2 = validator.isNumeric(limit ? limit.toString() : "");
    cal_page = parseInt(c1 ? page : 1);
    cal_limit = parseInt(c2 ? limit : PAGE_LIMIT);
    const query = cal_page ? `&page=${cal_page}&limit=${cal_limit + 1}` : "";
    fullPathQuery = `${apiPath}${query}`;
  } else {
    fullPathQuery = `${apiPath}`;
    cal_page = 1;
    cal_limit = PAGE_LIMIT;
  }

  const { data } = await getApi2(fullPathQuery);
  const { posts } = data;
  const d = PagingCalculate(posts, cal_page, cal_limit);
  let next = false;
  let previous = false;
  next = d.next;
  previous = d.previous;
  return { next, previous, page: cal_page, limit: cal_limit, posts };
}

function PagingCalculate(post_Add1: any[], page: number, limit: number) {
  let next = false;
  let previous = false;

  if (post_Add1.length > limit) {
    next = true;
  }
  if (page <= 1) {
    previous = false;
  } else {
    previous = true;
  }
  return {
    next,
    previous,
  };
}
