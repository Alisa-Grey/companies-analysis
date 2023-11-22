import {FC} from 'react';
import styled from 'styled-components';

interface InputProps {
    id?: string;
    name: string;
    placeholder: string;
    label: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    errorText?: string;
    type?: string;
}

const Wrap =styled.div`
    position:relative; 
    margin-bottom:30px; 
`

const Input = styled.input<{ $inputColor?: string; }>`
    font-size: 14px;
    display:block;
    width:100%;
    padding: 10px 20px;
    color: #f1f6fd;
    border: 1px solid #3D85D8;
    border-radius: 4px;
    box-sizing: border-box;
    &:focus{
        outline:none;
        ~ label{
            top:-15px;
            font-size:16px;
            background-color: #242424;
        }
    }
    &:not(:placeholder-shown) ~ label {
        top:-15px;
        font-size:16px;
        background-color: #242424;
    }
`;

const Label = styled.label`
    color:#fff; 
    font-size:16px;
    font-weight:normal;
    position:absolute;
    pointer-events:none;
    left:15px;
    top:8px;
    padding: 0 5px;
    background-color: #3b3b3b;
    transition:0.2s ease all; 
    -moz-transition:0.2s ease all; 
    -webkit-transition:0.2s ease all;
`

const ErrorText = styled.p`
    position: absolute;
    top: 17px;
    margin-bottom: 0;
    color: tomato;
`

export const InputFloatingLabel: FC<InputProps> = ({id, name, placeholder, label, onChange, errorText, type}) => {
    return (
        <Wrap>
            <Input id={id} name={name} type={type} placeholder={placeholder} onChange={onChange}/>
            <Label className="did-floating-label">{label}</Label>
            <ErrorText>{errorText}</ErrorText>
        </Wrap>
    )
}