import React from "react";
import classes from "./style.module.scss";


import OliveOil from "../../assets/img/olive-oil.png";
import SalmonPng from "../../assets/img/salmon1.png";

const index = () => {
  return (
    <>
      <div className={classes["menu-item"]}>
        <div className={classes["menu-desc"]}>
          <div className={classes["image-food"]}>
            <img src={SalmonPng} alt="" />
          </div>
          <div className={classes["menu-header"]}>
            <h2>Baked salmon with fennel & tomatoes</h2>
          </div>
          <div className={classes["menu-text"]}>
            "Heat oven to 180C/fan 160C/gas 4. Trim the fronds from the fennel and set aside. Cut the fennel bulbs in half, then cut each half into 3 wedges. Cook in boiling salted water for 10 mins, then drain well. Chop the fennel fronds
            roughly, then mix with the parsley and lemon zest.\r\n\r\nSpread the drained fennel over a shallow ovenproof dish, then add the tomatoes. Drizzle with olive oil, then bake for 10 mins. Nestle the salmon among the veg, sprinkle
            with lemon juice, then bake 15 mins more until the fish is just cooked. Scatter over the parsley and serve."
          </div>
          <div className={classes["ingredients"]}>
            <h2>Ingredients</h2>
            <br />
            <div className={classes["ingredients-items"]}>
              <div className={classes["item"]}>
                <div className={classes["image"]}>
                  <img src={OliveOil} alt="" />
                </div>
                <div className={classes["text"]}>
                  <h5>Fennel</h5>
                  <p>2 medium</p>
                </div>
              </div>
              <div className={classes["item"]}>
                <div className={classes["image"]}>
                  <img src={OliveOil} alt="" />
                </div>
                <div className={classes["text"]}>
                  <h5>Parsley</h5>
                  <p>2 tbs chopped</p>
                </div>
              </div>
              <div className={classes["item"]}>
                <div className={classes["image"]}>
                  <img src={OliveOil} alt="" />
                </div>
                <div className={classes["text"]}>
                  <h5>Salmon</h5>
                  <p>350g</p>
                </div>
              </div>
              <div className={classes["item"]}>
                <div className={classes["image"]}>
                  <img src={OliveOil} alt="" />
                </div>
                <div className={classes["text"]}>
                  <h5>Olive Oil</h5>
                  <p>1 tbs</p>
                </div>
              </div>
            </div>
          </div>
          <div className={classes["btn-items"]}>
            <a href="">Detail</a>
            <a href="">Add to favorites</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
