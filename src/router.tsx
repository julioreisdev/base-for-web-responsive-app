import React, { FC, Suspense, useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/auth/protected-route";
import LazyLoading from "./components/style/lazy-loading";
import { GlobalContext } from "./contexts/global-context";
import { Box } from "@mui/material";
import Sidebar from "./components/sidebar/sidebar";
import UnProtectedRoute from "./components/auth/unprotected-route";

//auth
const LoginPage = React.lazy(() => import("./pages/auth/login-page"));
const SignUpPage = React.lazy(() => import("./pages/auth/sign-up-page"));
// const VerifyCodePage = React.lazy(() => import("./pages/auth/verify-code"));
// const RestorePasswordPage = React.lazy(
//   () => import("./pages/auth/restore-password-page")
// );

//dash
const Home = React.lazy(() => import("./pages/dashboard/home"));
const RestorePasswordPage = React.lazy(
  () => import("./pages/auth/restore-password-page")
);
const VerifyCodePage = React.lazy(
  () => import("./pages/auth/verify-code-page")
);

const Router: FC = () => {
  const context = useContext(GlobalContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense
              fallback={<LazyLoading color={context?.colors.text || ""} />}
            >
              <UnProtectedRoute>
                <LoginPage />
              </UnProtectedRoute>
            </Suspense>
          }
        />
        <Route
          path="/signup"
          element={
            <Suspense
              fallback={<LazyLoading color={context?.colors.text || ""} />}
            >
              <UnProtectedRoute>
                <SignUpPage />
              </UnProtectedRoute>
            </Suspense>
          }
        />
        <Route
          path="/restore-password"
          element={
            <Suspense
              fallback={<LazyLoading color={context?.colors.text || ""} />}
            >
              <UnProtectedRoute>
                {" "}
                <RestorePasswordPage />
              </UnProtectedRoute>
            </Suspense>
          }
        />

        <Route
          path="/whatsapp-verify"
          element={
            <Suspense
              fallback={<LazyLoading color={context?.colors.text || ""} />}
            >
              <UnProtectedRoute>
                {" "}
                <VerifyCodePage />
              </UnProtectedRoute>
            </Suspense>
          }
        />

        <Route
          path="/dashboard/*"
          element={
            <Suspense
              fallback={<LazyLoading color={context?.colors.text || ""} />}
            >
              {" "}
              <ProtectedRoute>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    gap: "1rem",
                  }}
                >
                  <Sidebar
                    children={
                      <Routes>
                        <Route
                          path="/home"
                          element={
                            <Suspense
                              fallback={
                                <LazyLoading
                                  color={context?.colors.text || ""}
                                />
                              }
                            >
                              <Home />
                            </Suspense>
                          }
                        />
                      </Routes>
                    }
                  />
                </Box>
              </ProtectedRoute>
            </Suspense>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
