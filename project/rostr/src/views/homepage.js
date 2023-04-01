import Cards from "../components/Cards";
import "../css/Homepage.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="grid-container">
      <Link className="image-container-create" to="/create">
          <div className="text-tile">Create</div>
      </Link>
      <Link className="image-container-find" to="/events">
        <div className="text-tile">Find</div>
      </Link>
      <Link className="image-container-list" to="/list">
        <div className="text-tile">List</div>
      </Link>
    </div>
  );
};

export default HomePage;
