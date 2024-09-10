// import IconChat from "./../../assets/images/icon-chat.webp";

import "./Feature.css";

const Feature = ({ icon, title, text }) => {
  return (
    <div className="feature-item">
      <img src={icon} alt="Icon" class="feature-icon" />
      <h3 className="feature-item-title">
        {title}
      </h3>
      <p>
        {text}
      </p>
    </div>
  );
}

export default Feature;