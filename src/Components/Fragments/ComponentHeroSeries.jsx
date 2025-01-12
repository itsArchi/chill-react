import Hero from "../Elements/Hero/Hero";

const ComponentHeroSeries = () => {
  return (
    <div className="w-full h-56 sm:h-[587px] flex justify-center relative overflow-hidden">
      <Hero 
      title="Happiness"
      description="Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang."
      image= "bg-series.png"
      />
    </div>
  );
};

export default ComponentHeroSeries;
