/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React from "react";
import { useNavigate } from "react-router-dom";

import { QuestionList } from "../Questions/QuestionList";
import { getUnansweredQuestions, QuestionData } from "../../Data/QuestionsData";
import { Page } from "../Layout/Page";
import { PageTitle } from "../Layout/PageTitle";
import { PrimaryButton } from "../../Data/Styles";

export const HomePage = () => {
  const [questions, setQuestions] = React.useState<QuestionData[]>([]);
  const [questionsLoading, setQuestionsLoading] = React.useState(true);

  React.useEffect(() => {
    const doGetUnansweredQuestions = async () => {
      const unansweredQuestions = await getUnansweredQuestions();
      setQuestions(unansweredQuestions);
      setQuestionsLoading(false);
    };
    doGetUnansweredQuestions();
  }, []);

  const navigate = useNavigate();

  const handleAskQuestionClick = () => {
    navigate("ask");
  };

  return (
    <Page>
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
        `}
      >
        <PageTitle>Unanswered Questions</PageTitle>
        <PrimaryButton onClick={handleAskQuestionClick}>
          Ask a Question
        </PrimaryButton>
      </div>
      {questionsLoading ? (
        <div>Loading...</div>
      ) : (
        <QuestionList data={questions} />
      )}
    </Page>
  );
};
