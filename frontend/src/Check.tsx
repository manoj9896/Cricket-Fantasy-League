import React, { useEffect, useState } from "react";

function Check({ count }: { count: number }) {
  let a = 1;

  useEffect(() => {
    const paragraph = document.getElementById("paragraph");
    console.log("paragraph", paragraph);
    setInterval(() => {
      console.log('check a',a)
      a = Math.random();
    }, 2000);
    if (paragraph) paragraph.textContent = `count value is = ${count}`;
    return () => {
      console.log("checking the value of count", count);
    };
  }, [count]);

  useEffect(() => {
    console.log("value of a", a);
  }, [a]);

  return <div>Check value of {count}</div>;
}

export default Check;
