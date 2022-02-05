import { useState } from 'react';
import {useNavigate} from 'react-router';
import axios from '../axiosConfig';


export default function Login(props){
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userNotFound, setUserNotFound] = useState(false);

    const loginHandler = async (e) => {
        e.preventDefault();
        const response = await axios.post('', {
            loginId: username,
            password: password,
        }).catch( () => setUserNotFound(true))
        if (response) {
            props.setCurrentUser(response.data);
            navigate('./home');
        }
    }

    return(
        <div>
        <div style={{flex: 1}}></div>

            <div>

        <form style={{
            display: 'flex',
            flexDirection: 'column',
        }}
        onSubmit={loginHandler}
        >

            <input
                type='text'
                placeholder='Username'
                value={username}
                onChange={ (element) => setUsername(element.target.value)}/>
            
            <input 
                        type='password'
                        placeholder='Password' 
                        value={password} 
                        onChange={ (element) => setPassword(element.target.value) }    
                    />
                    <input
                        type='submit'
                        value='Login'
                    />


            </form>
            {
                userNotFound ?
                    <span>
                        User not found
                    </span>:null
            }
            <span></span>
        </div>
        </div>
    );
}

const styles = {}