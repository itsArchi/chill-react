import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import useAuthStore from "../store/useAuthStore";
import api from "../api/axiosConfig";
import Button from "../Components/Elements/Button/Button";
import Logo from "../Components/Elements/Logo/Logo";
import FormLogin from "../Components/Fragments/FormLogin";
import WelcomeText from "../Components/Elements/WelcomeText/WelcomeText";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({ username: "" });
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { username } = formData;

    if (!username) {
      toast.error("Harap isi username!");
      return;
    }

    try { 
      setIsLoading(true);
      const response = await api.get("/users");
      const users = response.data;

      const user = users.find((u) => u.username === username);

      if (user) {
        toast.success("Login Berhasil");

        login(user);

        setTimeout(() => {
          setIsLoading(false);
          navigate("/home");
        }, 2000);
      } else {
        toast.error("Username tidak ditemukan");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      toast.error("Terjadi kesalahan, coba lagi nanti.");
      setIsLoading(false);
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
            {isLoading ? "Loading..." : "Masuk"}
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
      </div>
    </div>
  );
};

export default LoginPage;
