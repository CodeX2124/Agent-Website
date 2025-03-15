
// import PortfolioData from './PortfolioData';
// import MyProjectCard from '@/components/Portfolio/MyProjectCard'

// export default function Portfolio() {
//   return (
//     <div className="pb-[120px] pt-[120px]">
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-33xl font-bold text-center mt-18"></h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  mt-18">
//           {PortfolioData.map((project) => (
//             <MyProjectCard
//               key={project.id}
//               imageSrc={project.imageSrc}
//               title={project.title}
//               description={project.description}
//               link={project.link}
//             />
//           ))}
//         </div>
//       </div>

//     </div>
//   );
// }

import SectionTitle from "../../components/Common/SectionTitle";
import SingleBlog_portfolio from "../../components/Blog/SingleBlog_portfolio";
import blogPortfolioData from "./PortfolioData";

const Blog = () => {
  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Our Products"
          paragraph=" Understand that we can't showcase every product throughout our entire career, but we are committed to helping you discover the perfect solution for your success with us. Explore our offerings and find the ideal fit for your needs! "
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogPortfolioData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog_portfolio blog={blog} />
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
