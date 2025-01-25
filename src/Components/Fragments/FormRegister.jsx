/* eslint-disable react/prop-types */
import InputForm from "../Elements/Input/index";
import Forgot from "../Elements/Input/Forgot";

const FormRegister = ({ onInputChange, formData, onSubmit }) => {
  return (
    <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
      <InputForm
        onSubmit={onSubmit}
        label="Username"
        type="text"
        placeholder="Masukan Username"
        name="username"
        value={formData.username}
        onChange={onInputChange}
      />
      <InputForm
        label="Kata Sandi"
        type="password"
        placeholder="Masukan kata sandi"
        name="password"
        img="/eye-off.png"
        value={formData.password}
        onChange={onInputChange}
      />
      <InputForm
        label="Konfirmasi Kata Sandi"
        type="password"
        placeholder="Masukan kata sandi"
        name="confirmPassword"
        img="/eye-off.png"
        value={formData.confirmPassword}
        onChange={onInputChange}
      />
      <Forgot text="Sudah punya akun?" goto="/login" link1="Masuk" />
    </div>
  );
};

export default FormRegister;
