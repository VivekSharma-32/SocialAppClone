import Topbar from "../../components/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./profile.css";
import RightBar from "../../components/rightBar/RightBar";
import Feed from "../../components/feed/Feed";

const Profile = () => {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="assets/post/3.jpeg"
                alt=""
                className="profileCoverImg"
              />
              <img src="assets/post/7.jpeg" alt="" className="profileUserImg" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Vivek Sharma</h4>
              <span className="profileInfoDesc">Hello My Friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <RightBar profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
