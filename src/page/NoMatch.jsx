import { Link } from "react-router-dom";

// Fungsi untuk Page yang tidak ada pada routing
export default function NoMatch() {
    return (
      <div className="notfound">
        <img src="https://cdn.pixabay.com/photo/2016/04/24/13/24/error-1349562__340.png" alt="error" />
        <h1>OOPS !!! Nothing to see here</h1>
        <button>
          <Link to="/">Go to the home page</Link>
        </button>
      </div>
    );
  }