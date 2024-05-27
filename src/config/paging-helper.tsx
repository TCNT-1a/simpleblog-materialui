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
