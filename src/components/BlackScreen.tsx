import { useGlobalContext } from "../context/Context";

const BlackScreen = () => {
  const { setToogleSidebar } = useGlobalContext();
  return <div onClick={() => setToogleSidebar((prev: boolean) => !prev)} className="fixed top-0 z-20 bg-black/60 min-h-screen w-full" />;
};

export default BlackScreen;
