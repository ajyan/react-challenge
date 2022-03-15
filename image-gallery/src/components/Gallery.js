import styled from "styled-components";

export const NavBar = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const ImageButtonWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 1em;
`;

export const ImageButton = styled.button`
  display: block;
  width: 100%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #3b3c3b;
  border: 0;
`;

export const ImageDetail = styled.span`
  font-weight: 700;
`;

export const LogoutButton = styled.button`
  display: block;
  width: 10vw;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #3b3c3b;
  border: 0;
  border-radius: 35px;
  justify-self: end;
`;

export const Gallery = styled.section`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-column-gap: 1em;
`;

export const Body = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`;

export const Heading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;
