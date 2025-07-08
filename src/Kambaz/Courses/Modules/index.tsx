export default function Modules() {
  return (
    <div>
      <button type="button"
                id="wd-modules-collapse-all">
        Collapse All
      </button>
      <button type="button"
                id="wd-modules-view-progress">
        View Progress
      </button>
      <select id="wd-modules-publush-dropdown">
        <option value="Publish All">Publish All</option>
        </select>
      <button type="button"
                id="wd-modules-collapse-all">
        Collapse All
      </button>
        
      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">Learn what is Web Development</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 2</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Learning CSS & BOOTSTRAP</li>
                <li className="wd-content-item">Learn how to style</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 3</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Learning JavaScript</li>
                <li className="wd-content-item">Learn how to make websites interactive</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
);}
