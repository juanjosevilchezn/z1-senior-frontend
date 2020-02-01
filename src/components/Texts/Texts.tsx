import styled from 'styled-components'

type TitleProps = {
    color?: string
}

type TextProps = {
    color?: string
}

const Title = styled.h2<TitleProps>`
    color: ${props => props.color || 'black'};
`

const Text = styled.p<TextProps>`
    color: ${props => props.color || 'black'};
    font-size: 1.10rem;
    margin: unset;
    text-align: center;
`

export { Title, Text }