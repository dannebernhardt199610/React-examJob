import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'

const Section = styled.section``
const Container = styled.div``
const ColumnLeft = styled.div``
const ColumnRight = styled.div``

const InfoSection = () => {
    return (
        <Section>
            <Container>
                <ColumnLeft>
                <h1>heading</h1>
                <p>paragraph</p>
                <p>paragraph</p>
                <Button to="/websites">label</Button>
                </ColumnLeft>
                <ColumnRight>
                <img src="" alt="fail" />
                </ColumnRight>
            <h1>info</h1>
            </Container>
        </Section>
    )
}

export default InfoSection
