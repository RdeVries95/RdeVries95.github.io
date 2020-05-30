import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 2px black;
  width: 250px;
  height: 250px;
  cursor: pointer;
  transition: 0.5s;

  :hover {
    background-image: url(${(props) => props.image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
    background-color: black;
    opacity: 0.8;
    border: solid 2px black;
  }
`;