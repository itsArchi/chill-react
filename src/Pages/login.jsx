import Button from "../Components/Elements/Button/Button";
import Logo from "../Components/Elements/Logo/Logo";
import FormLogin from "../Components/Fragments/FormLogin";
// import TitleWelcome from "../Components/Fragments/TitleWelcome";
import WelcomeText from "../Components/Elements/WelcomeText/WelcomeText";

const LoginPage = () => {
  return (
    <div className="relative flex justify-center items-center bg-bg-login bg-center bg-cover w-full h-screen">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative flex justify-center items-center flex-col w-[90%] sm:w-[80%] md:w-[70%] lg:w-[529px] h-auto md:h-[663px] bg-[#181A1CD6] rounded-2xl p-6 md:p-10 gap-4 sm:gap-6">
        <Logo />
        <WelcomeText title="Masuk" text="Selamat datang kembali" />
        <FormLogin />
        <div className="flex flex-col items-center w-full gap-3 sm:gap-2">
          <Button variant="bg-[#3D4142]"> Masuk </Button>
          <p className="text-[#9D9EA1] text-sm font-medium leading-[19.6px] tracking-[0.2px]">
            Atau
          </p>
          <Button variant="bg-transparent">
            <img src="/google.png" alt="Google logo" className="h-5 w-5 mr-2" />
            Masuk dengan Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
