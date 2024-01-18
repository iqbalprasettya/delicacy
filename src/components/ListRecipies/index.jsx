import React from 'react'

import classes from "./style.module.scss";

import Dish1 from "../../assets/img/dish1.png"

const index = ({ data }) => {
  return (
    <>
    <div className={classes["list-card-recipies"]}>
        <div className={classes["container"]}>
            <div className={classes["card-recipies"]}>
              <div className={classes["card-item"]}>
                <div className={classes["body-text"]}>
                  <img src={data.strMealThumb} alt="" />
                  <h3>{data.strMeal}</h3>
                </div>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default index