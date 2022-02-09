import React from "react";
import "./Reservation.css";
import images from "../../constants/images";

const Reservation = () => {
  return (
    <div className='reservation'>
      <div className='subtitle mr_bottom-05 flex_center'>
        <p className='subtitle__text mr_bottom-05'>Reservation</p>
        <img className='subtitle__spoon' src={images.spoon} alt='spoon' />
      </div>
      <h2 className='title title_wrap_no mr_bottom-3'>Book A Table</h2>
      <div className="reservation__inputs mr_bottom-3">
        <div className="custom-select">
          <select className="custom-select__select-input" name="persons" required >
            <option className="custom-select__option" value="1">Person 1</option>
            <option className="custom-select__option" value="2">Person 2</option>
            <option className="custom-select__option" value="3">Person 3</option>
            <option className="custom-select__option" value="4">Person 4</option>
          </select>
        </div>
        <div className="custom-select">
          <select className="custom-select__select-input" name="date" required >
            <option className="custom-select__option" value="1">12/05/2021</option>
            <option className="custom-select__option" value="2">17/05/2022</option>
          </select>
        </div>
        <div className="custom-select">
          <select className="custom-select__select-input" name="hour" required >
            <option className="custom-select__option" value="1">11.00 AM</option>
            <option className="custom-select__option" value="2">9.00 AM</option>
            <option className="custom-select__option" value="3">15.00 AM</option>
          </select>
        </div>
      </div>
      <button type='button' className='button'>
        Book Now
      </button>
    </div>
  );
};
export default Reservation;
