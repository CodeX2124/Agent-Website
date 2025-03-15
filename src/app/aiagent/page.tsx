'use client';
// import SectionTitle from "../../components/Common/SectionTitle";
// import SingleBlog_portfolio from "../../components/Blog/SingleBlog_portfolio";
// // import blogPortfolioData from "./PortfolioData";

// const Blog = () => {
//   return (
//     <section
//       id="blog"
//       className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
//     >
//       <div className="container">
//         <SectionTitle
//           title="AI Agent 1"
//           paragraph=" Understand that we can't showcase every product throughout our entire career, but we are committed to helping you discover the perfect solution for your success with us. Explore our offerings and find the ideal fit for your needs! "
//           center
//         />

//         {/* <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
//           {blogPortfolioData.map((blog) => (
//             <div key={blog.id} className="w-full">
//               <SingleBlog_portfolio blog={blog} />
              
//             </div>
//           ))}
//         </div> */}
        
//       </div>
//     </section>
//   );
// };

// export default Blog;


import SectionTitle from "../../components/Common/SectionTitle";
import SingleBlog_portfolio from "../../components/Blog/SingleBlog_portfolio";
// import blogPortfolioData from "./PortfolioData";
const ID = process.env.NEXT_PUBLIC_ID;
const Blog = () => {
  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="AI Agent 15"
          paragraph=" Understand that we can't showcase every product throughout our entire career, but we are committed to helping you discover the perfect solution for your success with us. Explore our offerings and find the ideal fit for your needs! "
          center
        />

        <div
          dangerouslySetInnerHTML={{
            __html: `
              <elevenlabs-convai agent-id="nPQkV57HTzHIiUlCKTa5"></elevenlabs-convai>
              <script src="https://elevenlabs.io/convai-widget/index.js" async type="text/javascript"></script>
            `,
          }}
        />
        {/* <div
          dangerouslySetInnerHTML={{
            __html: `
              <elevenlabs-convai agent-id="nPQkV57HTzHIiUlCKTa5"></elevenlabs-convai>
              <script src="https://elevenlabs.io/convai-widget/index.js" async type="text/javascript"></script>
            `,
          }}
        /> */}

        {/* <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogPortfolioData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog_portfolio
                title={blog.title}
                image={blog.image}
                description={blog.description}
                category={blog.category}
                date={blog.date}
              />
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Blog;
//cmd