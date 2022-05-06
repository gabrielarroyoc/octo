import React from "react";
import "./FeaturedMovie.css";
import { Button, ButtonGroup } from "@chakra-ui/react";
import icon_play from "../MovieRow/icon_play.svg";
import icon_rectangle from "../MovieRow/icon_rectangle.svg";

export default ({ item }) => {
  let firstDate = new Date(item.first_air_date);
  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  return (
    <section
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--genres">
            <a href="">{genres.join(", ")}</a>
          </div>
          <div className="featured--name">{item.original_name}</div>
          <div className="featured--info">{item.overview}</div>
          <div className="featured--points">{item.vote_average}</div>
          <div className="featured--year">{firstDate.getFullYear()}</div>
          <div className="featured--seasons">
            {item.number_of_seasons}Temporada
            {item.number_of_seasons !== 1 ? "s" : ""}
          </div>

          <div className="featured--buttons">
            <a href="">
              <icon_play></icon_play>
              <icon_rectangle></icon_rectangle>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
