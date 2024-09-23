import BlogDetails from "./BlogDetails";
import Create from "./Create";
import Home from "./Home";
import Navbar from "./Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import NotFound from "./NotFound";
function App() {
  // const title = "My First Blog Post";
  // const likes = 50
  // const person = {name: "John", age: 30}
  // const personO = ["John", 30]
  // const alive = true
  // const link = "http://www.google.com"

  return (
    <Router>
      <div className="App">
        <div className="content">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route exact path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          {/* <h1>{title}</h1> */}
          {/* <p>Liked {likes} times</p> */}
          {/* <p>Liked {personO} times</p> */}
          {/* <p>Liked {alive} times</p> */}

          {/* <p>Written by {person.name}</p> */}
          {/* <p>{Math.random() * 10}</p> */}
          {/* <a href={link}> Google </a> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
