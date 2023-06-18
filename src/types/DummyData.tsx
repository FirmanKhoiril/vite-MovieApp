import { TbMovie } from "react-icons/tb";
import { BsStar, BsCollectionPlayFill, BsMagic, BsStopwatch } from "react-icons/bs";
import { SiThemoviedatabase } from "react-icons/si";
import { GiPunchBlast, GiPistolGun, GiCactus, GiForestCamp, GiDrippingKnife, GiLovers, GiUfo, GiCrossedPistols } from "react-icons/gi";
import { MdFamilyRestroom } from "react-icons/md";
import { FaMusic } from "react-icons/fa";
import { RiMickeyLine, RiEmotionLaughLine, RiEmotionSadLine } from "react-icons/ri";
import { BiCameraMovie, BiMask } from "react-icons/bi";

import { IoSkullSharp } from "react-icons/io5";
export const Categorygenres = [
  {
    title: "Categories",
    genre: [
      {
        name: "Popular",
        icon: <TbMovie />,
        url: "movie/popular?language=en-US",
      },
      {
        name: "Top Rated",
        icon: <BsStar />,
        url: "movie/top_rated?language=en-US",
      },
      {
        name: "Upcoming",
        icon: <SiThemoviedatabase />,
        url: "movie/upcoming?language=en-US",
      },
    ],
  },

  {
    title: "Genres",
    genre: [
      {
        name: "action",
        icon: <GiPunchBlast />,
        url: "discover/movie?language=en-US&with_genres=28",
      },
      {
        name: "adventure",
        icon: <GiForestCamp />,
        url: "discover/movie?language=en-US&with_genres=12",
      },
      {
        name: "animation",
        icon: <RiMickeyLine />,
        url: "discover/movie?language=en-US&with_genres=16",
      },
      {
        name: "comedy",
        icon: <RiEmotionLaughLine />,
        url: "discover/movie?language=en-US&with_genres=35",
      },
      {
        name: "crime",
        icon: <GiPistolGun />,
        url: "discover/movie?language=en-US&with_genres=80",
      },
      {
        name: "documentary",
        icon: <BiCameraMovie />,
        url: "discover/movie?language=en-US&with_genres=99",
      },
      {
        name: "drama",
        icon: <RiEmotionSadLine />,
        url: "discover/movie?language=en-US&with_genres=18",
      },
      {
        name: "family",
        icon: <MdFamilyRestroom />,
        url: "discover/movie?language=en-US&with_genres=10751",
      },
      {
        name: "fantasy",
        icon: <BsMagic />,
        url: "discover/movie?language=en-US&with_genres=14",
      },
      {
        name: "history",
        icon: <BsStopwatch />,
        url: "discover/movie?language=en-US&with_genres=36",
      },
      {
        name: "horror",
        icon: <GiDrippingKnife />,
        url: "discover/movie?language=en-US&with_genres=27",
      },
      {
        name: "music",
        icon: <FaMusic />,
        url: "discover/movie?language=en-US&with_genres=10402",
      },
      {
        name: "mystery",
        icon: <BiMask />,
        url: "discover/movie?language=en-US&with_genres=9648",
      },
      {
        name: "romance",
        icon: <GiLovers />,
        url: "discover/movie?language=en-US&with_genres=10749",
      },
      {
        name: "science Fiction",
        icon: <GiUfo />,
        url: "discover/movie?language=en-US&with_genres=878",
      },
      {
        name: "tV Movie",
        icon: <BsCollectionPlayFill />,
        url: "discover/movie?language=en-US&with_genres=10770",
      },
      {
        name: "thriller",
        icon: <IoSkullSharp />,
        url: "discover/movie?language=en-US&with_genres=53",
      },
      {
        name: "war",
        icon: <GiCrossedPistols />,
        url: "discover/movie?language=en-US&with_genres=10752",
      },
      {
        name: "western",
        icon: <GiCactus />,
        url: "discover/movie?language=en-US&with_genres=37",
      },
    ],
  },
];
