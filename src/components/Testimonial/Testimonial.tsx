import Image from "next/image";

import man1 from "../../../public/images/man1.png";
import man2 from "../../../public/images/man2.png";
import man3 from "../../../public/images/man3.png";
import man4 from "../../../public/images/man4.png";
import man5 from "../../../public/images/man5.png";

function Testimonials() {

const testimonials = [
{
id: 1,
rating: "☆★★★★",
text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
image: man1,
name: "Jame Nikadu",
role: "WordPress Developer"
},
{
id: 2,
rating: "☆☆★★★",
text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam nisi ut aliquid ex ea commodi consequatur.",
image: man2,
name: "Jane Doe",
role: "UI/UX Designer"
},
{
id: 3,
rating: "☆★★★★",
text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
image: man3,
name: "John Smith",
role: "React Developer"
},
{
id: 4,
rating: "★★★★☆",
text: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
image: man4,
name: "Emily Davis",
role: "Backend Engineer"
},
{
id: 5,
rating: "★★★★★",
text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.",
image: man5,
name: "Michael Lee",
role: "Full Stack Developer"
}
];

return (
<div className="container mx-auto my-24 px-4">
<div className="text-center mb-8">
<h2 className="text-black sm:text-[2em] text-[1.2em] font-semibold">
Customer Testimonials
</h2>
<p className="sm:text-base text-sm text-gray-600">
Lorem ipsum dolor sit amet,</p></div>
<div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 px-4">
{testimonials.map((testimonial) => (
<div key={testimonial.id} className="m-auto flex-shrink-0 h-auto border border-black bg-white rounded-md shadow-lg">
<div className="p-6 flex flex-col gap-4 text-start">
<span className="text-yellow-500 text-2xl">{testimonial.rating}</span>
<p className="sm:text-[0.9em] text-[0.8em]">{testimonial.text}</p>
<div className="flex gap-4 items-center">
<Image
src={testimonial.image}
alt="Profile Picture"
className="rounded-full w-12 h-12 object-cover"
/>
<div>
<h6 className="sm:text-xl text-lg font-semibold">{testimonial.name}</h6>
<span className="sm:text-[0.9em] text-[0.8em] text-gray-500">{testimonial.role}</span>
</div>
</div>
</div>
</div>
))}
</div>
</div>
);
}

export default Testimonials;
