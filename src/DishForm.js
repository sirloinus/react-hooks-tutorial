import React, { useRef } from 'react';
import { useBodyScrollLock } from './hooks/bodyScrollLock';
import { useOnClickOutside } from './hooks/useOnClickOutside';

const DishForm = ({ setToggle }) => {
  // using ref to get access to a dom node
  const ref = useRef();

  // passing multiple arguments to a hook: a ref and a callback function setToggle
  useOnClickOutside(ref, () => setToggle(false));

  // using multiple hooks with the useBodyScrollLock
  useBodyScrollLock();

  return (
    <div className="dish-card" ref={ref}>
      <form>
        <div className="form-row">
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" />
        </div>
      </form>
    </div>
  );
};

export default DishForm;
