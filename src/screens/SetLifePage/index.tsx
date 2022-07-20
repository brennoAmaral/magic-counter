import * as S from "./style";
import BackArrow from "../../assets/BackArrow";
import Button from "../../components/button";

import Text from "../../components/Text";
import Title from "../../components/Title";
import NavBar from "../../components/NavBar";
import { useNavigate } from "react-router-dom";

const SetLifePage = () => {
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
          onClick={() => localStorage.setItem("InitialLife", "60")}
          width="9.375rem"
        >
          <Text>60</Text>
        </Button>
        <Button
          onClick={() => localStorage.setItem("InitialLife", "40")}
          width="9.375rem"
        >
          <Text>40</Text>
        </Button>
      </S.WrapperButtons>
      <S.WrapperButtons>
        <Button
          onClick={() => localStorage.setItem("InitialLife", "30")}
          width="9.375rem"
        >
          <Text>30</Text>
        </Button>
        <Button
          onClick={() => localStorage.setItem("InitialLife", "20")}
          width="9.375rem"
        >
          <Text>20</Text>
        </Button>
      </S.WrapperButtons>
      <S.WrapperButtons>
        <Button onClick={() => localStorage.setItem("InitialLife", "custom")}>
          <Text>custom</Text>
        </Button>
      </S.WrapperButtons>
    </S.WrapperSetLifePage>
  );
};

export default SetLifePage;
