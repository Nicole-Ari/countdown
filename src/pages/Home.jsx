import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Card from "../components/Card";
import "./home.css";
const Home = () => {
  const [date, setDate] = useState([]);
  const targetDate = new Date("April 18, 2026 00:00:00").getTime();

  const calculateDate = (dt) => {
    if (isNaN(dt)) {
      return [];
    }
    const days = Math.floor(dt / (1000 * 60 * 60 * 24));
    const hours = Math.floor((dt % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((dt % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((dt % (1000 * 60)) / 1000);
    return [
      { days: days },
      { hours: hours },
      { minutes: minutes },
      { seconds: seconds },
    ];
  };
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      // si le timer est terminé, on arrête l'intervalle
      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      const dt = calculateDate(distance);
      setDate(dt);
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="main">
      <div className="haut">
        <p>
          Countdown started :<span> &nbsp; D-{date[0]?.days} </span>until the
          big day!
        </p>
        <div className="container">
          {date.map((item, index) => {
            const key = Object.keys(item)[0];

            return (
              <Card key={index} index={index} desc={key} date={item[key]} />
            );
          })}
        </div>
      </div>

      <div className="bas">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
