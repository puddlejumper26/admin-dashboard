import React from "react";

function Button(props) {
  const { bgColor, color, size, text, borderRadius } = props;

  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
    >
      {text}
    </button>
  );
}

export default Button;
