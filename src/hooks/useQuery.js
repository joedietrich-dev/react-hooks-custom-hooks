import { useEffect, useState } from "react";

// take in the url
function useQuery(url) {
  const [{ isLoaded, data }, setData] = useState({ isLoaded: false, data: null })

  useEffect(() => {
    setData({ isLoaded: false, data: null });
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        setData({ data, isLoaded: true });
      })
  }, [url]);
  // the url is now a dependency
  // we want to use the side effect whenever the url changes

  // return an *object* with the data and isLoaded state
  return { data, isLoaded };
}

export default useQuery;
