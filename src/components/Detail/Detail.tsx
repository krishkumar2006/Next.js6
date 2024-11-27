
import Image from "next/image";
import cr1 from "../../../public/images/cr1.png";
import cr2 from "../../../public/images/cr2.png";
import cr3 from "../../../public/images/cr3.png";
import cr4 from "../../../public/images/cr4.png";
import cr5 from "../../../public/images/cr5.png";
import cr6 from "../../../public/images/cr6.png";

function Detail() {
  const courses = [
    { id: 1, image: cr1, category: 'Design', title: 'UI/UX Designing', description: 'Explore the principles of UI/UX design...', rating: "☆★★★★", price: '$400' },
    { id: 2, image: cr2, category: 'Programming', title: 'Introduction to python ', description: 'Learn how to create modern websites...', rating: "☆★★★", price: '$400' },
    { id: 3, image: cr3, category: 'Business', title: 'Data analysis for beginner', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,', rating: "☆★★★★★", price: '$400' },
    { id: 4, image: cr4, category: 'Art', title: 'Art specialization', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', rating: "☆★★", price: '$400' },
    { id: 5, image: cr5, category: 'Law', title: 'Rule of law', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', rating: "☆★★★", price: '$400' },
    { id: 6, image: cr6, category: 'Tech', title: 'Introduction to wedflow', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', rating: "☆★★★★", price: '$400' }
  ];

return (
    <div className="py-20 px-4 text-center">
      <h2 className="font-semibold sm:text-3xl text-2xl">Courses</h2>
      <p className="sm:text-base text-sm mt-2">Your Ultimate Guide To Learning</p>
      
      <div className="flex sm:gap-3 gap-2 justify-center mt-4">
        {["Popular", "Recommended", "Best Price"].map((text, idx) => (
          <button key={idx} className={`sm:py-2 py-0 sm:px-6 px-4 sm:text-base text-sm ${idx === 0 ? 'bg-black text-white' : 'bg-transparent text-black border'} border-black rounded-xl transition-all duration-700 hover:bg-black hover:text-white`}>
            {text}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-8">
        {courses.map(({ id, image, category, title, description, rating, price }) => (
          <div key={id} className="w-[80%] m-auto bg-white rounded-2xl overflow-hidden shadow-xl shadow-[#939393]">
            <Image src={image} alt={title} className="w-full rounded-t-2xl transition-all duration-500 hover:scale-110" />
            <div className="flex flex-col gap-3 py-4 px-2 text-start">
              <div className="flex justify-between items-center">
                <span className="font-medium text-xs sm:text-[0.95em] tracking-wider uppercase">{category}</span>
                <p className="text-yellow-500 text-[1.5em]">{rating}</p>
              </div>
              <h3 className="font-semibold text-[1.2em] sm:text-[1.4em]">{title}</h3>
              <p className="text-[#636363] text-xs sm:text-[0.9em]">{description}</p>
              <div className="flex justify-between items-center">
                <button className="py-2 px-6 border text-black border-black transition-all duration-700 hover:bg-black hover:text-white">Enroll Now</button>
                <span>{price}</span>
              </div>
              
</div>
</div>
))}
</div>

<div className="my-20">
<button className="mx-4 py-4 px-8 bg-transparent border border-black text-black transition-all duration-700 hover:bg-black hover:text-white">
View All Courses
</button>
</div>
</div>
);
}

export default Detail;