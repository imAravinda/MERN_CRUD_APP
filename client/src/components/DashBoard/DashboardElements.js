import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Section = styled.div`
  width: 40%;
  height: fit-content;
  background-color: #f4d3d31d;
  padding: 3%;
  border-radius: 3%;
  box-shadow: 5px 5px 5px #0000002d;
`;
export const Heading = styled.h1`
  display: flex;
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
  font-size: 48px;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Option = styled.div`
  & {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: fit-content;
    padding: 3%;
    color: #fff;
    border-radius: 20px;
    margin: 3% 0;
    box-shadow: 5px 5px 5px #0000005d;
    background-color: #46458c;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const Icon = styled.div`
  width: 30%;
`;
export const Text = styled.div`
  width: 70%;
  text-align: left;
  font-weight: 600;
  font-size: 18px;
`;
