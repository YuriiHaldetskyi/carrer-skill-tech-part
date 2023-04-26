import { useState } from "react";
export const usePagination = (count) => {
  const [page, setPage] = useState(count);
  const loadMore = () => setPage((prev) => prev + count);

  return { page, loadMore };
};
