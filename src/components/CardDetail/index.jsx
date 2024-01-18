import React from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

import OliveOil from "../../assets/img/olive-oil.png";
import SalmonPng from "../../assets/img/salmon1.png";

import classes from "./style.module.scss";
import { Button } from "@mui/material";

const index = ({ data }) => {
  const [favorite, setFavorite] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchFavorite();
  }, [data, favorite]);

  const fetchFavorite = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/favorites/${data?.idMeal}`).then((response) => {
        return response;
      });
      if (res) setFavorite(true);
    } catch (error) {
      console.log("Favorit tidak ditemukan");
    }
  };

  const postFavorite = async (data) => {
    try {
      await axios.post(`http://localhost:3000/favorites`, data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteFavorite = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/favorites/${data?.idMeal}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* <div className={classes["menu-item"]}> */}
      <div className={classes["menu-desc"]}>
        <div className={classes["image-food"]}>
          <img src={data.strMealThumb} alt="" />
        </div>
        <div className={classes["menu-header"]}>
          <h2>{data.strMeal}</h2>
        </div>
        <div className={classes["menu-text"]}>{data.strInstructions}</div>
        <div className={classes["ingredients"]}>
          <h2>Ingredients</h2>
          <br />
          <div className={classes["ingredients-items"]}>
            <div className={classes["item"]}>
              <div className={classes["image"]}>
                <img src={OliveOil} alt="" />
              </div>
              <div className={classes["text"]}>
                <h5>{data.strIngredient1}</h5>
                <p>{data.strMeasure1}</p>
              </div>
            </div>
            <div className={classes["item"]}>
              <div className={classes["image"]}>
                <img src={OliveOil} alt="" />
              </div>
              <div className={classes["text"]}>
                <h5>{data.strIngredient2}</h5>
                <p>{data.strMeasure2}</p>
              </div>
            </div>
            <div className={classes["item"]}>
              <div className={classes["image"]}>
                <img src={OliveOil} alt="" />
              </div>
              <div className={classes["text"]}>
                <h5>{data.strIngredient3}</h5>
                <p>{data.strMeasure3}</p>
              </div>
            </div>
            <div className={classes["item"]}>
              <div className={classes["image"]}>
                <img src={OliveOil} alt="" />
              </div>
              <div className={classes["text"]}>
                <h5>{data.strIngredient4}</h5>
                <p>{data.strMeasure4}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes["btn-items"]}>
          <a href={`/details/${data.idMeal}`}></a>
          <Button>Detail</Button>
          {favorite && (
            <Button
              variant="outlined"
              onClick={() => {
                deleteFavorite(data?.id);
                setFavorite(false);
              }}
              color="error"
            >
              Remove from Favorite
            </Button>
          )}

          {!favorite && (
            <Button
              variant="outlined"
              onClick={() => {
                postFavorite({
                  id: data?.idMeal,
                  strMeal: data?.strMeal,
                  strMealThumb: data?.strMealThumb,
                });
                setFavorite(true);
              }}
            >
              Add to Favorite
            </Button>
          )}
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default index;
