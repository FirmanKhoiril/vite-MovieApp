import { Box } from "@mui/material";
import { RotatingLines } from "react-loader-spinner";

const Loading = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", minHeight: "30vh", alignItems: "center" }}>
      <RotatingLines strokeColor="#dc2626" strokeWidth="5" animationDuration="0.75" width="60" visible={true} />
    </Box>
  );
};

export default Loading;
