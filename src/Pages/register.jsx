import { Link } from "react-router-dom";
import Button from "../Components/Elements/Button/Button";
import Logo from "../Components/Elements/Logo/Logo";
import WelcomeText from "../Components/Elements/WelcomeText/WelcomeText";
import FormRegister from "../Components/Fragments/FormRegister";

const RegisterPage = () => {
  return (
    <div className="relative flex justify-center items-center bg-bg-register bg-center bg-cover w-full h-screen">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative flex justify-center items-center flex-col w-[90%] sm:w-[80%] md:w-[70%] lg:w-[529px] h-auto min-h-[80%] md:h-[663px] bg-[#181A1CD6] rounded-2xl p-6 md:p-10 gap-4 sm:gap-6">
        <Logo />
        <WelcomeText title="Daftar" text="Selamat datang" />
        <FormRegister />
        <div className="flex flex-col items-center w-full gap-3 sm:gap-2">
          <Link
            to="#"
            className="flex flex-col items-center w-full gap-3 sm:gap-2"
          >
            <Button variant="bg-[#3D4142]"> Daftar </Button>
          </Link>

          <p className="text-[#9D9EA1] text-sm font-medium leading-[19.6px] tracking-[0.2px]">
            Atau
          </p>
          <Link
            to="#"
            className="flex flex-col items-center w-full gap-3 sm:gap-2"
          >
            <Button variant="bg-transparent">
              <img
                src="/google.png"
                alt="Google logo"
                className="h-5 w-5 mr-2"
              />
              Daftar dengan Google
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
