import { useEffect, useState } from 'react';

export default function useViewAll(totalElements, range = 7) {
  const [maxRange, setMaxRange] = useState(range);
  const [isFullListShown, setIsFullListShown] = useState(false);

  useEffect(() => {
    if (maxRange >= totalElements) {
      setIsFullListShown(true);
    }
  }, [totalElements, maxRange]);

  const handleClick = () => {
    if (!isFullListShown) {
      setMaxRange((prevRange) => prevRange + totalElements - range);
    }
  };

  return { handleClick, maxRange, isFullListShown };
}
