import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { updateUser, newUser } from '../../redux/userSlice';
import "./EditUsername.css";

const EditUsernameForm = ({ onCancel }) => {
    const dispatch = useDispatch();

    // Récupération des informations utilisateur depuis le store Redux
    const { firstName, lastName, userName, status, error } = useSelector((state) => state.user);

    // État local pour stocker temporairement la nouvelle valeur de `userName`
    const [newUserName, setNewUserName] = useState(userName);  // Initialiser avec la valeur existante

    // Gestionnaire de soumission du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Créer un objet avec la nouvelle valeur de userName
        const userData = {
            userName: newUserName // Utilise la valeur temporaire stockée dans l'état local
        };

        // Envoyer les nouvelles données à l'API via l'action Redux updateUser
        const resultAction = await dispatch(updateUser(userData));

        // Vérifier si l'action a été réussie
        if (updateUser.fulfilled.match(resultAction)) {
            // console.log("Mise à jour réussie :", resultAction.payload);
            // Mettre à jour les informations utilisateur dans le store avec la réponse de l'API
            dispatch(newUser(resultAction.payload.body));
            onCancel(); // Fermer le formulaire après succès
        } else {
            console.error("Erreur lors de la mise à jour :", resultAction.payload);
        }
    };

    return (
        <form className="edit-user-info-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="username">User name:</label>
                <input
                    type="text"
                    id="username"
                    value={newUserName} // Utilise la valeur temporaire de l'état local
                    onChange={(e) => setNewUserName(e.target.value)} // Met à jour l'état local sans toucher le store
                    className="edit-username-input"
                />
            </div>
            <div className="form-group">
                <label htmlFor="firstName">First name:</label>
                <input
                    type="text"
                    id="firstName"
                    disabled
                    value={firstName}
                    className="edit-username-input"
                />
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last name:</label>
                <input
                    type="text"
                    id="lastName"
                    disabled
                    value={lastName}
                    className="edit-username-input"
                />
            </div>

            <div className="form-buttons">
                <button type="submit" className="edit-username-button">
                    {status === 'loading' ? 'Saving...' : 'Save'}
                </button>
                {/* Affichage de l'erreur en cas d'échec */}
                {status === 'failed' && <p style={{ color: 'red' }}>{error}</p>}
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
