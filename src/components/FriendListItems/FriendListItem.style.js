import styled from "styled-components";



export const FriendItem = styled.li `
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  width: 200px;
  height: 50px;
  box-shadow: 0 0 3px black;
  transition-duration: .5s;
  &:hover{
    background-color: lightgrey;
  }
  align-items: center;
`;

export const FriendName = styled.p `
  font-size: 1em;
  font-weight: 700;

`

export const FriendImg = styled.img `
  height: 48px;
`

export const SpanStatus = styled.span `
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: ${({$isOnline}) => ($isOnline ? 'green' : 'red')};
  margin-left: 10px;
`
