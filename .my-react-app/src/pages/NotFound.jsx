
import { useNavigate } from "react-router";


export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-8">
      <div >
        <img className="relative h-48 w-full"
          src="\public\404.png" 
          alt="404 Cactus"
        />
      </div>
      <h1 className="text-5xl font-bold text-gray-800 mb-4">Page Not Found</h1>
      <p className="text-gray-500 text-center max-w-md mb-8">
        We're sorry, the page you requested could not be found. <br />
        Please go back to the homepage.
      </p>
      <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded transition-colors duration-300" onClick={() => navigate("/")}>Go Home</button>
    </div>
  );
}