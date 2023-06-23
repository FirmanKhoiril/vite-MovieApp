import { useParams } from "react-router-dom";

const Actor = () => {
  const { id } = useParams();
  return <div>Actor {id}</div>;
};

export default Actor;
