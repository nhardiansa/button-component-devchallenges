import styled from "styled-components";

interface ButtonProps {
  focused?: boolean
}

const Button = styled.button<ButtonProps>`
  background: ${props => props.focused ? '#AEAEAE' : '#E0E0E0'};
  box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
  border-radius: 6px;
  padding-inline: 1rem;
  padding-block: 0.5rem;
  border: none;

  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #3F3F3F;
  transition: ease-in-out 170ms;

  cursor: pointer;

  :hover, :focus {
    background: #AEAEAE;
  }
`

export default Button