/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { fontFamily, fontSize, gray2 } from "./Data/Styles";

import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "./Components/Pages/HomePage";
// import { AskPage } from "./Components/Pages/AskPage";
import { SearchPage } from "./Components/Pages/SearchPage";
import { SignInPage } from "./Components/Pages/SignInPage";
import { NotFoundPage } from "./Components/Pages/NotFoundPage";
import { QuestionPage } from "./Components/Pages/QuestionPage";
import { Header } from "./Components/Layout/Header";

const AskPage = React.lazy(() => import("./Components/Pages/AskPage"));

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div
        css={css`
          font-family: ${fontFamily};
          font-size: ${fontSize};
          color: ${gray2};
        `}
      >
        <Header />
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="search" element={<SearchPage />} />
          <Route
            path="ask"
            element={
              <React.Suspense
                fallback={
                  <div
                    css={css`
                      margin-top: 100px;
                      text-align: center;
                    `}
                  >
                    Loading...
                  </div>
                }
              >
                <AskPage />
              </React.Suspense>
            }
          />
          <Route path="signin" element={<SignInPage />} />
          <Route path="questions/:questionId" element={<QuestionPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
