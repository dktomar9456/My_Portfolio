import React from "react";

import NavBar from "./components/navbar";
import Image from "./components/image";
import Content from "./components/content";
import Data from "./components/data";
import Footer from "./components/footer";
import Carousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

class App extends React.Component {
  render() {
    var handleClick = (i) => {
      this.carousel.slideTo(i);
    };
    return (
      <div className="container-fluid pb-5 ">
        <NavBar setState={handleClick} />
        <div className="text-center">
          <button
            onClick={() => this.carousel.slidePrev()}
            className="btn btn-primary m-2"
          >
            Prev
          </button>
          <button
            onClick={() => this.carousel.slideNext()}
            className="btn btn-primary m-2"
          >
            Next
          </button>
          <hr />
        </div>

        <Carousel
          ref={(ref) => (this.carousel = ref)}
          disableButtonsControls
          disableDotsControls
          mouseTracking
          autoPlay
          autoPlayInterval={3000}
        >
          <Image />
          <Content data={Data.Projects} heading="PROJECTS" />
          <Content data={Data.Education} heading="EDUCATION" />
          <Content data={Data.Skills} heading="SKILLS" />
          <Content data={Data.Achivements} heading="ACHIEVEMENTS" />
          <Content data={Data.Por} heading="POSITIONS OF RESPONSIBILITY" />
          <Content data={Data.Extracurriculars} heading="EXTRACURRICULARS" />
          <Footer className="sticky-bottom" />
        </Carousel>
      </div>
    );
  }
}

export default App;
