import InputForm from "../Elements/Input/index";
import Forgot from "../Elements/Input/Forgot";

const FormRegister = () => {
  return (
    <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
      <form action="">
        <InputForm
          label="Username"
          type="text"
          placeholder="Masukan Username"
          name="username"
        />
        <InputForm
          label="Kata Sandi"
          type="password"
          placeholder="Masukan kata sandi"
          name="password"
          img="/eye-off.png"
        />
        <InputForm
          label="KonfirmasiKata Sandi"
          type="password"
          placeholder="Masukan kata sandi"
          name="password"
          img="/eye-off.png"
        />
        <Forgot 
          text="Sudah punya akun?"
          link1="Masuk"
          />
      </form>
    </div>
  );
};

export default FormRegister;
