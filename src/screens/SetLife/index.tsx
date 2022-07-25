import { useNavigate } from "react-router-dom";
import type{ FC } from "react";

import * as S from "./style";
import BackArrow from "../../assets/BackArrow";
import Button from "../../components/button";
import Text from "../../components/Text";
import Title from "../../components/Title";
import NavBar from "../../components/NavBar";

const SetLifePage:FC = () => {
  const navigate = useNavigate();
  return (
    <S.WrapperSetLifePage>
      <NavBar>
        <Button
          width={"30px"}
          height={"30px"}
          border={false}
          onClick={() => navigate(-1)}
        >
          <BackArrow />
        </Button>
      </NavBar>
      <Title>Initial Life</Title>
      <S.WrapperButtons>
        <Button
          onClick={() =>  navigate("/set-players")}
          width="9.375rem"
        >
          <Text>60</Text>
        </Button>
        <Button
          onClick={() =>  navigate("/set-players")}
          width="9.375rem"
        >
          <Text>40</Text>
        </Button>
      </S.WrapperButtons>
      <S.WrapperButtons>
        <Button
         onClick={() =>  navigate("/set-players")}
          width="9.375rem"
        >
          <Text>30</Text>
        </Button>
        <Button
          onClick={() =>  navigate("/set-players")}
          width="9.375rem"
        >
          <Text>20</Text>
        </Button>
      </S.WrapperButtons>
      <S.WrapperButtons>
        <Button onClick={() => navigate("/set-players")}>
          <Text>custom</Text>
        </Button>
      </S.WrapperButtons>
    </S.WrapperSetLifePage>
  );
};

export default SetLifePage;
