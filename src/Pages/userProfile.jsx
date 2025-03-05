import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Button from "../Components/Elements/Button/Button";
import Logo from "../Components/Elements/Logo/Logo";
import WelcomeText from "../Components/Elements/WelcomeText/WelcomeText";
import FormRegister from "../Components/Fragments/FormRegister";
import api from "../api/axiosConfig";

const UserProfile = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFromData) => ({
      ...prevFromData,
      [name]: value,
    }));
  };

  const handleUpdatePassword = async (e) => {
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
  
    setIsLoading(true);
  
    try {
      const { data: users } = await api.get("/users");
      const user = users.find((u) => u.username === username);
  
      if (!user) {
        toast.error("User tidak ditemukan!");
        setIsLoading(false);
        return;
      }
  
      await api.delete(`/users/${user.id}`);
  
      await api.post("/users", {
        username: user.username,
        password: password,
        email: user.email, 
      });
  
      toast.success("Kata sandi berhasil diperbarui!");
      setFormData({ username: "", password: "", confirmPassword: "" });
  
      setTimeout(() => {
        setIsLoading(false);
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.error("Update password error:", error);
      toast.error("Gagal memperbarui kata sandi");
      setIsLoading(false);
    }
  };
  
  return (
    <div className="relative flex justify-center items-center bg-bg-register bg-center bg-cover w-full h-screen">
      <ToastContainer position="top-right" autoClose={5000} theme="colored" />
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative flex justify-center items-center flex-col w-[90%] sm:w-[80%] md:w-[70%] lg:w-[529px] h-auto min-h-[80%] md:h-[663px] bg-[#181A1CD6] rounded-2xl p-6 md:p-10 gap-4 sm:gap-6">
        <Logo />
        <WelcomeText title="Profile" text="Ganti kata sandi disini" />
        <form
          onSubmit={handleUpdatePassword}
          className="w-full flex flex-col gap-8"
        >
          <FormRegister
            onInputChange={handleInputChange}
            formData={formData}
            showForgot={false}
          />
          <Button type="submit" variant="bg-[#3D4142]">
            Submit
          </Button>
        </form>
        {isLoading ? null : <></>}
      </div>
    </div>
  );
};

export default UserProfile;
