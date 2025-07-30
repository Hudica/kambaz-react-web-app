import { FaSearch, FaPlus, FaCaretDown, FaCheckCircle, FaTrash } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import { IoDocumentText } from "react-icons/io5";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer";

export default function Assignments() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  
  const courseAssignments = assignments.filter(
    (assignment: any) => assignment.course === cid
  );
  const isFaculty = currentUser?.role === "FACULTY";

  const handleDeleteAssignment = (assignmentId: string, assignmentTitle: string) => {
    if (window.confirm(`Are you sure you want to remove the assignment "${assignmentTitle}"?`)) {
      dispatch(deleteAssignment(assignmentId));
    }
  };

  return (
    <div id="wd-assignments" className="container-fluid px-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="input-group" style={{ width: "300px" }}>
          <span className="input-group-text bg-white">
            <FaSearch />
          </span>
          <input
            type="text"
            className="form-control border-start-0"
            placeholder="Search..."
            id="wd-search-assignment"
          />
        </div>
        
        {isFaculty && (
          <div>
            <button className="btn btn-secondary me-2" id="wd-add-assignment-group">
              <FaPlus className="me-1" /> Group
            </button>
            <Link to={`/Kambaz/Courses/${cid}/Assignments/new`} className="btn btn-danger" id="wd-add-assignment">
              <FaPlus className="me-1" /> Assignment
            </Link>
          </div>
        )}
      </div>

      <div className="border rounded p-0">
        <div className="d-flex justify-content-between align-items-center p-3 bg-light border-bottom">
          <h5 className="mb-0 d-flex align-items-center">
            <BsGripVertical className="ms-2 fs-4"/>
            <FaCaretDown className="me-2" />
            <strong>ASSIGNMENTS</strong>
          </h5>
          <div className="d-flex align-items-center">
            <span className="me-3 text-muted">40% of Total</span>
            {isFaculty && (
              <Link to={`/Kambaz/Courses/${cid}/Assignments/new`} className="btn btn-outline-secondary btn-sm">
                <FaPlus />
              </Link>
            )}
            <BsGripVertical className="ms-3 fs-5" />
          </div>
        </div>

        <ul className="list-unstyled mb-0">
          {courseAssignments.map((assignment: any) => (
            <li key={assignment._id} className="wd-assignment-list-item border-bottom">
              <div className="d-flex align-items-start p-3 border-start border-5 border-success">
                <div className="me-3">
                  <BsGripVertical className="text-muted" />
                  <IoDocumentText className="ms-2 text-success fs-5" />
                </div>
                
                <div className="flex-grow-1">
                  {isFaculty ? (
                    <Link to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                          className="wd-assignment-link text-decoration-none text-dark">
                      <strong>{assignment.title}</strong>
                    </Link>
                  ) : (
                    <strong>{assignment.title}</strong>
                  )}
                  <div className="small text-muted">
                    <span className="text-danger">Multiple Modules</span> | 
                    {assignment.availableFrom && ` Not available until ${assignment.availableFrom} |`}
                    <br />
                    <strong>Due</strong> {assignment.due || "No due date"} | {assignment.points} pts
                  </div>
                </div>
                
                <div className="d-flex align-items-center">
                  <FaCheckCircle className="text-success fs-5 me-3" />
                  {isFaculty && (
                    <FaTrash 
                      className="text-danger me-3" 
                      style={{ cursor: "pointer" }}
                      onClick={(e) => {
                        e.preventDefault();
                        handleDeleteAssignment(assignment._id, assignment.title);
                      }}
                      title="Delete Assignment"
                    />
                  )}
                  <BsGripVertical className="text-muted" />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}