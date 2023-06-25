import styled from "styled-components";
export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const Section = styled.div`
    width: 40%;
    height: fit-content;
    background-color: #F4D3D31d;
    padding: 3%;
    border-radius: 3%;
    box-shadow: 5px 5px 5px #0000002d;
`
export const FormSection = styled.form` 
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
export const Heading = styled.h1`
     justify-content: center;
  text-transform: uppercase;
  align-items: center;
  text-align: center;
  margin-top: 2%;
  background: linear-gradient(
    60deg,
    rgb(9, 5, 128) 0%,
    rgb(232, 169, 169) 100%
  );
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  letter-spacing: 1rem;
  margin-bottom: 15px;

`
export const TextFeild = styled.div`
    width: 100%;
    margin: 5% 0;
`
export const Option = styled.div`
  font-size: 100%;
  margin: 0 2%;
  @media screen and (max-width: 769px) {
    font-size: 12px;
  }
`;
export const LinkToSignUpAndLogIn = styled.a`
  color: #E8A9A9;
  &:hover {
    cursor: pointer;
  }
`;