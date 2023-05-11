import "./online.css";

const Online = ({ user }) => {
  return (
    <li className="rightbarFriend">
      <div className="rghtbarProfileImgContainer">
        <img src={user.profilePicture} alt="" className="rightbarProfileImg" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{user.username}</span>
    </li>
  );
};

export default Online;
