// import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  // let name = "Peter";
  // const [name, setName] = useState("mario");

  // const handleClick = (e) => {
  //     // console.log("Button Clicked", e);
  //     // name = "mario";\
  //     setName("luigi");
  // }

  // const handleClick2 = (name, e) => {
  //     console.log("Button Clicked" + name , e.target);
  // }

  // return (
  //    <div className="home">
  //     <h2>Home Page</h2>
  //     <p>{name}</p>
  //     <button onClick={handleClick}>Button</button>
  //     {/* <button onClick={(e) => handleClick2("mario",  e)} >Button Now</button> */}
  //    </div>

  //  );


  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  const {data: blogs, ispending, error} = useFetch("http://localhost:8000/blogs");

  // a useEffect that runs when the name state changes
  // useEffect(() => {
  //   console.log("use effect ran");
  //   console.log(name)
  // }, [name])

  // console.log(blogs)

  return (
    <div className="home">
      {error && <div style={{color: "red"}}>{error}</div>}
      {ispending && <p>Loading...</p>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
      {/* {blogs && <BlogList blogs = {blogs} handleDelete = {handleDelete} title = "All Blogs" />} */}

      {/* <p>{name}</p> */}

      {/* <button onClick={() => setName("luigi")}>Change Name</button> */}

      {/* <BlogList blogs = {blogs.filter((blog) => blog.author === "mario")} title = "Marios Blogs" /> */}

      {/* <BlogList blogs = {blogs.filter((blog) => blog.author === "yoshi")} title = "Yoshis Blogs" />
       */}
    </div>
  );
};

export default Home;
