import styled, { css } from "styled-components";
import { IButtonEmotionProps } from "./i-button";

function variantButtonStyles({ variant }: IButtonEmotionProps) {
  return css`
    color: ${({ theme }) => theme.colors?.white};
    background-color: ${({ theme }) => theme.colors?.blue};

    &:hover,
    &:active {
      color: ${({ theme }) => theme.colors?.white};
      background-color: ${({ theme }) => theme.colors?.primary};
      opacity: 0.8;
    }

    &:disabled,
    &:disabled:active,
    &:disabled:hover {
      color: ${({ theme }) => theme.colors?.white};
      border-color: ${({ theme }) => theme.colors?.border};
      background-color: ${({ theme }) => theme.colors?.primary};
      cursor: not-allowed;
      opacity: 0.4;
    }
  `;
}

export const ButtonStyledComponent = styled.button`
  border: 0;
  padding: 0;
  cursor: pointer;
  box-sizing: border-box;
  display: inline-block;
  max-width: 100%;
  text-align: center;
  overflow: hidden;
  width: ${({ width }) => width}px;
  height: 56px;
  white-space: nowrap;
  text-overflow: ellipsis;
  letter-spacing: 0;
  line-height: 1.6rem;
  border-radius: 5px;
  transition: all 300ms ease-in-out;
  background-color: ${({ theme }) => theme.colors?.blue};
  color: ${({ theme }) => theme.colors?.white};
  font-weight: ${({ theme }) => theme.fontWeights?.medium};
  font-size: 18px;
  font-family: "Outfit";
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `};

  ${variantButtonStyles}
`;
