import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { auth, provider, signInWithPopup } from "../api/firebaseConfig"; 
import useAuthStore from "../store/useAuthStore";
import Button from "../Components/Elements/Button/Button";
import Logo from "../Components/Elements/Logo/Logo";
import WelcomeText from "../Components/Elements/WelcomeText/WelcomeText";
import FormLogin from "../Components/Fragments/FormLogin";

const LoginPage = () => {
  const [formData, setFormData] = useState({ username: "" });
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, username: e.target.value });
  };

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      login({
        username: user.displayName,
        email: user.email,
        avatar: user.photoURL,
      });

      toast.success("Login dengan Google berhasil!");
      navigate("/home");
    } catch (error) {
      console.error("Google Sign-In Error:", error);
      toast.error("Login dengan Google gagal. Coba lagi.");
    } finally {
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
        <form className="w-full flex flex-col gap-8">
          <FormLogin formData={formData} onInputChange={handleInputChange} />
          <Button type="submit" variant="bg-[#3D4142]">
            {isLoading ? "Loading..." : "Masuk"}
          </Button>
        </form>
        <p className="text-[#9D9EA1] text-sm font-medium leading-[19.6px] tracking-[0.2px]">
          Atau
        </p>
        <Button variant="bg-transparent" onClick={handleGoogleSignIn}>
          <img src="/google.png" alt="Google logo" className="h-5 w-5 mr-2" />
          Masuk dengan Google
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
