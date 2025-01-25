import Button from "../Elements/Button/Button";
import InputForm from "../Elements/Input";
import Logo from "../Elements/Logo/Logo";

const UserProfile = () => {
  return (
    <div className="bg-[#181A1C] w-screen h-screen flex justify-center items-center gap-4">
      <div className="border border-red-600 w-2/5 h-auto flex flex-col justify-center items-center">
        <Logo textHide={false} />
        <div className="w-full flex flex-col justify-center items-center">
          <h3 className="text-white">Profile</h3>
          <p className="text-white">Edit profile disini</p>
          <img className="rounded-full w-20 h-20" src="/avatar.png" alt="" />
          <p className="text-white">Ubah Foto</p>
        </div>

        <div className="w-full">
          <InputForm
            label="Username"
            type="text"
            placeholder="Masukan Username"
            name="username"
          />
          <InputForm
            label="Password"
            type="password"
            placeholder="Ubah kata sandi"
            name="password"
            img="/eye-off.png"
          />
          <InputForm
            label="Password"
            type="password"
            placeholder="Konfirmasi kata sandi"
            name="password"
            img="/eye-off.png"
          />
        </div>

        <div className="w-full flex flex-col gap-4">
          <Button variant="bg-[#3D4142]"> Simpan </Button>
          <Button variant="bg-[#3D4142]"> Keluar </Button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
