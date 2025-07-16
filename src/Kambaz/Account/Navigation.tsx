import { Link } from "react-router-dom";

export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation" className="list-group fs-5 rounded-0">
      <Link 
        to="/Kambaz/Account/Signin" 
        className="list-group-item border border-0 d-flex align-items-center"
        style={{
          color: 'black',
        }}
      >
        <span style={{
          width: '4px',
          height: '25px',
          backgroundColor: 'black',
          marginRight: '10px',
          display: 'inline-block'
        }}></span>
        Signin
      </Link>
      <Link 
        to="/Kambaz/Account/Signup" 
        className="list-group-item text-danger border border-0"
      >
        Signup
      </Link>
      <Link 
        to="/Kambaz/Account/Profile" 
        className="list-group-item text-danger border border-0"
      >
        Profile
      </Link>
    </div>
  );
}