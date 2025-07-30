import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";

export default function ProtectedCourseRoute({ children }: { children: any }) {
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  
  // Check if the current user is enrolled in this course
  const isEnrolled = enrollments.some(
    (enrollment: any) =>
      enrollment.user === currentUser?._id &&
      enrollment.course === cid
  );
  
  // If not enrolled, redirect to dashboard
  if (!isEnrolled) {
    return <Navigate to="/Kambaz/Dashboard" />;
  }
  
  return children;
}