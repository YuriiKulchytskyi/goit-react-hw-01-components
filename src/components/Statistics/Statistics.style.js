import styled from "styled-components";

export const Section = styled.section `
    width: 400px;
    display: flex;
    flex-direction: column;
    border: 1px solid lightgrey;
    `

export const Title = styled.h2 `
display: flex;
justify-content: center;
color: lightgrey;
`

export const List = styled.ul `
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: row;
        padding: 0;
        margin: 0;
    
    `

export const ExtensionType = styled.li `
    height: 80px;
    width: 20%;
    background-color: ${getRandomColor};
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 400;

`

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}




export const Paragraph = styled.p `
    font-size: 1.2em;
    margin: 0;
    font-weight: 700;
    
`
