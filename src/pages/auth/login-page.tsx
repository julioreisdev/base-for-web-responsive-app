import { FC, useContext } from "react";
import CenterBox from "../../components/style/center-box";
import { Box } from "@mui/material";
import { GlobalContext } from "../../contexts/global-context";
import { Link, useNavigate } from "react-router-dom";
import { InputApp } from "../../components/style/inputs";
import { LoadingButton } from "@mui/lab";
import Lottie from "react-lottie";
import LoginLutties from "../../utils/login-lotties";
import getRandomInt from "../../utils/random";
import GoogleLoginComponent from "../../components/auth/google-oauth";

const options = {
  loop: true,
  autoplay: true,
  animationData: LoginLutties[getRandomInt(LoginLutties.length)],
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const LoginPage: FC = () => {
  const context = useContext(GlobalContext);
  const navigate = useNavigate();

  function submit() {
    localStorage.setItem("authorization", "token");
    navigate("/dashboard/home");
  }
  return (
    <CenterBox style={{ flexDirection: "column" }} overflow={35.19}>
      <h3 style={{ textAlign: "center", width: " 80%" }}>
        {" "}
        Descrição do seu projeto
      </h3>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Box sx={{ "@media(max-width: 720px)": { display: "none" } }}>
          <Lottie options={options} height={400} width={400} />
        </Box>
        <Box
          sx={{
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            width: "300px",
          }}
        >
          <h3 style={{ color: context?.colors.blue }}>Título</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submit();
            }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              width: "100%",
            }}
          >
            <InputApp
              id="login-email"
              type={"email"}
              placeholder="E-mail"
              required
              color={context?.colors.text}
              bgColor={context?.colors.comments}
            />
            <InputApp
              id="login-password"
              type={"password"}
              placeholder="Senha"
              required
              color={context?.colors.text}
              bgColor={context?.colors.comments}
            />

            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <LoadingButton type="submit" variant="outlined">
                Entrar
              </LoadingButton>
            </Box>
          </form>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {" "}
            <p>Não tem uma conta?</p>
            <Link
              to={"/signup"}
              style={{ color: context?.colors.blue, textDecoration: "none" }}
            >
              Cadastre-se
            </Link>
            <p>ou</p>
            <GoogleLoginComponent />
          </Box>
          <Link
            style={{ color: context?.colors.text, fontSize: "0.8rem" }}
            to={"/restore-password"}
          >
            Esqueci minha senha
          </Link>
        </Box>
      </Box>
    </CenterBox>
  );
};

export default LoginPage;
