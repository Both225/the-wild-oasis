import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="bg-surface-darker h-full w-full">
      <Link to={"/"}>Go back</Link>
      <h1>Page Not Found</h1>
    </div>
  );
}

export default ErrorPage;
