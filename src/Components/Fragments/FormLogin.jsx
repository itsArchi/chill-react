import InputForm from "../Elements/Input/index";
import Forgot from "../Elements/Input/Forgot";

const FormLogin = () => {
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
        <Forgot 
          text="Belum punya akun?"
          goto="/register"
          link1="Daftar"
          link2="Lupa kata sandi?"/>
      </form>
    </div>
  );
};

export default FormLogin;
