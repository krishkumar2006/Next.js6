import Image from "next/image";
import facebookpng from "../../../public/images/Facebook.png";
import twitterpng from "../../../public/images/twitter.png";
import instapng from "../../../public/images/insta.png";
import linkedinpng from "../../../public/images/linkedin.png";

const socialIcons = [
  { src: facebookpng, alt: "Facebook" },
  { src: twitterpng, alt: "Twitter" },
  { src: instapng, alt: "Instagram" },
  { src: linkedinpng, alt: "LinkedIn" },
];

function Header() {
  return (
    <div className="hidden md:flex justify-between py-2 px-4 shadow-sm items-center">
      <div className="flex gap-9 text-[0.85em] font-poppins">
        <p>Phone Number: <span className="text-[#838383] text-[0.75em]">956 345 223 443</span></p>
        <p>Email: <span className="text-[#838383] text-[0.75em]">info@ddsgnr.com</span></p>
      </div>
      <div className="flex gap-7">
        {socialIcons.map(({ src, alt }) => (
          <Image key={alt} className="w-[30px] lg:w-[35px]" src={src} alt={`Social ${alt} icon`} />
        ))}
      </div>
    </div>
  );
}

export default Header;
