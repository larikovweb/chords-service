//global styled

import styled from '@emotion/styled';
import { rem } from './mixins';
import { $mainFont, $phoneWidth, $primaryColor } from './variables';

export const Container = styled.div`
  width: 100%;
  max-width: ${rem(1320)};
  margin: 0 auto;
  padding: 0 ${rem(20)};

  @media screen and (max-width: ${$phoneWidth}) {
    padding: 0 ${rem(10)};
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: none;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  outline: none;
  font-size: 1rem;
  font-family: ${$mainFont};
  font-weight: 400;
  color: inherit;
  transition: border 0.3s;
  &::placeholder {
    opacity: 0.5;
    transition: opacity 0.3s;
  }
  &:focus {
    border: 0.0625rem solid rgba(0, 0, 0, 0.25);
    &::placeholder {
      opacity: 0;
    }
  }
`;

export const TextArea = styled.textarea`
  resize: vertical;
  width: 100%;
  height: 10rem;
  padding: 0.5rem;
  border: none;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  outline: none;
  font-size: 1rem;
  font-family: ${$mainFont};
  font-weight: 400;
  color: inherit;
  transition: border 0.3s;
  &::placeholder {
    opacity: 0.5;
    transition: opacity 0.3s;
  }
  &:focus {
    border: 0.0625rem solid rgba(0, 0, 0, 0.25);
    &::placeholder {
      opacity: 0;
    }
  }
`;

export const Button = styled.button`
  height: 3rem;
  width: fit-content;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  border-radius: 0.75rem;
  background-color: ${$primaryColor};
  color: #ffffff;
  font-size: ${rem(16)};
  font-weight: 500;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  transition: opacity 0.3s;
  svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: #ffffff;
    stroke: #ffffff;
  }
  &:hover {
    opacity: 0.75;
  }
  &:active {
    opacity: 0.9;
  }
`;

export const ButtonTransparent = styled(Button)`
  background-color: transparent;
  color: ${$primaryColor};
  border: 0.0625rem solid ${$primaryColor};
  svg {
    fill: ${$primaryColor};
    stroke: ${$primaryColor};
  }
`;

export const GeneralBox = styled.div`
  padding: 1rem 1.25rem;
  border-radius: 0.75rem;
  background: #fff;
  box-shadow: 0 0 1rem 0 rgba(25, 25, 28, 0.12);
`;

export const GeneralLabel = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.1);
  opacity: 0.5;
  @media screen and (max-width: ${$phoneWidth}) {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    padding-bottom: 0.5rem;
  }
`;
