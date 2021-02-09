import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardBody,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Table } from "reactstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import mickeyImg from "./images/mickey.png";
import donaldImg from "./images/donald.png";
import goofyImg from "./images/goofy.png";
import './styles.css'
const drivers = [
  {
    name: "Mickey Mouse",
    img: mickeyImg,
    speed: 4,
    brakes: 3,
    luck: 5,
  },
  {
    name: "Donald Duck",
    img: donaldImg,
    speed: 5,
    brakes: 4,
    luck: 3,
  },
  {
    name: "Goofy",
    img: goofyImg,
    speed: 3,
    brakes: 5,
    luck: 4,
  },
];
const SelectionCards = (props) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode:true
  };
  return (
    <div id="driver-cards">
    <Slider {...settings} >
      <Card >
        <CardImg
          top
          width="300px"
          height="200px"
          src={drivers[0].img}
          alt="mickey card"
        />
        <CardBody>
          <CardTitle tag="h5">{drivers[0].name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            This mouse is sneaky!
          </CardSubtitle>
          <Table>
            <thead>
              <tr>
                <th>Speed</th>
                <th>Brakes</th>
                <th>Luck</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th id="mickey">{drivers[0].speed}</th>
                <th id="mickey">{drivers[0].brakes}</th>
                <th id="mickey">{drivers[0].luck}</th>
              </tr>
            </tbody>
          </Table>
          <Button>Select Driver</Button>
        </CardBody>
      </Card>
      <Card >
        <CardImg
          top
          width="300px"
          height="200px"
          src={drivers[1].img}
          alt="mickey card"
        />
        <CardBody>
          <CardTitle tag="h5">{drivers[1].name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            This duck is quick!
          </CardSubtitle>
          <Table>
            <thead>
              <tr>
                <th>Speed</th>
                <th>Brakes</th>
                <th>Luck</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th id="donald">{drivers[1].speed}</th>
                <th id="donald">{drivers[1].brakes}</th>
                <th id="donald">{drivers[1].luck}</th>
              </tr>
            </tbody>
          </Table>
          <Button>Select Driver</Button>
        </CardBody>
      </Card>
      <Card >
        <CardImg
          top
          width="300px"
          height="200px"
          src={drivers[2].img}
          alt="mickey card"
        />
        <CardBody>
          <CardTitle tag="h5">{drivers[2].name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Goofy is good on the brakes!
          </CardSubtitle>
          <Table>
            <thead>
              <tr>
                <th>Speed</th>
                <th>Brakes</th>
                <th>Luck</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th id="goofy">{drivers[2].speed}</th>
                <th id="goofy">{drivers[2].brakes}</th>
                <th id="goofy">{drivers[2].luck}</th>
              </tr>
            </tbody>
          </Table>
          <Button>Select Driver</Button>
        </CardBody>
      </Card>
    </Slider>
    </div>
  );
};

export default SelectionCards;
