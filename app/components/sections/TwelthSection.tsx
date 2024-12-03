import React from 'react';

export interface Blog{
  title:string;
  image:string;
  link:string
}

const Blogs = ({blogData, blogheading} : {blogData?:Blog[] , blogheading:any}) => {

  return (
    <section className="blog-sec" id='resources'>
  <div className="container">
    <h2 className="heading2 text-center">{blogheading}</h2>
    <div className="blog__panel">
      {blogData?.map((blog, index) => (
        <div className="blog_col" key={index}>
          <div className="blog_image">
            <a href={blog.link} target="_blank" rel="noreferrer">
              <img src={blog.image} alt={blog.title} />
            </a>
          </div>
          <a className="blog_caption" href={blog.link}>
            {blog.title}
          </a>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default Blogs;
