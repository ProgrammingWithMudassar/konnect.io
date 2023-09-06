
type Props = {
  label?: string;
  placeHolder?: string
  id?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  type: string | number | any;
  outerContainerStyle?: string;
  labelStyle?: string;
  inputStyle?: string;
  required?: boolean
};

const InputField = ({ label, type = "text", id, value, onChange, name, outerContainerStyle, required = false, inputStyle, labelStyle, placeHolder }: Props) => {
  return (
    <div className={`w-full flex flex-col items-start ${outerContainerStyle}`}>
      <label htmlFor={id} className={`block md:text-[16px] text-[14px] text-black-300 ${labelStyle}`}>
        {label}
      </label>
      <input
        placeholder={placeHolder}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={`px-3 py-2 border rounded-2xl focus:outline-none focus:ring focus:border-blue-500 text-black-600 mt-1 ${inputStyle}`}
        type={type}
        required={required}
        autoComplete="off"
        autoCapitalize="off"
      />
    </div>
  );
};

export default InputField;
