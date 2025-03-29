import Link from "next/link";
import { Button } from "@/components/ui/button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
}

export default function Pagination({ currentPage, totalPages, baseUrl }: PaginationProps) {
  // Generate page links array
  const getPageLinks = () => {
    const links = [];

    // Always show first page
    links.push(1);

    // Current page neighborhood
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      if (links.indexOf(i) === -1) {
        links.push(i);
      }
    }

    // Always show last page for totalPages > 1
    if (totalPages > 1) {
      links.push(totalPages);
    }

    // Add ellipsis indicators
    const result = [];
    let prev = 0;

    for (const link of links) {
      if (link - prev > 1) {
        result.push('...');
      }
      result.push(link);
      prev = link;
    }

    return result;
  };

  const pageLinks = getPageLinks();

  return (
    <div className="flex justify-center py-8">
      <div className="flex space-x-2">
        {/* Previous page button */}
        <Button
          variant="outline"
          size="icon"
          className={`w-8 h-8 border-muted ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={currentPage === 1}
          asChild={currentPage !== 1}
        >
          {currentPage !== 1 ? (
            <Link href={`${baseUrl}?page=${currentPage - 1}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </Link>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          )}
        </Button>

        {/* Page links */}
        {pageLinks.map((page, index) =>
          page === '...' ? (
            <span
              key={`ellipsis-${index}`}
              className="w-8 h-8 flex items-center justify-center text-muted-foreground"
            >
              ...
            </span>
          ) : (
            <Button
              key={`page-${page}`}
              variant={currentPage === page ? "default" : "outline"}
              size="icon"
              className={`w-8 h-8 ${currentPage !== page ? 'border-muted' : 'bg-primary'}`}
              asChild={currentPage !== page}
            >
              {currentPage !== page ? (
                <Link href={`${baseUrl}?page=${page}`}>
                  {page}
                </Link>
              ) : (
                <span>{page}</span>
              )}
            </Button>
          )
        )}

        {/* Next page button */}
        <Button
          variant="outline"
          size="icon"
          className={`w-8 h-8 border-muted ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={currentPage === totalPages}
          asChild={currentPage !== totalPages}
        >
          {currentPage !== totalPages ? (
            <Link href={`${baseUrl}?page=${currentPage + 1}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          )}
        </Button>
      </div>
    </div>
  );
}
