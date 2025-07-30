import { Link } from "react-router-dom";
import { Button, Card, Col, FormControl, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addCourse, deleteCourse, updateCourse } from "./Courses/reducer";
import { enrollCourse, unenrollCourse } from "./reducer";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const isFaculty = currentUser?.role === "FACULTY";
  
  // Local state for the course being created/edited
  const [course, setCourse] = useState<any>({
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description",
  });

  // Local state for showing all courses vs enrolled only
  const [showAllCourses, setShowAllCourses] = useState(false);

  const handleAddNewCourse = () => {
    dispatch(addCourse(course));
    // Reset form after adding
    setCourse({
      name: "New Course",
      number: "New Number",
      startDate: "2023-09-10",
      endDate: "2023-12-15",
      description: "New Description",
    });
  };

  const handleDeleteCourse = (courseId: string) => {
    dispatch(deleteCourse(courseId));
  };

  const handleUpdateCourse = () => {
    dispatch(updateCourse(course));
    // Reset form after updating
    setCourse({
      name: "New Course",
      number: "New Number",
      startDate: "2023-09-10",
      endDate: "2023-12-15",
      description: "New Description",
    });
  };

  const handleEditCourse = (courseToEdit: any) => {
    setCourse(courseToEdit);
  };

  // Check if user is enrolled in a course
  const isEnrolled = (courseId: string) => {
    return enrollments.some(
      (enrollment: any) =>
        enrollment.user === currentUser?._id &&
        enrollment.course === courseId
    );
  };

  const handleEnroll = (courseId: string) => {
    if (currentUser) {
      dispatch(enrollCourse({ userId: currentUser._id, courseId }));
    }
  };

  const handleUnenroll = (courseId: string) => {
    if (currentUser) {
      dispatch(unenrollCourse({ userId: currentUser._id, courseId }));
    }
  };

  // Get courses to display based on toggle
  const displayedCourses = showAllCourses 
    ? courses 
    : courses.filter((course: any) => isEnrolled(course._id));

  return (
    <div id="wd-dashboard">
      <div className="d-flex justify-content-between align-items-center">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        <button 
          className="btn"
          style={{ backgroundColor: "#0d6efd", color: "white" }}
          onClick={() => setShowAllCourses(!showAllCourses)}
        >
          Enrollments
        </button>
      </div>
      <hr />
      
      {isFaculty && (
        <>
          <h5>New Course
            <button 
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={handleAddNewCourse}
            >
              Add
            </button>
            <button 
              className="btn btn-warning float-end me-2"
              onClick={handleUpdateCourse} 
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <br />
          <FormControl 
            value={course.name} 
            className="mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })} 
          />
          <FormControl 
            value={course.description} 
            as="textarea" 
            rows={3} 
            onChange={(e) => setCourse({ ...course, description: e.target.value })} 
          />
          <hr />
        </>
      )}
      
      <h2 id="wd-dashboard-published">
        {showAllCourses ? "All Courses" : "Published Courses"} ({displayedCourses.length})
      </h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {displayedCourses.map((course: any) => (
            <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link 
                  to={isEnrolled(course._id) ? `/Kambaz/Courses/${course._id}/Home` : "#"}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                  onClick={(e) => {
                    if (!isEnrolled(course._id)) {
                      e.preventDefault();
                    }
                  }}
                >
                  <Card.Img src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
                  <Card.Body className="card-body">
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name}
                    </Card.Title>
                    <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                      {course.description}
                    </Card.Text>
                    
                    {isEnrolled(course._id) ? (
                      <div>
                        <Button variant="primary" className="me-2">Go</Button>
                        <button 
                          className="btn btn-danger"
                          onClick={(e) => {
                            e.preventDefault();
                            handleUnenroll(course._id);
                          }}
                        >
                          Unenroll
                        </button>
                      </div>
                    ) : (
                      <button 
                        className="btn btn-success w-100"
                        onClick={(e) => {
                          e.preventDefault();
                          handleEnroll(course._id);
                        }}
                      >
                        Enroll
                      </button>
                    )}
                    
                    {isFaculty && (
                      <div className="mt-2">
                        <button 
                          onClick={(event) => {
                            event.preventDefault();
                            handleDeleteCourse(course._id);
                          }} 
                          className="btn btn-danger btn-sm float-end"
                          id="wd-delete-course-click"
                        >
                          Delete
                        </button>
                        <button 
                          id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            handleEditCourse(course);
                          }}
                          className="btn btn-warning btn-sm me-2 float-end"
                        >
                          Edit
                        </button>
                      </div>
                    )}
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}