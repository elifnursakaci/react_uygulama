const Button = ({ onClick, btnText }) => {
  return (
    <button
      className="w-full h-12 bg-gradient-to-r from-purple-400 to-pink-500 text-white flex items-center justify-center mt-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 border-none"
      onClick={onClick}
    >
      {btnText}
    </button>
  );
};

export default Button;
