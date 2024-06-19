import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #007FFF;
  color: white;
  margin: 0.1rem;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
              0px 2px 2px 0px rgba(0, 0, 0, 0.14),
              0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover {
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
                0px 8px 10px 1px rgba(0, 0, 0, 0.14),
                0px 3px 14px 2px rgba(0, 0, 0, 0.12);
  }

`;

export default function ButtonComponent(props){
    return(
        <StyledButton onClick={props.onClick}  className={props.className}>{props.title}</StyledButton>
    )
}