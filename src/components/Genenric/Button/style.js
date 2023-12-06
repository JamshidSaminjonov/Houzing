import styled from "styled-components";

const getType = ({ type }) => {
  switch (type) {
    case "dark":
      return {
        background: "transparent",
        border: "1px solid #FFF",
        color: "#FFF",
      };
    case "light":
      return {
        background: "White",
        border: "1px solid #E6E9EC",
        color: "#OD263B",
      };
    case "primary":
      return {
        background: "#0061DF",
        border: "none",
        color: "#fff",
      };
    default:
      return {
        background: "#0061DF",
        border: "none",
        color: "#fff",
      };
  }
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  font-size: 14px;

  height: ${({ height }) => (height ? `${height}px` : "44px")};
  width: ${({ width }) => (width ? `${width}px` : "130px")};
  background-color: red;
  min-width: 120px;
  ${getType};
`; //div o'rniga button desa ham buladi bir xil deyarli

export { Container };
