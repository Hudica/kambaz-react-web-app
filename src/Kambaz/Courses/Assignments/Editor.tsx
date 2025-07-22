import { Form, Container, Row, Col } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import * as db from "../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === aid
  );

  return (
    <Container className="mt-3" id="wd-assignments-editor" style={{ maxWidth: "1000px" }}>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
          <Form.Control 
            id="wd-name" 
            type="text"
            defaultValue={assignment?.title || ""} 
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control 
            id="wd-description"
            as="textarea"
            rows={8}
            defaultValue={assignment?.description || ""}
          />
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column md={2} className="text-end">Points</Form.Label>
          <Col md={10}>
            <Form.Control 
              id="wd-points" 
              type="number"
              defaultValue={assignment?.points || 0} 
              style={{ width: "150px" }}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column md={2} className="text-end" htmlFor="wd-group">
            Assignment Group
          </Form.Label>
          <Col md={10}>
            <Form.Select id="wd-group">
              <option>ASSIGNMENTS</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column md={2} className="text-end" htmlFor="wd-display-grade-as">
            Display Grade as
          </Form.Label>
          <Col md={10}>
            <Form.Select id="wd-display-grade-as">
              <option>Percentage</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column md={2} className="text-end">
            Submission Type
          </Form.Label>
          <Col md={10}>
            <div className="border rounded p-3">
              <Form.Select id="wd-submission-type" className="mb-3">
                <option>Online</option>
              </Form.Select>
              
              <Form.Label className="fw-bold">Online Entry Options</Form.Label>
              
              <Form.Check 
                type="checkbox"
                id="wd-text-entry"
                label="Text Entry"
              />
              
              <Form.Check 
                type="checkbox"
                id="wd-website-url"
                label="Website URL"
                defaultChecked
              />
              
              <Form.Check 
                type="checkbox"
                id="wd-media-recordings"
                label="Media Recordings"
              />
              
              <Form.Check 
                type="checkbox"
                id="wd-student-annotation"
                label="Student Annotation"
              />
              
              <Form.Check 
                type="checkbox"
                id="wd-file-upload"
                label="File Uploads"
              />
            </div>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column md={2} className="text-end">
            Assign
          </Form.Label>
          <Col md={10}>
            <div className="border rounded p-3">
              <Form.Group className="mb-3">
                <Form.Label htmlFor="wd-assign-to">Assign to</Form.Label>
                <div className="border rounded p-2">
                  <span className="badge bg-light text-dark px-2 py-2">
                    Everyone
                    <button type="button" className="btn-close btn-sm ms-2" aria-label="Close"></button>
                  </span>
                </div>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label htmlFor="wd-due-date">Due</Form.Label>
                <Form.Control 
                  type="text"
                  id="wd-due-date"
                  value={assignment?.due || ""}
                />
              </Form.Group>

              <Row>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label htmlFor="wd-available-from">Available from</Form.Label>
                    <Form.Control 
                      type="text"
                      id="wd-available-from"
                      value={assignment?.availableFrom || ""}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label htmlFor="wd-available-until">Until</Form.Label>
                    <Form.Control 
                      type="date"
                      id="wd-available-until"
                      value="2024-05-20"
                    />
                  </Form.Group>
                </Col>
              </Row>
            </div>
          </Col>
        </Form.Group>

        <hr />

        <div className="text-end">
          <Link to={`/Kambaz/Courses/${cid}/Assignments`} className="btn btn-light me-2 border">
            Cancel
          </Link>
          <Link to={`/Kambaz/Courses/${cid}/Assignments`} className="btn btn-danger">
            Save
          </Link>
        </div>
      </Form>
    </Container>
  );
}