import React from "react";
import classes from "./style.module.scss";
import CardDetail from "../../components/CardDetail";
import ListCard from "../../components/ListRecipies";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";

import { callAPI } from "../../domain/api";

const index = () => {
  const { idMeal } = useParams();
  const [data, setData] = useState();
  const [randomData, setRandomData] = useState(null);

  useEffect(() => {
    fetchItemData();
    fetchRandom();

  }, [idMeal]);

  const fetchItemData = async () => {
    const responseByCategories = await callAPI(`/lookup.php?i=${idMeal}`, "GET");
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
      {data?.map((item) => (
        <>
          <div className={classes["container"]}>
            <div className={classes["detail-wrapper"]}>
              <CardDetail data={item} />
            </div>
            <br />
            <h2>More recipies</h2>
            <br />
            <div className={classes["list-card"]}>
              {randomData?.map((item) => (
                <>
                  <Link className={classes["link-detail"]} to={`/details/${item.idMeal}`} key={item.idMeal}>
                    <ListCard data={item} />
                  </Link>
                </>
              ))}
            </div>
          </div>
        </>
      ))}
    </>
  );
};
export default index;
