import React, { Suspense } from "react";
import Header from "./header/Header";
import Main from "./main/Main";

const App = () => {
  return (
    <>
      <Suspense fallback={<h2>I'M LOADING...</h2>}>
        <Header />
        <Main />
      </Suspense>
    </>
  );
};

export default App;
