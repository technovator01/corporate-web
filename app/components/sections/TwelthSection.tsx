import React from 'react';

const Blogs = () => {
  const blogData = [
    {
      title: 'How AI in Stock Trading will Transform Markets',
      image: 'https://appinventiv.com/wp-content/uploads/2023/06/AI-in-Stock-Trading-How-Artificial-Intelligence-is-Changing-the-Game-05.webp',
      link: 'https://appinventiv.com/blog/ai-in-stock-trading/',
    },
    {
      title: '12 Ways AI in Education is Transforming the Industry',
      image: 'https://appinventiv.com/wp-content/uploads/2022/07/10-ways-artificial-intelligence-is-transforming-the-education-industry-scaled-1.webp',
      link: 'https://appinventiv.com/blog/artificial-intelligence-in-education/',
    },
    {
      title: 'AI in Banking – How Artificial Intelligence is Used in Banks',
      image: 'https://appinventiv.com/wp-content/uploads/2022/01/AI-in-banking-industry.png',
      link: 'https://appinventiv.com/blog/ai-in-banking/',
    },
  ];

  return (
    <section className="blog-sec">
      <div className="container">
        <h2 className="heading2 text-center">Related Blogs</h2>
        <div className="blog__panel">
          {blogData.map((blog, index) => (
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
