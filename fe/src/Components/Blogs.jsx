import blogs from "../data/blogpost"
import DashboradHeading from "./DashboradHeading"
import BlogPost from "./BlogPost"

function Blogs() {
  return (
    <div className="px-4 md:px-8 lg:px-16 w-full">
      <DashboradHeading heading="Blogposts" />
      <div className="mt-3 flex flex-wrap justify-between">
        {blogs.map((blog, index) => (
          <BlogPost key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default Blogs