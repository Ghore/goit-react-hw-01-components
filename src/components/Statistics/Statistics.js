import React from "react";
import styles from "./statistics.module.css";
import prop from "prop-types";

function randomColor() {
    return `rgb(
    ${Math.floor(Math.random() * 245)},
    ${Math.floor(Math.random() * 255)}, 
    ${Math.floor(Math.random() * 250)})
    `;
  }

const Statistics = ({ title, stats}) => (
    
  <>
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.statList}>
          
        {stats.map(({ id, label, percentage }) => (
          <li className="item"
          style={{ backgroundColor: randomColor() }} key={id}>
            <span className={styles.label}>{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))
        }
      </ul>
    </section>
  </>
);

Statistics.defaultProps = {
  title: prop.string,
};

Statistics.propTypes = {
    label: prop.string.isRequired,
    percentage: prop.number.isRequired,
};
export default Statistics;
