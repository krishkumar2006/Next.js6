import Image from "next/image";
import logo from "../../../public/images/logo.png";
import Facebook from "../../../public/images/Facebook.png";
import insta from "../../../public/images/insta.png";
import linkedin from "../../../public/images/linkedin.png";

function Footer() {
const links = [
{
title: "Courses",
items: ["Business", "Development", "Technology", "Design", "Programming"],
},
{
title: "Resources",
items: ["Career", "Resume", "Learning", "Guide", "Jobs"],
},
{
title: "About Us",
items: ["Contact", "Help/Support", "FAQ", "Terms & Conditions", "Partners"],
},
];

const socialIcons = [
{ src: Facebook, alt: "Facebook" },
{ src: insta, alt: "Instagram" },
{ src: linkedin, alt: "LinkedIn" },
];

return (
<div className="bg-gray-100">
<div className="flex flex-col gap-12 py-6 px-8 sm:px-16 mt-20">
{/* Newsletter Section */}
<div className="flex flex-wrap justify-between items-center gap-5">
<div className="flex flex-col gap-3 w-full md:w-auto">
<h2 className="text-[1.2em] sm:text-[1.6em] font-semibold">
Subscribe to Our Newsletter
</h2>
<p className="text-[0.8em] sm:text-[0.9em]">
Stay updated with our latest news and offerings.
</p>
</div>
<form className="flex flex-wrap gap-2 w-full md:w-auto">
<input
className="py-3 pl-2 w-full sm:w-auto sm:pr-10 bg-white border border-black"
type="email"
placeholder="Enter Your Email"
/>
<input
className="py-3 px-4 uppercase tracking-widest text-white bg-black border border-black hover:text-black hover:bg-transparent transition-all duration-500"
type="submit"
value="Submit"
/>
</form>
</div>

{/* Links Section */}
<div className="flex flex-wrap justify-between gap-10">
{/* Logo */}
<div className="w-full sm:w-auto">
<Image src={logo} width={150} alt="Logo" />
</div>

{/* Dynamic Columns for Links */}
{links.map(({ title, items }, index) => (
<div key={index} className="flex flex-col gap-2 w-full sm:w-auto">
<h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
{items.map((item, idx) => (
<span key={idx} className="text-gray-500">
{item}
</span>
))}
</div>
))}
</div>

{/* Footer Bottom Section */}
<div className="flex flex-wrap justify-between items-center gap-5">
{/* Footer Links */}
<div className="flex flex-wrap gap-4 text-sm text-gray-600">
<span>2023 Ddsgnr. All Rights Reserved</span>
<span>Privacy Policy</span>
<span>Terms of Service</span>
<span>Cookie Policy</span>
</div>

{/* Social Media Icons */}
<div className="flex gap-5">
{socialIcons.map(({ src, alt }, index) => (
<Image
key={index}
className="w-[25px] sm:w-[35px]"
src={src}
alt={alt}
/>
))}
</div>
</div>
</div>
</div>
);
}

export default Footer;