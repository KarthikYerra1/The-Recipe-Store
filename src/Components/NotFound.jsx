import { useNavigate } from "react-router-dom";
import notfoundImg from "../Images/NotFound.svg";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-400 flex flex-col justify-center items-center h-screen">
      <img src={notfoundImg} alt="Not Found" width={300} />
      <button
        className="mt-2 bg-slate-700 text-white py-2 px-3 text-nunito rounded-md text-sm"
        onClick={() => navigate("/")}
      >
        Go To Home
      </button>
    </div>
  );
};

export default NotFound;
