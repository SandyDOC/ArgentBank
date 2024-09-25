import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser, clearUsernameForm } from '../../redux/userSlice'; // Import de l'action updateUser depuis le slice
import "./EditUsername.css";
import { useNavigate } from 'react-router-dom';

const EditUsernameForm = ({ onCancel }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Récupération des informations utilisateur depuis le store Redux
    const { userName, firstName, lastName, token, status, error } = useSelector((state) => state.user);

    // État local pour les champs de saisie
    const [newFirstName, setNewFirstName] = useState("");
    const [newLastName, setNewLastName] = useState("");
    const [newUserName, setNewUserName] = useState(userName || ""); // On initialise avec la valeur existante

    // Gestionnaire de soumission du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Créer un objet avec les nouvelles valeurs, ou conserver les anciennes si les champs sont vides
        const updatedUser = {
            firstName: newFirstName || firstName,
            lastName: newLastName || lastName,
            userName: newUserName || userName,
        };

        try {
            // Envoyer les nouvelles données à l'API via l'action Redux updateUser
            const response = await dispatch(updateUser(updatedUser));
            
            // Vérification de la réponse
            if (response.meta.requestStatus === "fulfilled") {
                console.log("Mise à jour réussie :", response.payload);
                // Réinitialiser les champs après mise à jour
                // dispatch(clearUsernameForm());
                // Rediriger vers la page utilisateur après la mise à jour
                navigate('/user');
            } else {
                console.error("Erreur lors de la mise à jour :", response.payload);
            }
        } catch (error) {
            console.error("Erreur lors de l'appel API :", error);
        }
    };

    return (
        <form className="edit-user-info-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="username">User name:</label>
                <input
                    type="text"
                    id="username"
                    value={newUserName}
                    onChange={(e) => setNewUserName(e.target.value)} // Met à jour l'état local
                    className="edit-username-input"
                />
            </div>
            <div className="form-group">
                <label htmlFor="firstName">First name:</label>
                <input
                    type="text"
                    id="firstName"
                    value={newFirstName}
                    onChange={(e) => setNewFirstName(e.target.value)} // Met à jour l'état local
                    className="edit-username-input"
                />
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last name:</label>
                <input
                    type="text"
                    id="lastName"
                    value={newLastName}
                    onChange={(e) => setNewLastName(e.target.value)} // Met à jour l'état local
                    className="edit-username-input"
                />
            </div>

            {/* Affichage de l'erreur en cas d'échec */}
            {status === 'failed' && <p style={{ color: 'red' }}>{error}</p>}

            <div className="form-buttons">
                <button type="submit" className="edit-username-button">
                    {status === 'loading' ? 'Saving...' : 'Save'}
                </button>
                <button 
                type="button" 
                className="edit-username-cancel-button" 
                onClick={onCancel}
                >
                 Cancel
                </button>
            </div>
        </form>
    );
};

export default EditUsernameForm;
