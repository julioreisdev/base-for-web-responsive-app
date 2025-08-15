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

const SignUpPage: FC = () => {
  const context = useContext(GlobalContext);
  const navigate = useNavigate();
  return (
    <CenterBox style={{ flexDirection: "column" }} overflow={35.19}>
      <h3 style={{ textAlign: "center", width: " 80%" }}>
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
              navigate("/whatsapp-verify");
            }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              width: "100%",
            }}
          >
            <InputApp
              id="register-name"
              type={"text"}
              placeholder="Nome"
              required
              color={context?.colors.text}
              bgColor={context?.colors.comments}
            />
            <InputApp
              id="register-phone"
              type={"tel"}
              placeholder="Telefone"
              required
              color={context?.colors.text}
              bgColor={context?.colors.comments}
            />
            <InputApp
              id="register-email"
              type={"email"}
              placeholder="E-mail"
              required
              color={context?.colors.text}
              bgColor={context?.colors.comments}
            />
            <InputApp
              id="register-password"
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
                Cadastrar
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
            <p>Já possui uma conta?</p>
            <Link
              to={"/"}
              style={{ color: context?.colors.blue, textDecoration: "none" }}
            >
              Faça login!
            </Link>
            <p>ou</p>
            <GoogleLoginComponent />
          </Box>
        </Box>
      </Box>
    </CenterBox>
  );
};

export default SignUpPage;
