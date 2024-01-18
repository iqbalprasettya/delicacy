import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import classes from "./style.module.scss";

import { callAPI } from "../../domain/api";

import ListCard from "../../components/ListRecipies";
import CardDetail from "../../components/CardDetail";

const index = () => {
  const [data, setData] = useState(null);
  const [randomData, setRandomData] = useState(null);

  useEffect(() => {
    fetchData();
    fetchRandom();
  }, []);

  const fetchData = async () => {
    const responseByCategories = await callAPI("/filter.php?c=Beef", "GET");
    const slicedResponse = responseByCategories?.meals?.slice(0, 10);

    const modifiedResponse = slicedResponse?.map(async (item) => {
      const responseByName = await callAPI(`/search.php?s=${item.strMeal}`, "GET");
      const { idMeal, strInstructions, strMeal, strCategory, strMealThumb, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strMeasure1, strMeasure2, strMeasure3, strMeasure4 } = responseByName.meals[0];
      return {
        idMeal,
        strInstructions,
        strMeal,
        strCategory,
        strMealThumb,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strMeasure1,
        strMeasure2,
        strMeasure3,
        strMeasure4,
      };
    });

    const finalResponse = await Promise.all(modifiedResponse);
    setData(finalResponse);
  };

  const fetchRandom = async () => {
    try {
      const result = [];
      for (let i = 0; i < 10; i++) {
        result.push(callAPI("/random.php", "GET"));
      }
      const finalResponse = await Promise.all(result);
      setRandomData(finalResponse?.map((e) => e.meals[0]));
    } catch (error) {
      console.log(error);
    }

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
            <a href="/favorites">Favorite</a>
          </div>
        </div>
      </div>

      <div className={classes["container"]}>
        <div className={classes["menu"]}>
          {/* <CardDetail item={item} categoryValue={categoryValue} /> */}

          {data?.map((item) => (
            <>
              <CardDetail data={item} />
            </>
          ))}
        </div>
      </div>
      <br />
      <div className={classes["container"]}>
        <h2>More recipies</h2>
        <div className={classes["list-card"]}>
          {randomData?.map((item) => (
            <>
              <Link className={classes["link-detail"]} to={`/details/${item.idMeal}`} key={item.id}>
                <ListCard data={item} />
              </Link>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default index;
