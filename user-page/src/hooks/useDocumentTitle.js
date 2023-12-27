import { useEffect } from 'react';

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]); // Re-run effect only if title changes
}

export default useDocumentTitle;