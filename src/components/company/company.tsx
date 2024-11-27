import Image from "next/image";
import logo from '../../../public/images/logo.png';
import logo1 from '../../../public/images/logo1.png';
import logo2 from '../../../public/images/logo2.png';
import logo3 from '../../../public/images/logo3.png';
import logo4 from '../../../public/images/logo4.png';
import logo5 from '../../../public/images/logo5.png';

function Company() {
  const logos = [
    { id: 0, logo: logo, alt: "logo" },
    { id: 1, logo: logo1, alt: "logo 1" },
    { id: 2, logo: logo2, alt: "logo 2" },
    { id: 3, logo: logo3, alt: "logo 3" },
    { id: 4, logo: logo4, alt: "logo 4" },
    { id: 5, logo: logo5, alt: "logo 5" },
  ];

  const imageClasses = "w-[80px] sm:w-[120px] md:w-[140px] lg:w-[170px] h-auto";

  return (
    <section className="mt-24 flex flex-col lg:flex-row lg:justify-center items-center py-10 px-4 gap-9">
      <div className="text-center lg:text-left">
        <h2 className="text-2xl font-semibold font-poppins">
          Trusted by 2000+ companies worldwide.
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4 items-center">
        {logos.map(({ id, logo, alt }) => (
          <Image
            key={id}
            src={logo}
            alt={alt}
            className={imageClasses}
          />
        ))}
      </div>
    </section>
  );
}

export default Company;
