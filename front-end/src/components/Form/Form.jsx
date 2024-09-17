import "./Form.css";

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, setEmail, setPassword, clearForm } from './../../redux/userSlice';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    // const dispatch = useDispatch();
    // const navigate = useNavigate();

    // Accès aux valeurs des champs et au statut depuis Redux
    //   const { status, error } = useSelector((state) => state.user);
    // const { email, password, status, error } = useSelector((state) => state.user);

    // Local state pour le champ 'remember me'
    // const [rememberMe, setRememberMe] = useState(false);

    // const handleUsernameChange = (e) => {
    //     dispatch(setEmail(e.target.value));  // Associe le username au champ email
    // };

    // const handlePasswordChange = (e) => {
    //     dispatch(setPassword(e.target.value));  // Associe le mot de passe à Redux
    // };

    // const handleRememberMeChange = (e) => {
    //     setRememberMe(e.target.checked);
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     // Dispatch de l'action loginUser avec l'email (username) et le password
    //     const resultAction = await dispatch(
    //         loginUser({
    //             email: useSelector((state) => state.user.email),
    //             password: useSelector((state) => state.user.password),
    //         })
    //     );

    //     if (loginUser.fulfilled.match(resultAction)) {
    //         if (rememberMe) {
    //             // Gérer la logique "Remember Me", potentiellement avec localStorage
    //             localStorage.setItem('token', resultAction.payload.token);
    //         }
    //         dispatch(clearForm()); // Nettoyer le formulaire après connexion
    //         // navigate('/dashboard'); // Redirection après succès
    //           navigate('/user'); // Redirection après succès
    //     }
    // };

//   const navigate = useNavigate();
//     const handleLog = () => {
//         navigate('/user');
//     }

    return (
        <form className="loginForm">
            {/* <form onSubmit={handleSubmit}> */}
            <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                // placeholder="Enter your username"
                // onChange={handleUsernameChange}
                // required
                />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                // placeholder="Enter your password"
                // onChange={handlePasswordChange}
                // required
                />
            </div>
            <div className="input-remember">
                <input
                    type="checkbox"
                    id="remember-me"
                // checked={rememberMe}
                // onChange={handleRememberMeChange}
                />
                <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="btn">Sign In</button>
            {/* <button className="btn" onClick={handleLog}>Sign In</button> */}
           
            {/* <button className="btn" type="submit" disabled={status === 'loading'}> */}
            {/* {status === 'loading' ? 'Logging in...' : 'Login'} */}
            {/* </button> */}
            {/* {status === 'failed' && <p style={{ color: 'red' }}>{error}</p>} */}
        </form>
    );
};

export default Form;

// const Form = () => {
//     return (
//         <form>
//             <div className="input-wrapper">
//                 <label for="username">Username</label>
//                 <input type="text" id="username" />
//             </div>
//             <div className="input-wrapper">
//                 <label for="password">Password</label>
//                 <input type="password" id="password" />
//             </div>
//             <div className="input-remember">
//                 <input type="checkbox" id="remember-me" />
//                 <label for="remember-me">Remember me</label>
//             </div>
//         </form>

//     );
// }

// export default Form;