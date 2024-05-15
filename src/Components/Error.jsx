import { Link, useNavigate } from "react-router-dom";

import errorImg from "../Images/errorImg.svg";

const Error = () => {
  const navigate = useNavigate();
  return (
    <>
      <img src={errorImg} alt="Error" height={250} width={250} />
      <h1 className="text-slate-700 text-lg md:text-2xl font-bold font-teachers">
        Oops.. Error occurred
      </h1>
      <p className="font-nunito font-semibold text-slate-700 mt-2">
        The page you are trying to reach cannot be reached.
      </p>

      <button
        onClick={() => navigate("/recipes/")}
        className="bg-slate-700 text-white p-3 mt-3 rounded-md text-sm hover:scale-110 hover:duration-300"
      >
        Try Again!
      </button>

      <Link to="/">
        <button className="bg-slate-700 text-white py-3 px-4 mt-3 rounded-md text-sm hover:scale-110 hover:duration-300">
          Go to Home
        </button>
      </Link>
    </>
  );
};

export default Error;
