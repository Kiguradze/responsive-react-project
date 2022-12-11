import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-page">
      <h1>Page not Found</h1>
      <Link to="/">Back to the Home page</Link>
    </div>
  );
};

export default Error;
