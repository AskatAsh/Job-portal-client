import { useState } from "react";
import { ImSpinner3 } from "react-icons/im";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import ReactiveButton from "reactive-button";
// import 'reactive-button/reactive-button.css';

const Error = () => {
  const [state, setState] = useState("idle");
  const navigate = useNavigate();
  const handleClick = () => {
    // Navigate to home or perform an action
    console.log("Navigating to home...");
    setState("loading");
    setTimeout(() => {
      setState("success");
      navigate('/');
    }, 1000);
  };

  return (
    <div className="h-screen text-center flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-10">404 - Route Not Found.</h1>
      <ReactiveButton
        buttonState={state}
        style={{
          borderRadius: "5px",
          backgroundColor: "#3B7BF2",
        }}
        block={false}
        type="button"
        size="large"
        onClick={handleClick}
        idleText={
          <span className="flex items-center gap-2">
            <IoArrowBackOutline size={20} /> Back to Home
          </span>
        }
        loadingText={
          <span className="flex items-center gap-2">Going.. <ImSpinner3 /></span>
        }
        successText="Back Home!"
        errorText="Error"
        animation={true}
      />
    </div>
  );
};

export default Error;
