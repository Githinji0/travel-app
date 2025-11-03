const ContactInput = ({ icon, text, type, value, onChange }) => {
  return (
    <div className="flex items-center gap-3 border-b-2 border-slate-300 py-2 my-4 bg-white rounded-md shadow-md w-[80%] max-w-[400px] px-3">
      <span className="text-pink-600 flex items-center justify-center">
        {icon}
      </span>

      <input
        type={type}
        placeholder={text}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 focus:outline-none text-gray-700 placeholder-gray-400 bg-transparent"
      />
    </div>
  );
};

export default ContactInput;
