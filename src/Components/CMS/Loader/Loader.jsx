import React from "react";
import { Blocks } from "react-loader-spinner";

export default function Loader() {
  return (
    <>
      <Blocks
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
      />
    </>
  );
}
