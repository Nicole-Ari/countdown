import React, { useEffect, useRef } from "react";
import "./card.css";
const Card = ({ index, desc, date }) => {
  const cardRef = useRef();

  useEffect(() => {
    const el = cardRef.current;
    if (el) {
      el.classList.add("change");
      const timer = setTimeout(() => {
        el.classList.remove("change");
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [date]);

  return (
    <div className="card-container " key={index}>
      <div className="card ">
        <div className=" behind">
          <p>{date}</p>
        </div>
        <div className="item ">
          <p>{date}</p>
          <div className="top change" ref={cardRef}>
            <p>{date}</p>
          </div>
          <div className="bottom"></div>
        </div>
      </div>

      <p className="desc">{desc?.toUpperCase()}</p>
    </div>
  );
};

export default Card;
