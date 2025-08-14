import { FC } from "react";
import { BallTriangle } from "react-loader-spinner";
import { Box } from "@mui/material";

interface IProps {
  color: string;
}

const LazyLoading: FC<IProps> = ({ color }) => {
  const width = window.innerWidth;
  const url = window.location.href;
  const dashboard = url.includes("dashboard");
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        position: "fixed",
        zIndex: 9999,
        top: 0,
        left: 0,
        paddingLeft: dashboard
          ? width < 720
            ? localStorage.getItem("sidebar") === "open"
              ? "239px"
              : "60px"
            : localStorage.getItem("sidebar") === "open"
            ? "239px"
            : ""
          : "",
      }}
    >
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color={color}
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </Box>
  );
};

export default LazyLoading;
