import "./Account.css";

const Account = ({ title, amount, description}) => {
    return (
        <section className="account">
            <div className="account-content-wrapper">
                {/* <h3 className="account-title">{title}</h3> */}
                <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                {/* <p className="account-amount">{amount}</p> */}
                <p className="account-amount">$2,082.79</p>
                {/* <p className="account-amount-description">{description}</p> */}
                <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
            </div>
        </section>

    );
}

export default Account;