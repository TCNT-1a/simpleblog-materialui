import { LoadMore } from "@/components/ListPost/LoadMore";
import { PAGE_LIMIT } from "./app.config";
import { getApi2 } from "./api-helper";
import { cache } from "react";

export function PagingCalculate(
  postInPageAnd1: any[],
  page: number,
  limit: number
) {
  let next = false;
  let previous = false;

  if (postInPageAnd1.length > limit) {
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
export function CalculatePrevNextLink(
  path: string,
  page: number,
  next: boolean,
  previous: boolean,
  limit: number
) {
  const nextPage = parseInt((page + "") as string) + 1;
  const previousPage = page - 1;
  const nextPath = next ? path + `?page=${nextPage}&limit=${limit}` : "";
  const previousPath = previous
    ? path + `?page=${previousPage}&limit=${limit}`
    : "";

  return {
    nextPath,
    previousPath,
  };
}

export const getPosts = cache(
  async (searchParams: any, path: string, linkLM: string) => {
    const { page, limit } = searchParams;
    const p_page = page ? page : 1;
    const p_limit = limit ? limit : PAGE_LIMIT;

    const apiPath = `${path}&` + `page=${p_page}&limit=${p_limit}`;
    const { data } = await getApi2(apiPath);

    const d = PagingCalculate(data, p_page, p_limit);

    if (data.length > p_limit) {
      data.pop();
    }

    const { nextPath, previousPath } = CalculatePrevNextLink(
      linkLM,
      p_page,
      d.next,
      d.previous,
      p_limit
    );

    const LinkLoadMore = (
      <LoadMore
        path={linkLM}
        page={p_page}
        limit={p_limit}
        next={d.next}
        previous={d.previous}
      ></LoadMore>
    );

    return { data, LinkLoadMore, nextPath, previousPath };
  }
);
