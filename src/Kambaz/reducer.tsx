import { createSlice } from "@reduxjs/toolkit";
import { enrollments as initialEnrollments } from "./Database";

const initialState = {
  enrollments: initialEnrollments,
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enrollCourse: (state, { payload }) => {
      const { userId, courseId } = payload;
      const newEnrollment = {
        _id: `${userId}-${courseId}`,
        user: userId,
        course: courseId,
      };
      state.enrollments = [...state.enrollments, newEnrollment] as any;
    },
    unenrollCourse: (state, { payload }) => {
      const { userId, courseId } = payload;
      state.enrollments = state.enrollments.filter(
        (enrollment: any) => 
          !(enrollment.user === userId && enrollment.course === courseId)
      );
    },
  },
});

export const { enrollCourse, unenrollCourse } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;