const heading=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{},"im h1 tag"),React.createElement("h1",{},"im h2 tag")]));
    const root= ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading)
    console.log(heading)