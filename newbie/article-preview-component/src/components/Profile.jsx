import "../css/profile.css";

const Profile = ({ state, func }) => {
  return (
    <div className="profile">
      <div>
        <img
          className="profile__image"
          src='/assets/avatar-michelle.jpg'
          alt="Avatar Michelle"
        />
        <div>
          <p className="profile__name">Michelle Appleton</p>
          <p className="profile__date">28 Jun 2020</p>
        </div>
      </div>
      <img
        onClick={() => func(!state)}
        className="profile__share"
        src='/assets/icon-share.svg'
        alt="Icon Share"
      />
    </div>
  );
};

export default Profile;
