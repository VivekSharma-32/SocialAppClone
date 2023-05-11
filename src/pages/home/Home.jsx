import Topbar from "../../components/Topbar";
import Feed from "../../components/feed/Feed";
import RightBar from "../../components/rightBar/RightBar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";

const Home = () => {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <RightBar />
      </div>
    </>
  );
};

export default Home;
