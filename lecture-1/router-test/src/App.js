import React, { useEffect, useState } from "react";

function App() {
  const [pageName, setPageName] = useState("");
  useEffect(() => {
    window.onpopstate = function (event) {
      setPageName(event.state);
    };
  }, []);

  function onClick1() {
    const pageName = "page1";
    window.history.pushState(pageName, "", "/page1");
    setPageName(pageName);
  }

  function onClick2() {
    const pageName = "page2";
    window.history.pushState(pageName, "", "/page2");
    setPageName(pageName);
  }
  return (
    <div className="App">
      <button onClick={onClick1}>{"page 1"}</button>
      <button onClick={onClick2}>{"page 2"}</button>
      {!pageName && <Home />}
      {pageName === "page1" && <Page1 />}
      {pageName === "page2" && <Page2 />}
    </div>
  );
}

function Home() {
  return <div>Home</div>;
}
function Page1() {
  return <div>Page1</div>;
}
function Page2() {
  return <div>Page2</div>;
}

export default App;
