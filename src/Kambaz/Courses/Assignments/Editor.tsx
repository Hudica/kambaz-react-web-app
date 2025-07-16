import { Form, Button, Container, Row, Col } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <Container className="mt-3" id="wd-assignments-editor" style={{ maxWidth: "1000px" }}>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
          <Form.Control 
            id="wd-name" 
            type="text"
            value="A1" 
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control 
            id="wd-description"
            as="textarea"
            rows={8}
            defaultValue={`The assignment is available online

Submit a link to the landing page of your Web application running on Netlify.

The landing page should include the following:

• Your full name and section
• Links to each of the lab assignments
• Link to the Kanbas application
• Links to all relevant source code repositories

The Kanbas application should include a link to navigate back to the landing page.`}
          />
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column md={2} className="text-end">Points</Form.Label>
          <Col md={10}>
            <Form.Control 
              id="wd-points" 
              type="number"
              value={100} 
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
                  type="datetime-local"
                  id="wd-due-date"
                  value="2024-05-13T23:59"
                />
              </Form.Group>

              <Row>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label htmlFor="wd-available-from">Available from</Form.Label>
                    <Form.Control 
                      type="datetime-local"
                      id="wd-available-from"
                      value="2024-05-06T12:00"
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
          <Button variant="light" className="me-2 border">Cancel</Button>
          <Button variant="danger">Save</Button>
        </div>
      </Form>
    </Container>
  );
}