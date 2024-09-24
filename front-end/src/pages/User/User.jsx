// import Account from "../../components/Account/Account";
// import EditUsernameForm from "../../components/EditUsernameForm/EditUsernameForm";
// // import Button from "../../components/Button/Button";
// import "./User.css";
// import { useSelector } from 'react-redux';
// import { useState } from 'react';

// const User = () => {
//     // const accountData = useSelector(selectUserAccountData(userId));
//     // Récupérer l'utilisateur depuis Redux
//       const user = useSelector((state) => state.user);

//     //   if (!user.token) {
//     //     return <p>You need to log in to access this page.</p>;
//     //   }
//     // État local pour gérer l'affichage du formulaire de modification du nom d'utilisateur
//     const [isEditing, setIsEditing] = useState(false);

//     // Fonction pour gérer le clic sur le bouton "Edit Name"
//     const handleEditClick = () => {
//         setIsEditing(true);  // Passe en mode édition, le bouton "Edit Name" disparaît
//     };

import Account from "../../components/Account/Account";
import EditUsernameForm from "../../components/EditUsernameForm/EditUsernameForm";
import "./User.css";
import { useSelector } from 'react-redux';
import { useState } from 'react';

const User = () => {
    // Récupérer l'utilisateur depuis Redux
    const user = useSelector((state) => state.user);

    // État local pour gérer l'affichage du formulaire de modification du nom d'utilisateur
    const [isEditing, setIsEditing] = useState(false);

    // Fonction pour gérer le clic sur le bouton "Edit Name"
    const handleEditClick = () => {
        setIsEditing(true);  // Passe en mode édition, le bouton "Edit Name" disparaît
    };

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
    if (!user || !user.token) {
        return <p>You need to log in to access this page.</p>;
    }

    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />{user.firstName} {user.lastName} !</h1>
                {!isEditing ? (
                    <button className="edit-button btn" onClick={handleEditClick}>Edit Name</button>
                ) : (
                    <EditUsernameForm />
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
