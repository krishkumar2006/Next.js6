
import Image from "next/image";
import man1 from "../../../public/images/man1.png";
import man2 from "../../../public/images/man2.png";
import man3 from "../../../public/images/man3.png";
import man4 from "../../../public/images/man4.png";
import man5 from "../../../public/images/man5.png";
import man6 from "../../../public/images/man6.png";
import linkedin from "../../../public/images/linkedin.png";
import twitter from "../../../public/images/twitter.png";
import website from "../../../public/images/web.png";

function Team() {
  const teamMembers = [
    { name: "James Nduku", role: "Marketing Coordinator", image: man1 },
    { name: "Sarah Lee", role: "UI/UX Designer", image: man2 },
    { name: "Michael Brown", role: "Software Engineer", image: man3 },
    { name: "Emily Davis", role: "Product Manager", image: man4 },
    { name: "Daniel Kim", role: "Data Scientist", image: man5 },
    { name: "Sophia White", role: "Content Writer", image: man6 },
  ];

  return (
    <div className="text-center py-20 px-4">
      <h1 className="text-2xl sm:text-3xl font-semibold">Our Teams</h1>
      <p className="text-[0.75em] sm:text-[0.9em] mb-8">We are a diverse group of professionals dedicated to excellence.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center py-4 px-4 gap-5"
          >
            <Image src={member.image} alt={member.name} className="rounded-full" />
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <span className="text-sm sm:text-[0.9em]">{member.role}</span>

            {/* Social icons */}
            <div className="flex gap-5">
              <Image src={linkedin} width={25} alt="LinkedIn" />
              <Image src={twitter} width={25} alt="Twitter" />
              <Image src={website} width={25} alt="Website" />
            </div>

            {/* Hover content */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 text-white transition-opacity duration-300 hover:opacity-100">
              <p className="text-center">
                <b>{member.name}</b> is a <b>{member.role}</b>. Connect with them on LinkedIn, Twitter, or visit their website!
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;