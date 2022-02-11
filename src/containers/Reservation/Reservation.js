import React from 'react';
import images from '../../constants/images';
import Bite from '../../components/Bite/Bite';
import ActionButton from '../../components/ActionButton/ActionButton';
import Title from '../../components/Title/Title';
import Subtitle from '../../components/Subtitle/Subtitle';
import './Reservation.css';

const Reservation = () => {
  return (
    <div className="reservation">
      <Bite position="top-right" />
      <div className="reservation__inner">
        <Subtitle content="Reservation" />
        <Title
          classes="title_wrap_no mr_bottom-3"
          purpose="section"
          content="Book A Table"
        />
        <div className="reservation__form mr_bottom-3">
          <div className="select">
            <div className="select__icons">
              <img
                className="select__icon"
                src={images.arrow_down_SVG}
                alt="arrow down"
              />
            </div>
            <select className="select__input" required>
              <option className="select__option" value="1">
                1 person
              </option>
              <option className="select__option" value="2">
                2 persons
              </option>
              <option className="select__option" value="3">
                3 persons
              </option>
              <option className="select__option" value="4">
                4 persons
              </option>
              <option className="select__option" value="5">
                5 persons
              </option>
              <option className="select__option" value="6">
                6 persons
              </option>
            </select>
          </div>
          <div className="select">
            <div className="select__icons">
              <img
                className="select__icon"
                src={images.arrow_down_SVG}
                alt="arrow down"
              />
            </div>
            <select className="select__input" required>
              <option className="select__option" value="1">
                12/05/2022
              </option>
              <option className="select__option" value="2">
                18/05/2022
              </option>
              <option className="select__option" value="3">
                11/06/2022
              </option>
              <option className="select__option" value="4">
                12/05/2022
              </option>
              <option className="select__option" value="5">
                10/03/2022
              </option>
              <option className="select__option" value="6">
                12/04/2022
              </option>
            </select>
          </div>
          <div className="select">
            <div className="select__icons">
              <img
                className="select__icon"
                src={images.arrow_down_SVG}
                alt="arrow down"
              />
            </div>
            <select className="select__input" required>
              <option className="select__option" value="1">
                11.00 p.m.
              </option>
              <option className="select__option" value="2">
                2 p.m.
              </option>
              <option className="select__option" value="3">
                2.00 a.m.
              </option>
              <option className="select__option" value="4">
                9.00 p.m.
              </option>
              <option className="select__option" value="5">
                6.00 p.m.
              </option>
              <option className="select__option" value="6">
                3 a.m.
              </option>
            </select>
          </div>
        </div>
        <ActionButton label="Book Now" />
      </div>
    </div>
  );
};
export default Reservation;
