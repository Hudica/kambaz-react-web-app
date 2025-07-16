import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

export default function Dashboard() {
  return (
    <div id="wd-dashboard" style={{ marginLeft: "20px" }}>
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2>
      <hr />
      <div id="wd-dashboard-courses" style={{ 
        display: "flex", 
        flexWrap: "wrap", 
        gap: "35px",
        justifyContent: "flex-start"
      }}>
        <div className="wd-dashboard-course" style={{ width: "250px" }}>
          <Card>
            <Link
              to="/Kambaz/Courses/1234/Home"
              className="wd-dashboard-course-link text-decoration-none text-dark"
            >
              <Card.Img
                variant="top"
                src="/images/reactjs.jpg"
                style={{ height: "160px", objectFit: "contain", backgroundColor: "#f8f9fa" }}
              />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title">
                  CS1234 React JS
                </Card.Title>
                <Card.Text className="wd-dashboard-course-description">
                  Full Stack software developer
                </Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </div>
        
        <div className="wd-dashboard-course" style={{ width: "250px" }}>
          <Card>
            <Link
              to="/Kambaz/Courses/1235/Home"
              className="wd-dashboard-course-link text-decoration-none text-dark"
            >
              <Card.Img
                variant="top"
                src="/images/html_logo.jpg"
                style={{ height: "160px", objectFit: "contain", backgroundColor: "#f8f9fa" }}
              />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title">
                  CS1235 HTML
                </Card.Title>
                <Card.Text className="wd-dashboard-course-description">
                  Front End software developer
                </Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </div>
        
        <div className="wd-dashboard-course" style={{ width: "250px" }}>
          <Card>
            <Link
              to="/Kambaz/Courses/1236/Home"
              className="wd-dashboard-course-link text-decoration-none text-dark"
            >
              <Card.Img
                variant="top"
                src="/images/css_logo.jpg"
                style={{ height: "160px", objectFit: "contain", backgroundColor: "#f8f9fa" }}
              />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title">
                  CS1236 CSS
                </Card.Title>
                <Card.Text className="wd-dashboard-course-description">
                  Front End software developer
                </Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </div>
        
        <div className="wd-dashboard-course" style={{ width: "250px" }}>
          <Card>
            <Link
              to="/Kambaz/Courses/1237/Home"
              className="wd-dashboard-course-link text-decoration-none text-dark"
            >
              <Card.Img
                variant="top"
                src="/images/python_logo.jpg"
                style={{ height: "160px", objectFit: "contain", backgroundColor: "#f8f9fa" }}
              />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title">
                  CS1237 Python
                </Card.Title>
                <Card.Text className="wd-dashboard-course-description">
                  Back End software developer
                </Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </div>
        
        <div className="wd-dashboard-course" style={{ width: "250px" }}>
          <Card>
            <Link
              to="/Kambaz/Courses/1238/Home"
              className="wd-dashboard-course-link text-decoration-none text-dark"
            >
              <Card.Img
                variant="top"
                src="/images/java_logo.jpg"
                style={{ height: "160px", objectFit: "contain", backgroundColor: "#f8f9fa" }}
              />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title">
                  CS1238 Java
                </Card.Title>
                <Card.Text className="wd-dashboard-course-description">
                  Back End software developer
                </Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </div>
        
        <div className="wd-dashboard-course" style={{ width: "250px" }}>
          <Card>
            <Link
              to="/Kambaz/Courses/1239/Home"
              className="wd-dashboard-course-link text-decoration-none text-dark"
            >
              <Card.Img
                variant="top"
                src="/images/c++_logo.jpg"
                style={{ height: "160px", objectFit: "contain", backgroundColor: "#f8f9fa" }}
              />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title">
                  CS1239 C++
                </Card.Title>
                <Card.Text className="wd-dashboard-course-description">
                  Embedded Systems software developer
                </Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </div>
        
        <div className="wd-dashboard-course" style={{ width: "250px" }}>
          <Card>
            <Link
              to="/Kambaz/Courses/1240/Home"
              className="wd-dashboard-course-link text-decoration-none text-dark"
            >
              <Card.Img
                variant="top"
                src="/images/assembly_logo.jpg"
                style={{ height: "160px", objectFit: "contain", backgroundColor: "#f8f9fa" }}
              />
              <Card.Body>
                <Card.Title className="wd-dashboard-course-title">
                  CS1240 Assembly
                </Card.Title>
                <Card.Text className="wd-dashboard-course-description">
                  Embedded Systems software developer
                </Card.Text>
                <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}