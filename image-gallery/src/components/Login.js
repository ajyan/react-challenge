import React from "react";
import styled, { css } from "styled-components";

export const LoginWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 300px;
  font-family: arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

export const LoginHeader = styled.header`
  padding-top: 32px;
  padding-bottom: 32px;
`;

export const LoginHeading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export const LoginBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`;

export const LoginFieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;

  & + & {
    margin-top: 24px;
  }

  &:nth-last-of-type(2) {
    margin-top: 32px;
  }

  &:last-of-type {
    text-align: center;
  }
`;

export const LoginInput = styled.input`
  padding: 7px 0;
  width: 100%;
  font-size: 14px;
  border-top: 0;
  border-right: 0;
  border-left: 0;
  border-bottom: 1px solid #ddd;
  transition: border-bottom-color 0.25s ease-in;

  &:focus {
    border-bottom-color: #e5195f;
    outline: 0;
  }
`;

export const LoginButton = styled.button`
  display: block;
  width: 100%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #e5195f;
  border: 0;
  border-radius: 35px;
`;
