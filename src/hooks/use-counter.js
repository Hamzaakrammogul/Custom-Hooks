import React,{useEffect, useState} from "react";

const useCounter = (forw=true)=> {
    const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        if (forw===true){
            setCounter((prevCounter) => prevCounter + 1);
        }else{
            setCounter((prevCounter) => prevCounter - 1);
        }
     
    }, 1000);

    return () => clearInterval(interval);
  }, [forw]);

  return counter;
};

export default useCounter;