import React, { useEffect, useState } from "react";

function Button({ status, addFeature, breakFeature, resumeFeature }) {
  const [buttonText, setButtonText] = useState("");

  useEffect(() => {
    switch (status) {
      case "ongoing":
        setButtonText("break dulu");
        break;
      case "break":
        setButtonText("Lanjutin");
        break;
      default:
        setButtonText("Mulai");
        break;
    }
  }, [status]);

  const handleSubmit = () => {
    if (status == "ongoing") return breakFeature.mutate();
    if (status == "break") return resumeFeature.mutate();
    addFeature.mutate();
  };

  return (
    <button
      className="btn btn-primary rounded-md"
      onClick={() => handleSubmit()}
    >
      {buttonText}
    </button>
  );
}

export default Button;
