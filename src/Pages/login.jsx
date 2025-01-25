import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Button from "../Components/Elements/Button/Button";
import Logo from "../Components/Elements/Logo/Logo";
import FormLogin from "../Components/Fragments/FormLogin";
import WelcomeText from "../Components/Elements/WelcomeText/WelcomeText";

const LoginPage = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { username, password } = formData;

    if (!username || !password) {
      toast.error("Harap isi semua field!");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      toast.success("Login Berhasil!");
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
        navigate("/home");
      }, 2000);
      localStorage.setItem("isLoggedIn", true);
    } else {
      toast.error("Username atau password salah.");
    }
  };

  return (
    <div className="relative flex justify-center items-center bg-bg-login bg-center bg-cover w-full h-screen">
      <ToastContainer position="top-right" autoClose={5000} theme="colored" />
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative flex justify-center items-center flex-col w-[90%] sm:w-[80%] md:w-[70%] lg:w-[529px] h-auto md:h-[663px] bg-[#181A1CD6] rounded-2xl p-6 md:p-10 gap-4 sm:gap-6">
        <Logo />
        <WelcomeText title="Masuk" text="Selamat datang kembali" />
        <form onSubmit={handleLogin} className="w-full flex flex-col gap-8">
          <FormLogin formData={formData} onInputChange={handleInputChange} />
          <Button type="submit" variant="bg-[#3D4142]">
            Masuk
          </Button>
        </form>
        <p className="text-[#9D9EA1] text-sm font-medium leading-[19.6px] tracking-[0.2px]">
          Atau
        </p>
        <Link
          to="/"
          className="flex flex-col items-center w-full gap-3 sm:gap-2"
        >
          <Button variant="bg-transparent" onClick={() => toast.warning("Fitur Belum Tersedia")}>
            <img src="/google.png" alt="Google logo" className="h-5 w-5 mr-2" />
            Masuk dengan Google
          </Button>
        </Link>
        {isLoading ? null : <></>}
      </div>
    </div>
  );
};

export default LoginPage;
