import { IGenre } from "../types/Types";
import { BsCollectionPlayFill, BsMagic, BsStopwatch } from "react-icons/bs";
import { GiPunchBlast, GiPistolGun, GiCactus, GiForestCamp, GiDrippingKnife, GiLovers, GiUfo, GiCrossedPistols } from "react-icons/gi";
import { MdFamilyRestroom } from "react-icons/md";
import { FaMusic } from "react-icons/fa";
import { RiMickeyLine, RiEmotionLaughLine, RiEmotionSadLine } from "react-icons/ri";
import { BiCameraMovie, BiMask } from "react-icons/bi";
import { IoSkullSharp } from "react-icons/io5";
import { Tooltip } from "@mui/material";

const Genre = ({ genre }: IGenre) => {
  const genreIcon = () => {
    switch (genre.name) {
      case "Action":
        return <GiPunchBlast size={30} />;
      case "Animation":
        return <RiMickeyLine size={30} />;
      case "Adventure":
        return <GiForestCamp size={30} />;
      case "Crime":
        return <GiPistolGun size={30} />;
      case "Comedy":
        return <RiEmotionLaughLine size={30} />;
      case "Drama":
        return <RiEmotionSadLine size={30} />;
      case "Family":
        return <MdFamilyRestroom size={30} />;
      case "History":
        return <BsStopwatch size={30} />;
      case "Fantasy":
        return <BsMagic size={30} />;
      case "Horror":
        return <GiDrippingKnife size={30} />;
      case "Music":
        return <FaMusic size={30} />;
      case "Mystery":
        return <BiMask size={30} />;
      case "Romance":
        return <GiLovers size={30} />;
      case "Documentary":
        return <BiCameraMovie size={30} />;
      case "Western":
        return <GiCactus size={30} />;
      case "War":
        return <GiCrossedPistols size={30} />;
      case "Thriller":
        return <IoSkullSharp size={30} />;
      case "TV Movie":
        return <BsCollectionPlayFill size={30} />;
      case "Science Fiction":
        return <GiUfo size={30} />;
      default:
        return null;
    }
  };
  const icon = genreIcon();
  return (
    <Tooltip title={genre.name}>
      <span className="flex items-center flex-col">
        {icon}
        {genre.name}
      </span>
    </Tooltip>
  );
};

export default Genre;
