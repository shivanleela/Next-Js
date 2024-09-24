import { useContext, useState } from "react";
import Props2 from "./Props2";
import { CreateArray, CreateContext } from "./App";

const Props1 = () => {
  const [show, setShow] = useState(false);

  const arrdata = useContext(CreateArray);
  const data = useContext(CreateContext);

  return (
    <>
      <h2>Use Ternary Operator</h2>
      <button onClick={() => setShow(!show)}>change</button>

      {show ? (
        <div style={{ border: "1px solid black" }}>
          <h6>Even Number</h6>

          {arrdata.map((item, index) => {
            if (item % 2 == 0)
              return (
                <>
                  <p key={index}>{item}</p>
                </>
              );
          })}
        </div>
      ) : (
        <div>{data.name}</div>
      )}

      <Props2 />
    </>
  );
};

export default Props1;
