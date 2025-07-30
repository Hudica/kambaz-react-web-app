import { Form, Container, Row, Col } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addAssignment, updateAssignment } from "./reducer";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const isFaculty = currentUser?.role === "FACULTY";
  
  const isNewAssignment = aid === "new";
  const existingAssignment = assignments.find(
    (assignment: any) => assignment._id === aid
  );

  // Initialize form state
  const [assignment, setAssignment] = useState({
    title: "",
    description: "",
    points: 100,
    due: "",
    availableFrom: "",
    availableUntil: "",
    course: cid,
  });

  // Load existing assignment data if editing
  useEffect(() => {
    if (!isNewAssignment && existingAssignment) {
      setAssignment({
        ...existingAssignment,
        due: existingAssignment.due || "",
        availableFrom: existingAssignment.availableFrom || "",
        availableUntil: existingAssignment.availableUntil || "",
      });
    }
  }, [isNewAssignment, existingAssignment]);

  // Redirect non-faculty users
  useEffect(() => {
    if (!isFaculty) {
      navigate(`/Kambaz/Courses/${cid}/Assignments`);
    }
  }, [isFaculty, navigate, cid]);

  // Don't render anything for non-faculty
  if (!isFaculty) {
    return null;
  }

  const handleSave = () => {
    if (isNewAssignment) {
      dispatch(addAssignment(assignment));
    } else {
      dispatch(updateAssignment({ ...assignment, _id: aid }));
    }
    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  const handleCancel = () => {
    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  return (
    <Container className="mt-3" id="wd-assignments-editor" style={{ maxWidth: "800px" }}>
      <h2>{isNewAssignment ? "Create Assignment" : "Edit Assignment"}</h2>
      <hr />
      
      <Form>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
          <Form.Control 
            id="wd-name" 
            type="text"
            value={assignment.title}
            onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
            placeholder="New Assignment"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control 
            id="wd-description"
            as="textarea"
            rows={8}
            value={assignment.description}
            onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
            placeholder="New Assignment Description"
          />
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2} className="text-end">Points</Form.Label>
          <Col sm={10}>
            <Form.Control 
              id="wd-points" 
              type="number"
              value={assignment.points}
              onChange={(e) => setAssignment({ ...assignment, points: parseInt(e.target.value) || 0 })}
              style={{ width: "150px" }}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2} className="text-end">
            Assign
          </Form.Label>
          <Col sm={10}>
            <div className="border rounded p-3">
              <Form.Group className="mb-3">
                <Form.Label htmlFor="wd-due-date">Due</Form.Label>
                <Form.Control 
                  type="date"
                  id="wd-due-date"
                  value={assignment.due}
                  onChange={(e) => setAssignment({ ...assignment, due: e.target.value })}
                />
              </Form.Group>

              <Row>
                <Col sm={6}>
                  <Form.Group>
                    <Form.Label htmlFor="wd-available-from">Available from</Form.Label>
                    <Form.Control 
                      type="date"
                      id="wd-available-from"
                      value={assignment.availableFrom}
                      onChange={(e) => setAssignment({ ...assignment, availableFrom: e.target.value })}
                    />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group>
                    <Form.Label htmlFor="wd-available-until">Until</Form.Label>
                    <Form.Control 
                      type="date"
                      id="wd-available-until"
                      value={assignment.availableUntil}
                      onChange={(e) => setAssignment({ ...assignment, availableUntil: e.target.value })}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </div>
          </Col>
        </Form.Group>

        <hr />

        <div className="text-end">
          <button 
            type="button"
            className="btn btn-light me-2 border" 
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button 
            type="button"
            className="btn btn-danger" 
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </Form>
    </Container>
  );
}