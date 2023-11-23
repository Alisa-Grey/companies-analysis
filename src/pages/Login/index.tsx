import {FC, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { InputFloatingLabel } from '../../components/Input';
import { validateLogin, validatePassword } from '../../helpers';
import './style.sass';

interface UserDataProps {
    login: string;
    password: string;
}

interface ErrorProps {
    login: string;
    password: string;
}

const initialUserData: UserDataProps = {login: '', password: ''};
const initialErrors: ErrorProps = {login: '', password: ''};

const Login: FC = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState(initialUserData);
    const [errors, setErrors] = useState(initialErrors);
    const [isDisabled, setIsDisabled] = useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser({...user, [event.target.name]: event.target.value});
        setErrors({...errors, [event.target.name]: ''});
    }
    
    useEffect(() => {
        if(user.login!=='' && user.password!=='') {
            setIsDisabled(false);
        }  
    }, [user])
    
    const validateForm = () => {
        const loginError = validateLogin(user.login.trim());
        const passwordError =  validatePassword(user.password);
        setErrors({...errors, ['login']: loginError, ['password']: passwordError});
        if (Object.values(errors).every(x => x === '')) {
            return true;
        } else {
            return false;
        }
    }
    
    const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(validateForm()) {
            sessionStorage.setItem('isLogged', 'true');
            navigate('/');
        }
    }
    return (
        <div className='container'>
            <form className="form" onSubmit={handleSubmit}>
                <InputFloatingLabel 
                    name='login' 
                    type='text'
                    placeholder='Логин' 
                    label='Логин' 
                    onChange={handleChange}
                    errorText={errors.login}
                />
                <InputFloatingLabel 
                    name='password' 
                    type='password'
                    placeholder='Пароль' 
                    label='Пароль' 
                    onChange={handleChange}
                    errorText={errors.password}
                />
                <Button className="form__btn" type='submit' disabled={isDisabled}>Войти</Button>
            </form>
        </div>
    )
}

export default Login;