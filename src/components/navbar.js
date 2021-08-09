import React from "react";

function NavBar(props) {
  //creating an array with li elements
  const items = [
    // { id: 1, name: "Experience", link: "#EXPERIENCE" },
    { id: 0, name: "About" },
    { id: 1, name: "Projects" },
    { id: 2, name: "Education" },
    { id: 3, name: "Skills" },
    { id: 4, name: "Achievements" },
    { id: 5, name: "PORs" },
    { id: 6, name: "Extracurriculars" },
    { id: 7, name: "Contact Me" },
  ];

  // mapping all li elements in AllItems
  const AllItems = items.map((obj) => {
    return (
      <li className="nav-item" key={obj.id}>
        <p className="nav-link my-0" onClick={() => props.setState(obj.id)}>
          {obj.name}
        </p>
      </li>
    );
  });

  return (
    <div className="row mb-5">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <p className="navbar-brand my-0 ">PortFolio</p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">{AllItems}</ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;
