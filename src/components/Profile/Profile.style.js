import styled from "styled-components";


export const SectionProfile = styled.section `
    display: flex;
    flex-direction: column;
    width: 300px;
    box-shadow: 0 0 3px grey;
    margin: 20px 20px;
`


export const MainInfoDiv = styled.div `
    display: flex;
    flex-direction: column;
    padding: 20px 40px;
    align-items: center;
`

export const ImageProfile = styled.img `
    width: 100px;
    height: 100px;
    border-radius:100%;
`
export const ProfileList = styled.ul `
    display: flex;
    flex-direction: row;
    list-style: none;
    width: 100%;
    padding: 0;
    margin: 0;
`


export const ProfileListItem = styled.li `
    display: flex;
    flex-direction: column;
    width: calc(100% / 3);
    height: 80px;
    align-items: center;
    justify-content: center;
    color: grey;
    background-color: white;
    row-gap: 10px;
    border: 1px solid lightgrey;
    transition-duration: .3s;
    &:hover {
        background-color: burlywood;
    }

`

export const Quantity = styled.span `
    font-size: 1.1em;
    font-weight: 800;
    margin: 0;
    color: black;
`

export const MainInfo = styled.p `
    color: grey;
    margin-top: 10px;
    margin-bottom: 10px;
&:first-of-type {
    font-weight: 600;
    font-size: large;
    margin-top: 30px;
    color: black;
}

`
