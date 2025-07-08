import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
          <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1235/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/html_logo.jpg" width={200} />
            <div>
              <h5> CS1235 HTML </h5>
              <p className="wd-dashboard-course-title">
                Front End software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1236/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/css_logo.jpg" width={200} />
            <div>
              <h5> CS1236 CSS </h5>
              <p className="wd-dashboard-course-title">
                Front End software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1237/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/python_logo.jpg" width={200} />
            <div>
              <h5> CS1237 Python </h5>
              <p className="wd-dashboard-course-title">
                Back End software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1238/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/java_logo.jpg" width={200} />
            <div>
              <h5> CS1238 Java </h5>
              <p className="wd-dashboard-course-title">
                Back End software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1239/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/c++_logo.jpg" width={200} />
            <div>
              <h5> CS1239 C++ </h5>
              <p className="wd-dashboard-course-title">
                Embedded Systems software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1240/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/assembly_logo.jpg" width={200} />
            <div>
              <h5> CS1240 Assembly </h5>
              <p className="wd-dashboard-course-title">
                Embedded Systems software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
);}
