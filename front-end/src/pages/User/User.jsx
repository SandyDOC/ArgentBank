import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

import EditUsernameForm from "../../components/EditUsernameForm/EditUsernameForm";
import Account from "../../components/Account/Account";
import "./User.css";

const User = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Récupérer l'utilisateur depuis Redux
    
   
     const { firstName, lastName,  token} = useSelector((state) => state.user);
    
    // État local pour gérer l'affichage du formulaire de modification du nom d'utilisateur
    const [isEditing, setIsEditing] = useState(false);

    // Charger les informations de l'utilisateur au montage du composant
    useEffect(() => {
       
        if (!token) {
            navigate('/login'); // Si pas de token, rediriger vers la page de connexion
        }
    }, [dispatch, token, navigate]);

    // Fonction pour gérer le clic sur le bouton "Edit Name"
    const handleEditClick = () => {
        setIsEditing(true);  //Ouvrir le formulaire d'édition: Passe en mode édition, le bouton "Edit Name" disparaît
    };
    const handleCancelClick = () => setIsEditing(false); // Ferme le formulaire
    // Données fictives pour les comptes
    const dataAccount = [
        {
            "title": "Argent Bank Checking (x8349)",
            "amount": "$2,082.79",
            "description": "Available Balance"
        },
        {
            "title": "Argent Bank Checking (x8349)",
            "amount": "$10,928.42",
            "description": "Available Balance"
        },
        {
            "title": "Argent Bank Credit Card (x8349)",
            "amount": "$184.30",
            "description": "Current Balance"
        }
    ];

    // Vérifier si l'utilisateur est défini avant d'accéder aux propriétés
    //     if (!user || !user.token) {
    //         // return <p>You need to log in to access this page.</p>;
    //         navigate('/login'); // Redirection si l'utilisateur est déjà connecté
    //     }
    // };

    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />
                    {/* {user.firstName || user.newFirstName} {user.lastName || user.newLastName} ! */}
                    {/* {firstName || newFirstName} {lastName || newLastName} ! */}
                    {firstName} {lastName} !
                </h1>
                {!isEditing ? (
                    <button className="edit-button btn" onClick={handleEditClick}>Edit Name</button>
                ) : (
                    <EditUsernameForm onCancel={handleCancelClick} />
                )}
            </div>
            <h2 className="sr-only">Accounts</h2>
            {/* Map sur les comptes pour afficher chaque Account */}
            {dataAccount.map((account, index) => (
                <Account
                    key={index}
                    title={account.title}
                    amount={account.amount}
                    description={account.description}
                />
            ))}
        </main>
    );
}

export default User;
