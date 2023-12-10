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
        background: "transparent",
        border: "1px solid #E6E9EC",
        color: "#0D263B",
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

const Container = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  font-size: 14px;
  min-width: 120px;
  outline: none;
  border: 1px solid #e6e9ec;
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  padding-left: ${({ icon }) => (icon ? "45px" : "20px")};
  /* ${getType}; */
`; //div o'rniga button desa ham buladi bir xil deyarli
const Wrapper = styled.div`
  width: fit-content;
  position: relative;
  display: flex;
  align-items: center;
  width: ${({ width }) => (width ? `${width}px` : "100%")};
`;
const Icon = styled.img`
  position: absolute;
  left: 15px;
  display: ${({ icon }) => (icon ? "block" : "none")};
`;

export { Container, Wrapper, Icon };
