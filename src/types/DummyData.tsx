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
      },
      {
        name: "Top Rated",
        icon: <BsStar />,
      },
      {
        name: "Upcoming",
        icon: <SiThemoviedatabase />,
      },
    ],
  },

  {
    title: "Genres",
    genre: [
      {
        name: "action",
        icon: <GiPunchBlast />,
      },
      {
        name: "adventure",
        icon: <GiForestCamp />,
      },
      {
        name: "animation",
        icon: <RiMickeyLine />,
      },
      {
        name: "comedy",
        icon: <RiEmotionLaughLine />,
      },
      {
        name: "crime",
        icon: <GiPistolGun />,
      },
      {
        name: "documentary",
        icon: <BiCameraMovie />,
      },
      {
        name: "drama",
        icon: <RiEmotionSadLine />,
      },
      {
        name: "family",
        icon: <MdFamilyRestroom />,
      },
      {
        name: "fantasy",
        icon: <BsMagic />,
      },
      {
        name: "history",
        icon: <BsStopwatch />,
      },
      {
        name: "horror",
        icon: <GiDrippingKnife />,
      },
      {
        name: "music",
        icon: <FaMusic />,
      },
      {
        name: "mystery",
        icon: <BiMask />,
      },
      {
        name: "romance",
        icon: <GiLovers />,
      },
      {
        name: "science Fiction",
        icon: <GiUfo />,
      },
      {
        name: "tV Movie",
        icon: <BsCollectionPlayFill />,
      },
      {
        name: "thriller",
        icon: <IoSkullSharp />,
      },
      {
        name: "war",
        icon: <GiCrossedPistols />,
      },
      {
        name: "western",
        icon: <GiCactus />,
      },
    ],
  },
];
