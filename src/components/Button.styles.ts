import styled, {css} from 'styled-components'


export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success' | 'warning'

interface ButtonContainerProps {
    variant: ButtonVariant ;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width : 100px;
    height: 40px;
    margin:8px;
    border: 0;
    cursor: pointer;
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.white};
`
