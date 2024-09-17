import Account from "../../components/Account/Account";
import EditUsernameForm from "../../components/EditUsernameForm/EditUsernameForm";
// import Button from "../../components/Button/Button";
import "./User.css";
import { useSelector } from 'react-redux';
import { useState } from 'react';

const User = () => {
    // const accountData = useSelector(selectUserAccountData(userId));
    // Récupérer l'utilisateur depuis Redux
    //   const user = useSelector((state) => state.user);

    //   if (!user.token) {
    //     return <p>You need to log in to access this page.</p>;
    //   }
    // État local pour gérer l'affichage du formulaire de modification du nom d'utilisateur
    const [isEditing, setIsEditing] = useState(false);

    // Fonction pour gérer le clic sur le bouton "Edit Name"
    const handleEditClick = () => {
        setIsEditing(true);  // Passe en mode édition, le bouton "Edit Name" disparaît
    };

    return (
        <main className="main bg-dark">
            <div className="header">
                {/* <h1>Welcome back<br />
                {userFirstName && userFirstName} {userLastName && userLastName}!</h1> */}
                {/* <p>User ID: {user.id}</p> */}

                {/* <p>Email: {user.email}</p> */}
                <h1>Welcome back<br />Tony Jarvis!</h1>
                {/* Si isEditing est vrai, afficher EditUsernameForm, sinon afficher le bouton */}
                {!isEditing ? (
                    <button className="edit-button btn" onClick={handleEditClick}>Edit Name</button>
                ) : (
                    <EditUsernameForm />
                )}
            </div>
            <h2 className="sr-only">Accounts</h2>
            <Account />
            {/* {accountData && accountData.account.map((account, index) => <AccountCard key={account.title + "-" + index} title={account.title} amount={account.amount} description={account.description} />)}
	 */}
        </main>
    );
}

export default User;