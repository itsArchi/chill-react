import Logo from "../Elements/Logo/Logo";

const Footer = () => {
  return (
    <div className="w-full h-[284px] text-white py-[60px] px-80 gap-5">
      <div className="w-full h-full flex justify-between items-center">
        <div className="flex flex-col justify-between items-start gap-6">
          <Logo />
          <p className="font-poppins text-base font-normal leading-[20.4px] text-[#C1C2C4]">
            © 2025 Chill. All Rights Reserved
          </p>
        </div>
        <div className="flex justify-between items-center h-full gap-40">
          <div className="flex flex-col justify-between items-start h-full">
            <p className="text-white text-base font-bold leading-[22.4px] tracking-[0.2px]">
              Genre
            </p>
            <div className="flex justify-center items-center gap-7">
              <div className="flex flex-col gap-3 text-grey text-base font-medium leading-[22.4px] tracking-[0.2px]">
                <p>Aksi</p>
                <p>Anak-anak</p>
                <p>Anime</p>
                <p>Britania</p>
              </div>
              <div className="flex flex-col gap-3 text-grey text-base font-medium leading-[22.4px] tracking-[0.2px]">
                <p>Drama</p>
                <p>Fantasi Ilmiah & Fantasi</p>
                <p>Kejahatan</p>
                <p>KDrama</p>
              </div>
              <div className="flex flex-col gap-3 text-grey text-base font-medium leading-[22.4px] tracking-[0.2px]">
                <p>Komedi</p>
                <p>Petualangan</p>
                <p>Perang</p>
                <p>Romantis</p>
              </div>
              <div className="h-full flex flex-col gap-3 text-grey text-base font-medium leading-[22.4px] tracking-[0.2px]">
                <p>Sains & Alam</p>
                <p>Thriller</p>
              </div>
            </div>
          </div>

          <div className="h-full flex flex-col justify-center gap-4">
            <p className="text-white text-base font-bold leading-[22.4px] tracking-[0.2px]">
              Bantuan
            </p>
            <div className="flex flex-col gap-3 text-grey text-base font-medium leading-[22.4px] tracking-[0.2px]">
              <p className="">FAQ</p>
              <p>Kontak Kami</p>
              <p>Privasi</p>
              <p>Syarat & Ketentuan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
