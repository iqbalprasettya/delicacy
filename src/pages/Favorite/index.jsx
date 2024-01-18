import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { callAPI } from "../../domain/api";

import classes from "./style.module.scss";
import { Grid } from "@mui/material";

import ListCard from "../../components/ListRecipies";

const index = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchFavorite();
  }, []);

  const fetchFavorite = async () => {
    const res = await axios.get("http://localhost:3000/favorites");

    const modifiedResponse = res.data?.map(async (item) => {
      const responseByName = await callAPI(`/search.php?s=${item.strMeal}`, "GET");
      const { idMeal, strMealThumb, strMeal } = responseByName.meals[0];
      return {
        id: idMeal,
        strMeal: strMeal,
        strMealThumb: strMealThumb,
      };
    });

    const finalResponse = await Promise.all(modifiedResponse);
    console.log(finalResponse);
    setData(finalResponse);
  };

  const deleteFavorite = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/favorites/${idMeal}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={classes["container"]}>
        <div className={classes["list-card"]}>
          {data?.map((item, index) => {
            return (
              <Link className={classes["link-detail"]} to={`/details/${item.id}`} key={item.id}>
                <ListCard key={index} data={item} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default index;
