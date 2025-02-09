const Button = ({ onClick = () => {}, text = "", className = "" }) => {
  return (
    <button
      className={`px-6 py-2 rounded-lg bg-gray-950 text-white min-w-30 ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
