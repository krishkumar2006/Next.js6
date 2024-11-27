import Image from "next/image";
import png1 from '../../../public/images/course1.png';
import png2 from '../../../public/images/course2.png';
import png3 from '../../../public/images/course3.png';
import png4 from '../../../public/images/course4.png';
import png5 from '../../../public/images/course5.png';
import png6 from '../../../public/images/course6.png';
import png7 from '../../../public/images/course7.png';
import png8 from '../../../public/images/course8.png';
import png9 from '../../../public/images/course9.png';

function Course() {
  const courses = [
    { id: "Design & Development", img: png1, alt: "Web Design", title: "Design & Development", description: "50+ web courses available" },
    { id: "Marketing", img: png2, alt: "Marketing", title: "Marketing", description: "50+ courses available" },
    { id: "Development", img: png3, alt: " Development", title: "Development", description: "50+courses available" },
    { id: "Communication", img: png4, alt: "JavaScript Programming", title: "JavaScript Fundamentals", description: "50+ JavaScript courses available" },
    { id: "course-react", img: png5, alt: "React Development", title: "React.js Development", description: "50+ React courses available" },
    { id: "course-backend", img: png6, alt: "Backend Development", title: "Back-End Development", description: "50+ back-end courses available" },
    { id: "course-mobile-app", img: png7, alt: "Mobile App Development", title: "Mobile App Development", description: "50+ mobile app courses available" },
    { id: "course-full-stack", img: png8, alt: "Web Development", title: "Full Stack Development", description: "50+ full-stack courses available" },
    { id: "course-graphic-design", img: png9, alt: "Graphic Design", title: "Graphic Design", description: "50+ graphic design courses available" },
  ];

  return (
    <div>
      <div className="flex flex-col justify-center m-auto text-center py-10 px-4 mt-24">
        <h1 className="sm:text-3xl text-xl font-semibold mb-2">Explore Courses by Category</h1>
        <span className="mb-14 sm:text-[0.95em] text-[0.8em]">Explore a variety of courses taught by expert mentors</span>

        <div className="m-auto grid lg:gap-6 xl:gap-24 gap-24 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center">
          {courses.map(course => (
            <div key={course.id} id={course.id} className="flex gap-5 text-start items-center">
              <Image src={course.img} alt={course.alt} className="sm:w-[70px] w-[45px] h-auto" />
              <div>
                <h3 className="sm:text-xl text-lg font-semibold">{course.title}</h3>
                <span className="sm:text-[0.95em] text-[0.85em] tracking-wide">{course.description}</span>
              </div>
            </div>
          ))}
        </div>

        <div>
          <button className="my-20 mx-4 py-4 px-8 bg-transparent border border-black text-black transition-all duration-700 hover:bg-black hover:text-white">
            View All Courses
          </button>
        </div>
      </div>
    </div>
  );
}

export default Course;
