import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const { pathname } = useLocation();
  
  return (
    <div id="wd-account-navigation" className="list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link 
          key={link}
          to={`/Kambaz/Account/${link}`} 
          className="list-group-item border border-0 d-flex align-items-center"
          style={{
            color: pathname.includes(link) ? 'black' : '#dc3545',
            textDecoration: 'none'
          }}
        >
          {pathname.includes(link) && (
            <span style={{
              width: '4px',
              height: '25px',
              backgroundColor: 'black',
              marginRight: '10px',
              display: 'inline-block'
            }}></span>
          )}
          {link}
        </Link>
      ))}
    </div>
  );
}