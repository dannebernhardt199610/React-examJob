import React from 'react'
import styled from 'styled-components'
import errorImage from './images/error.jpg'

const Background = styled.div`
background-image: url(${errorImage});
position: absolute;
left: 0;
top: 0;
width: cover;
height: cover;
min-width: 100%;
min-height: 100%;
`

const Title = styled.div`
text-align: center;
font-size: 5rem;
font-weight: bold;
color: white;
`

export default function Error() {
    return (
        <Background>
            <Title>Wrong adress! Please check ur URL </Title>
        </Background>
    )
}
