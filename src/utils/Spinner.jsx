import React from "react";
import { Oval } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center align-items-center mt-5" style={{height:"100vh"}}>
      <Oval
        height="50"
        width="50"
        color="red"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

export default Spinner;