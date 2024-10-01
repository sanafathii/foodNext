import React from "react";
import styles from "./DetailsPage.module.css";
import Location from "../icons/Location";
import Dollar from "../icons/Dollar";

function DetailsPage({ data }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Details</h2>
      <div className={styles.subContainer}>
        <div className={styles.banner}>
          <img src={`/images/${data.id}.jpeg`} alt="" />
          <div>
            <h3 className={styles.h3}>{data.name}</h3>
            <span className={styles.location}>
              <Location />
              {data.details[0].Cuisine}
            </span>
            <span className={styles.price}>
              <Dollar />
              {data.discount ? (
                <span>{(data.price * (100 - data.discount)) / 100}$</span>
              ) : (
                <span>{data.price}$</span>
              )}
            </span>
            {data.discount ? (
              <span className={styles.discount}>{data.discount}%</span>
            ) : (
              <span></span>
            )}
          </div>
        </div>
        <div className={styles.introduction}>
          <p>{data.introduction}</p>
        </div>
        <div className={styles.details}>
          <h4>Details</h4>
          <ul>
            {data.details.map((item, index) => (
              <li key={index}>
                <p>{Object.keys(item)[0]}:</p>
                <span>{Object.values(item)[0]}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.details}>
          <h4>ingredients</h4>
          <ul>
            {data.ingredients.map((item, index) => (
              <li key={index}>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.recipe}>
          <h4>Recipe</h4>
          {data.recipe.map((item, index) => (
            <div key={index} className={index % 2 ? styles.odd : styles.even}>
              <span>{index + 1}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default DetailsPage;
