import React, { useState, useRef, useLayoutEffect } from "react";
import "./../../index.css";

const UseSwitch = ({ items,onToggle,isToggled }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemWidths, setItemWidths] = useState([]);

  const itemRefs = useRef([]);

  useLayoutEffect(() => {
    const widths = itemRefs.current.map(ref => ref.offsetWidth);
    setItemWidths(widths);
  }, [items]);

  const handleToggle = (index) => {
    setActiveIndex(index);

    // Construct an object with the selected item
    const selectedItemObject = {
      index: index,
      item: items[index]
    };

    // Call the onToggle function passed from parent component with the selected item object
    onToggle(selectedItemObject);

    // Log the selected item object
    console.log(selectedItemObject);
  };
  

  const getBackgroundStyles = () => {
    let left = 0;
    let width = 0;

    for (let i = 0; i < activeIndex; i++) {
      left += itemWidths[i];
    }

    width = itemWidths[activeIndex];

    return {
      left: `${left}px`,
      width: `${width}px`
    };
  };

  return (
    <div className="switch">
      {items.map((item, index) => (
        <div
          key={index}
          ref={el => (itemRefs.current[index] = el)}
          onClick={() => handleToggle(index)}
          className={`switchText ${activeIndex === index ? "activeTextColor" : ""}`}
        >
          {item}
        </div>
      ))}
      <div className="switchTextBg" style={getBackgroundStyles()}></div>
    </div>
  );
};

export default UseSwitch;
