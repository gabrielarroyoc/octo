import React, { useEffect, useState } from "react";
import { Tmdb } from "./Tmdb";
import { MovieRow } from "./components/MovieRow";
import FeaturedMovie from "./components/MovieRow/FeaturedMovie";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import Header from "./components/MovieRow/Header/index";
import { WindowSharp } from "@mui/icons-material";

export default () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      let originals = list.filter((i) => i.slug === "originals");
      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let chosen = originals[0].items.results[randomChosen];
      console.log(chosen);
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv");
      setFeaturedData(chosenInfo);
    };
    loadAll();
  }, []);
  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };
    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div className="page">
      <Header black={blackHeader} />

      {featuredData && <FeaturedMovie item={featuredData} />}

      <section className="lists">
        {movieList.map((item, key) => {
          console.log(item);
          return <MovieRow key={key} title={item.title} items={item.items} />;
        })}
      </section>
      <div className="loading"></div>
    </div>
  );
};
