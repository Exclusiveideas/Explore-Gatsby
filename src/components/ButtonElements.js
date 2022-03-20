import styled from "styled-components";

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => ( primary ? "#FF4040" : "#0467FB")};
  white-space: no-wrap;
  padding: ${({ big }) => ( big ? "16px 64px" : "10px 20px")};
  color: #FFf;
  font-size: ${({ fontBig }) => ( fontBig ? "20x" : "16px")};
  outline: none;
  border: none;
  font-family: "Ubuntu", sans-serif;

  &:hover {
      transition: all 0.3s ease-out;
      background: ${({ primary }) => ( primary ? "#0467FB" : "#FF4040")};

  }

  @media screen and (max-width: 960px) {
      width: 100%;
  }
`