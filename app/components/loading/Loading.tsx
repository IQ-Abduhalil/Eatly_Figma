import React, { memo } from "react";
import "./loading.scss";

function Loading() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center">
      <span className="loader"></span>
    </div>
  );
}

export default memo(Loading);
