import { useLayoutEffect } from 'react';

function useBodyScrollLock() {
  useLayoutEffect(() => {
    const originalOverflow = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    // return statement here is a cleanup function like componentDidUnmount
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);
  // empty array ensures useLayoutEffect is only fired on mount and the return function on unmount
}

export { useBodyScrollLock };
