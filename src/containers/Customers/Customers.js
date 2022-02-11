/* eslint-disable no-unused-vars */
import React from "react";
import images from "../../constants/images";
import Subtitle from "../../components/Subtitle/Subtitle";
import Title from "../../components/Title/Title";

import "./Customers.css";

const customersData = [
  {
    image: images.customer01,
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.",
    name:'Wade Warren',
    job:'Sommelier'
  },
  {
    image: images.customer02,
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.",
    name:'Jane Cooper',
    job:'Chef'
  },
  {
    image: images.customer03,
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.",
    name:'Robert Fox',
    job:'Chef'
  },
  {
    image: images.customer04,
    info: "Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue.",
    name:'Brooklyn Simmons',
    job:'Caterer'
  },
];

const Customers = () => {
  return (
    <div className='customers'>
      <Subtitle content='Testimony' />
      <Title content='Happy Customers' purpose='section' />
      <div className='customers__content'>
        {customersData.map((customer,index)=>(
          <div className="customer-card" key={index}>
            <div className="customer-card__image-wrapper">
              <img className="customer-card__image" src={customer.image} alt={customer.name} />
            </div>
            <div className="customer-card__content">
              <p className="customer-card__info">{customer.info}</p>
              <p className="customer-card__name">{customer.name}</p>
              <p className="customer-card__job">{customer.job}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Customers;
