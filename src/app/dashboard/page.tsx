import React, { Suspense } from "react";
import Dashboards from "./[button]/page";

const page = () => {
  return (
    <Suspense>
      <Dashboards />
    </Suspense>
  );
};

export default page;
