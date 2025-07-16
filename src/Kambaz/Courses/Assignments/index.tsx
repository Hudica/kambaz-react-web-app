import { FaSearch, FaPlus, FaCaretDown, FaCheckCircle } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import { IoDocumentText } from "react-icons/io5";

export default function Assignments() {
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
        
        <div>
          <button className="btn btn-secondary me-2" id="wd-add-assignment-group">
            <FaPlus className="me-1" /> Group
          </button>
          <button className="btn btn-danger" id="wd-add-assignment">
            <FaPlus className="me-1" /> Assignment
          </button>
        </div>
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
            <button className="btn btn-outline-secondary btn-sm">
              <FaPlus />
            </button>
            <BsGripVertical className="ms-3 fs-5" />
          </div>
        </div>

        <ul className="list-unstyled mb-0">
          <li className="wd-assignment-list-item border-bottom">
            <div className="d-flex align-items-start p-3 border-start border-5 border-success">
              <div className="me-3">
                <BsGripVertical className="text-muted" />
                <IoDocumentText className="ms-2 text-success fs-5" />
              </div>
              
              <div className="flex-grow-1">
                <a href="#/Kambaz/Courses/1234/Assignments/123"
                   className="wd-assignment-link text-decoration-none text-dark">
                  <strong>A1</strong>
                </a>
                <div className="small text-muted">
                  <span className="text-danger">Multiple Modules</span> | Not available until May 6 at 12:00am |
                  <br />
                  <strong>Due</strong> May 13 at 11:59pm | 100 pts
                </div>
              </div>
              
              <div className="d-flex align-items-center">
                <FaCheckCircle className="text-success fs-5 me-3" />
                <BsGripVertical className="text-muted" />
              </div>
            </div>
          </li>

          <li className="wd-assignment-list-item border-bottom">
            <div className="d-flex align-items-start p-3 border-start border-5 border-success">
              <div className="me-3">
                <BsGripVertical className="text-muted" />
                <IoDocumentText className="ms-2 text-success fs-5" />
              </div>
              
              <div className="flex-grow-1">
                <a href="#/Kambaz/Courses/1234/Assignments/123"
                   className="wd-assignment-link text-decoration-none text-dark">
                  <strong>A2</strong>
                </a>
                <div className="small text-muted">
                  <span className="text-danger">Multiple Modules</span> | Not available until May 13 at 12:00am |
                  <br />
                  <strong>Due</strong> May 20 at 11:59pm | 100 pts
                </div>
              </div>
              
              <div className="d-flex align-items-center">
                <FaCheckCircle className="text-success fs-5 me-3" />
                <BsGripVertical className="text-muted" />
              </div>
            </div>
          </li>

          <li className="wd-assignment-list-item">
            <div className="d-flex align-items-start p-3 border-start border-5 border-success">
              <div className="me-3">
                <BsGripVertical className="text-muted" />
                <IoDocumentText className="ms-2 text-success fs-5" />
              </div>
              
              <div className="flex-grow-1">
                <a href="#/Kambaz/Courses/1234/Assignments/123"
                   className="wd-assignment-link text-decoration-none text-dark">
                  <strong>A3</strong>
                </a>
                <div className="small text-muted">
                  <span className="text-danger">Multiple Modules</span> | Not available until May 20 at 12:00am |
                  <br />
                  <strong>Due</strong> May 27 at 11:59pm | 100 pts
                </div>
              </div>
              
              <div className="d-flex align-items-center">
                <FaCheckCircle className="text-success fs-5 me-3" />
                <BsGripVertical className="text-muted" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}