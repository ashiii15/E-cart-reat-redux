import { useEffect, useState} from "react";

export const useFetch = (url) => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    // make an api call
    fetch(url).then((res) => {
      res.json().then((data)=>{
        // console.log(data);
        setItem(data)
      })
    });
    // console.log(item);
  }, [url]);
  return item;
};
