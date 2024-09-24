import "./Form.css";
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, setEmail, setPassword, clearForm, fetchUser } from './../../redux/userSlice';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

     // Vérification du token au chargement du composant
     useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/user'); // Redirection si l'utilisateur est déjà connecté
        }
    }, [navigate]);

    // Accès aux valeurs des champs et au statut depuis Redux
    const { email, password, status, error } = useSelector((state) => state.user);

    // Local state pour le champ 'remember me'
    const [rememberMe, setRememberMe] = useState(false);

    const handleUsernameChange = (e) => {
        dispatch(setEmail(e.target.value));  // Associe le username au champ email
    };

    const handlePasswordChange = (e) => {
        dispatch(setPassword(e.target.value));  // Associe le mot de passe à Redux
    };

    const handleRememberMeChange = (e) => {
        setRememberMe(e.target.checked);
    };

    const handleSubmit = async (e) => {
        console.log("validation formulaire")
        e.preventDefault();

        // Dispatch de l'action loginUser avec l'email et le password
        const resultAction = await dispatch(
            loginUser({ email, password }) // Envoie les valeurs d'email et de password
        );
        

        if (loginUser.fulfilled.match(resultAction)) {
            const token = resultAction.payload.body.token;
            dispatch(fetchUser(token));
            if (rememberMe) {
                // Gérer la logique "Remember Me", potentiellement avec localStorage
                localStorage.setItem('token', resultAction.payload.token);
            }
            dispatch(clearForm()); // Nettoyer le formulaire après connexion
            
            navigate('/user'); // Redirection après succès
        } else {
            console.error('Login failed:', resultAction.payload);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="loginForm">
            <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    value={email} // Associe la valeur d'email au champ
                    placeholder="Enter your email"
                    onChange={handleUsernameChange}
                    required
                />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password} // Associe la valeur de password au champ
                    onChange={handlePasswordChange}
                    required
                />
            </div>
            <div className="input-remember">
                <input
                    type="checkbox"
                    id="remember-me"
                    checked={rememberMe}
                    onChange={handleRememberMeChange}
                />
                <label htmlFor="remember-me">Remember me</label>
            </div>

            <button className="btn" type="submit" disabled={status === 'loading'}>
                {status === 'loading' ? 'Logging in...' : 'Sign In'}
            </button>

            {/* Affichage de l'erreur en cas d'échec */}
            {status === 'failed' && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    );
};

export default Form;
