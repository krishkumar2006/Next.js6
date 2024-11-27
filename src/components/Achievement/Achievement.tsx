function Achievement() {

    const stats = [
  
      { value: "+200k", label: "Cours" },
  
      { value: "+50k", label: "Mentors" },
  
      { value: "+10k", label: "Étudiants" },
  
      { value: "100+", label: "Branche" },
  
    ];
  
    return (
  
      <div className="py-16 px-4 text-center">
  
        <h1 className="font-poppins font-semibold text-2xl sm:text-3xl">OUR ACHIEVEMENTS</h1>
  
        <p className="text-sm sm:text-base mt-4">
  
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
  
          Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
  
        </p>
  
        <div className="flex flex-wrap justify-center gap-20 mt-8">
{stats.map(({ value, label }) => (
<div key={label} className="flex flex-col items-center">
<h4 className="font-semibold text-2xl sm:text-4xl">{value}</h4>
<span className="text-lg text-[#838383] sm:text-xl">{label}</span>
</div>
))}
</div>
</div>
);
}

export default Achievement;