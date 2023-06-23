import { Box, Typography } from "@mui/material";
import { Radio } from "react-loader-spinner";

const Error = ({ error }: any) => {
  return (
    <Box sx={{ minHeight: "100vh", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <Radio width="80" visible={true} />
      <Typography variant="h5">{error?.message}</Typography>
    </Box>
  );
};

export default Error;
