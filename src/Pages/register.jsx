import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Button from "../Components/Elements/Button/Button";
import Logo from "../Components/Elements/Logo/Logo";
import WelcomeText from "../Components/Elements/WelcomeText/WelcomeText";
import FormRegister from "../Components/Fragments/FormRegister";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const { username, password, confirmPassword } = formData;

    if (!username || !password || !confirmPassword) {
      toast.error("Harap isi semua field!");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Kata sandi tidak cocok!");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const isUsernameTaken = existingUsers.some(
      (user) => user.username === username
    );

    if (isUsernameTaken) {
      toast.error("Username sudah terdaftar. Gunakan username lain.");
      return;
    }

    const newUser = { username, password };
    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    toast.success("Pendaftaran berhasil!");
    setIsLoading(true);
    setFormData({ username: "", password: "", confirmPassword: "" });

    setTimeout(() => {
      setIsLoading(false);
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="relative flex justify-center items-center bg-bg-register bg-center bg-cover w-full h-screen">
      <ToastContainer position="top-right" autoClose={5000} theme="colored" />
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative flex justify-center items-center flex-col w-[90%] sm:w-[80%] md:w-[70%] lg:w-[529px] h-auto min-h-[80%] md:h-[663px] bg-[#181A1CD6] rounded-2xl p-6 md:p-10 gap-4 sm:gap-6">
        <Logo />
        <WelcomeText title="Daftar" text="Selamat datang" />
        <form onSubmit={handleRegister} className="w-full flex flex-col gap-8">
          <FormRegister onInputChange={handleInputChange} formData={formData} />
          <Button type="submit" variant="bg-[#3D4142]">
            Daftar
          </Button>
        </form>
        <p className="text-[#9D9EA1] text-sm font-medium leading-[19.6px] tracking-[0.2px]">
          Atau
        </p>
        <Link
          to="#"
          className="flex flex-col items-center w-full gap-3 sm:gap-2"
        >
          <Button variant="bg-transparent" onClick={() => toast.warning("Fitur Belum Tersedia")}>
            <img src="/google.png" alt="Google logo" className="h-5 w-5 mr-2" />
            Daftar dengan Google
          </Button>
        </Link>
        {isLoading ? null : <></>}
      </div>
    </div>
  );
};

export default RegisterPage;
