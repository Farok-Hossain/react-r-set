import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="text-center text-red-700 text-4xl flex flex-col">
      404 Not Found
      <Link to="/">Home from Link</Link>
    </div>
  );
};

export default NotFoundPage;
