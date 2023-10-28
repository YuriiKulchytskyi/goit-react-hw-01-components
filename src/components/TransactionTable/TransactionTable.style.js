import styled from "styled-components";


export const TableRow = styled.tr `
    width: 900px;
    height: 40px;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: grey;
    &:nth-child(2n) {
        background-color: #F3F3F3;
    }

`

export const TableData = styled.td `
    box-sizing: border-box;
    width: calc(100%/3);
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-right: 1px solid white;
    border-left: 1px solid white;
    &:first-of-type{
        text-transform: capitalize;
        display: flex;
        justify-content: start;
        padding-left: 135px;
    }


`
