import React, { useState } from "react";
import PageHeaderContent from "../../components/pageheadercontent";
import { BsInfoCircleFill } from "react-icons/bs";
import ImageOne from "../../images/sneaker.jpg";
import ImageThree from "../../images/plant.jpg";
import ImageTwo from "../../images/mouse.jpg";
import ImageFour from "../../images/mobile.jpg";
import ImageFive from "../../images/voting.jpg";
import ImagesSix from "../../images/ImageSix.jpg";
import "./style.scss";

const portfolioData = [
  {
    id: 2,
    name: "Sneaker Shop",
    image: ImageOne,
    link: "https://vighnesh-devkate.github.io/Sneakers_Store/",
  },
  {
    id: 3,
    name: "Virtual Mouse",
    link: "https://github.com/vighnesh-devkate/VirtualMouse",
    image: ImageTwo,
  },
  {
    id: 2,
    name: "Plant Disease Prediction",
    image: ImageThree,
    link: "https://plant-disease-classifier-vighnesh.streamlit.app/",
  },
  {
    id: 2,
    name: "Ecommerce For Mobile",
    image: ImageFour,
    link: "https://github.com/vighnesh-devkate/mobile-shopee",
  },
  {
    id: 3,
    name: "Myntra Clone",
    image: ImagesSix,
    link: "https://myntra-clone-pied-omega.vercel.app/",
  },
  {
    id: 3,
    name: "Online Voting System",
    image: ImageFive,
    link: "https://github.com/vighnesh-devkate/Online-voting-web-application-using-Django-framework",
  },
 
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Development",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

const Portfolio = () => {
  const [filteredValue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  const handleFilter = (currentId) => {
    setFilteredValue(currentId);
  };

  const handleHover = (index) => {
    setHoveredValue(index);
  };

  const filteredItems =
    filteredValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredValue);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredValue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img alt={item.name} src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <button>Visit</button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;