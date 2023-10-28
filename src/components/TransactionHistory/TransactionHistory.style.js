import styled from "styled-components";

export const TableHead = styled.thead `
    background-color: #0DCCDA;
    width: 900px;
    border-right: 1px solid white;
    border-left: 1px solid white;
    height: 40px;
    display: flex;


`
export const TableRowHistory = styled.tr `
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size: small;
    color: #fff;

`

export const TableDataHistory = styled.th `
    width: calc(100%/3);
    font-weight: 500;
    border-right: 1px solid white;
    border-left: 1px solid white;   
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
