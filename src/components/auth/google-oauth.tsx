import { FC } from "react";
import {
  GoogleOAuthProvider,
  GoogleLogin,
  CredentialResponse,
} from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const GoogleLoginComponent: FC = () => {
  const navigate = useNavigate();
  function submit(token: string) {
    localStorage.setItem("authorization", token);
    navigate("/dashboard/home");
  }
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  const onSuccess = (response: CredentialResponse) => {
    console.log("Login com sucesso:", response);
    submit(response.credential || "");
  };

  const onError = () => {
    console.log("Login falhou");
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin onSuccess={onSuccess} onError={onError} />
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginComponent;
