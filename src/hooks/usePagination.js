import { useState, useMemo } from "react";

export function usePagination(items, perPage) {
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(items.length / perPage));

  const slice = useMemo(() => {
    const start = (page - 1) * perPage;
    return items.slice(start, start + perPage);
  }, [items, page, perPage]);

  const go = (direction) => {
    setPage((p) => Math.min(totalPages, Math.max(1, p + direction)));
  };

  return { page, totalPages, slice, go, setPage };
}
