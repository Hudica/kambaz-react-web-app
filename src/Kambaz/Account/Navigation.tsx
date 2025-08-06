import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navigateTo = (path: string) => {
    navigate(path);
  };

  return (
    <div id="wd-account-navigation">
      {!currentUser && (
        <div className="d-flex flex-column gap-2">
          <div className="d-flex align-items-center">
            {isActive("/Kambaz/Account/Signin") && (
              <div 
                className="bg-primary me-2" 
                style={{ width: "4px", height: "24px" }}
              />
            )}
            <Button
              variant="link"
              className={`text-start p-0 text-decoration-none ${
                isActive("/Kambaz/Account/Signin") ? "text-primary fw-bold" : "text-primary"
              }`}
              onClick={() => navigateTo("/Kambaz/Account/Signin")}
            >
              Sign in
            </Button>
          </div>

          <div className="d-flex align-items-center">
            {isActive("/Kambaz/Account/Signup") && (
              <div 
                className="bg-primary me-2" 
                style={{ width: "4px", height: "24px" }}
              />
            )}
            <Button
              variant="link"
              className={`text-start p-0 text-decoration-none ${
                isActive("/Kambaz/Account/Signup") ? "text-primary fw-bold" : "text-primary"
              }`}
              onClick={() => navigateTo("/Kambaz/Account/Signup")}
            >
              Sign up
            </Button>
          </div>
        </div>
      )}

      {currentUser && (
        <div className="d-flex flex-column gap-2">
          <div className="d-flex align-items-center">
            {isActive("/Kambaz/Account/Profile") && (
              <div 
                className="bg-primary me-2" 
                style={{ width: "4px", height: "24px" }}
              />
            )}
            <Button
              variant="link"
              className={`text-start p-0 text-decoration-none ${
                isActive("/Kambaz/Account/Profile") ? "text-primary fw-bold" : "text-secondary"
              }`}
              onClick={() => navigateTo("/Kambaz/Account/Profile")}
            >
              Profile
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}