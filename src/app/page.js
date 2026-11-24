import React, { Suspense } from "react";

import { lazy } from "react";

const MyComponenet = lazy(() => import("../../src/app/home/page"));

export default function Home() {
  return (
    <div>
      <Suspense fallback={<div>loading</div>}>
        <MyComponenet />
      </Suspense>
    </div>
  );
}
