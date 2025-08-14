import { FC, useContext } from "react";
import { Box } from "@mui/material";

import { TailSpin } from "react-loader-spinner";
import { GlobalContext } from "../../../contexts/global-context";

const Home: FC = () => {
  const context = useContext(GlobalContext);
  const loading = false;

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h3>Início</h3>
        {/* <Button
          onClick={() => {
            navigate("novo");
          }}
          startIcon={<Icons.AddIcon />}
          variant="contained"
        >
          Novo
        </Button> */}
      </Box>
      {loading ? (
        <Box
          sx={{
            width: "100%",
            height: "70vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TailSpin width={60} height={60} color={context?.colors.blueDark} />
        </Box>
      ) : (
        <Box sx={{ paddingTop: "1rem" }}>Home</Box>
      )}
    </Box>
  );
};

export default Home;
