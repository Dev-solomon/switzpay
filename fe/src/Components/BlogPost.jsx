
function BlogPost({blog}) {
  return (
    <div className="w-48 border-2 border-grey-700 mb-4 rounded-md md:w-60 md:pb-3 lg:w-64">
      <img src={blog.src} alt="pic" className="w-[100%] h-[40%] md:h-[45%]" />
      <h3 className="font-medium text-sm pt-3 pl-2 md:text-xl md:pt-4">{blog.title}</h3>
      <p className="text-xs pt-2 px-2 md:text-base">{blog.post}</p>
      <p className="text-sm pt-3 pl-2 pb-1 md:text-lg">
        <a href="/" className="text-regal-blue">{blog.tag}</a>
      </p>
    </div>
  );
}

export default BlogPost