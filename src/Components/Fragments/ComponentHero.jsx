import Hero from "../Elements/Hero/Hero";

const ComponentHero = () => {
  return (
    <div className="w-full h-[587px] flex justify-center">
      <Hero 
      title="Duty After School"
      description="Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang."
      image= "bg-main.png"
      />
    </div>
  );
};

export default ComponentHero;
