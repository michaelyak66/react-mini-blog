import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
//   const [name, setName] = useState("mario");
  const [ispending, setIsPending] = useState(true);
  const [error, setError] = useState(null);


  // fires on first render
  useEffect(() => {
    const abortController = new AbortController();

    console.log("use effect ran");
    setTimeout(() => {
      fetch(url, { signal: abortController.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error();
          }
          setError(null);
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError"){
            console.log("fetch aborted");
          }
          console.log(err.message);
          const errMessage = "Could not fetch data for that resource";
          setData(null);
          setIsPending(false);
          setError(errMessage);
        });
    }, 1000);

    return () => abortController.abort();
    
  }, [url]);

  return {data, ispending, error};
};

export default useFetch;
