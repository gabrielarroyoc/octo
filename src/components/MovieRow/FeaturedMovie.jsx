import React from "react";
import "./FeaturedMovie.css";
import StarsIcon from "@mui/icons-material/Stars";
import { Button, ButtonGroup } from "@chakra-ui/react";

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
          <div className="featured--genres">{genres.join(", ")}</div>
          <div className="featured--name">{item.original_name}</div>
          <div className="featured--info">{item.overview}</div>
          <div className="featured--points">
            {item.vote_average}
            <StarsIcon style={{ fontSize: 15 }} />
          </div>
          <div className="featured--year">{firstDate.getFullYear()}</div>
          <div className="featured--seasons">
            {item.number_of_seasons}Temporada
            {item.number_of_seasons !== 1 ? "s" : ""}
          </div>

          <div className="featured--buttons">
            <Button colorScheme="teal" variant="outline">
              ▶
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
