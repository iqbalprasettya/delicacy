import React, { useEffect, useState } from "react";

import classes from "./style.module.scss";

// import CallApi from "../../domain/api";

import ListCard from "../../components/ListRecipies";
import CardDetail from "../../components/CardDetail";

const index = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const responseByCategories = await callAPI("/filter.php?c=Beef", "GET");
    const slicedResponse = responseByCategories?.meals?.slice(0, 10);

    const modifiedResponse = slicedResponse?.map(async (item) => {
      const responseByName = await callAPI(`/search.php?s=${item.strMeal}`, "GET");
      const { idMeal, strIngredient1, strMeasure1, strMealThumb, strMeal } = responseByName.meals[0];
      return {
        idMeal,
        strIngredient1,
        strMeasure1,
        strMealThumb,
        strMeal,
      };
    });

    const finalResponse = await Promise.all(modifiedResponse);
    setData(finalResponse);
  };
  return (
    <>
      <div className={classes["list-category"]}>
        <div className={classes["container"]}>
          <div className={classes["category"]}>
            <a href="">Beef</a>
            <a href="">Chicken</a>
            <a href="">Dessert</a>
            <a href="">Lamb</a>
            <a href="">Miscellaneous</a>
            <a href="">Pasta</a>
            <a href="">Favorite</a>
          </div>
        </div>
      </div>

      <div className={classes["container"]}>
        <div className={classes["menu"]}>
          {/* <CardDetail item={item} categoryValue={categoryValue} /> */}
          <CardDetail />
          <CardDetail />
          <CardDetail />
          <CardDetail />
          <CardDetail />
        </div>
      </div>
      <br />
      <div className={classes["container"]}>
        <h2>More recipies</h2>
        <div className={classes["list-card"]}>
          <ListCard />
          <ListCard />
          <ListCard />
          <ListCard />
          <ListCard />
          <ListCard />
          <ListCard />
          <ListCard />
          <ListCard />
          <ListCard />
          <ListCard />
          <ListCard />
          <ListCard />
          <ListCard />
          <ListCard />
          <ListCard />
        </div>
      </div>
    </>
  );
};

export default index;
