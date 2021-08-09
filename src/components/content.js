import React from "react";

function Content(props) {
  const Id = props.heading;
  const AllContent = props.data.map((obj) => {
    return (
      <li key={obj.id}>
        <h4>{obj.title}</h4>
        <p className="mb-1" style={{ fontFamily: "sans-serif arial" }}>
          <span className="fw-bold">{obj.heading}</span>
          {obj.content}
        </p>
        <p className="lead mb-1">
          {obj.Class}{" "}
          <span style={{ fontSize: 15 + "px", fontWeight: "bold" }}>
            {obj.performance}
          </span>
        </p>
        <p style={{ fontFamily: "monospace" }}>{obj.duration}</p>
        <a
          href={obj.link}
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          <button
            style={{ display: obj.link ? "block" : "none" }}
            className="btn btn-success text-light border shadow-sm p-2 mb-3 rounded"
          >
            GitHub
          </button>
        </a>
      </li>
    );
  });

  return (
    <div className="container p-3 border shadow bg-light rounded " id={Id}>
      <h3 className=" mb-3 text-primary"> {props.heading} </h3>

      <ul> {AllContent} </ul>
    </div>
  );
}
export default Content;
