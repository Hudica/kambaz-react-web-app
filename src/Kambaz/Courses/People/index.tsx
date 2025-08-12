import { useParams } from "react-router";
import { useState, useEffect } from "react";
import PeopleTable from "./Table";
import * as courseClient from "../client";

export default function People() {
  const { cid } = useParams();
  const [users, setUsers] = useState<any[]>([]);

  const fetchUsersForCourse = async () => {
    if (cid) {
      try {
        const enrolledUsers = await courseClient.findUsersForCourse(cid);
        setUsers(enrolledUsers);
      } catch (error) {
        console.error("Error fetching users for course:", error);
        setUsers([]);
      }
    }
  };

  useEffect(() => {
    fetchUsersForCourse();
  }, [cid]);

  return (
    <div>
      <PeopleTable users={users} />
    </div>
  );
}