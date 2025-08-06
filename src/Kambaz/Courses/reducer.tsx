import { createSlice } from "@reduxjs/toolkit";
import { courses } from "../Database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  courses: courses,
  enrollments: [],
  currentCourse: {
    _id: "1234",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description",
    department: "CS",
    credits: 3,
  }
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses: (state, { payload: courses }) => {
      state.courses = courses;
    },
    addCourse: (state, { payload: course }) => {
      const newCourse: any = {
        _id: course._id || uuidv4(),
        name: course.name,
        number: course.number,
        startDate: course.startDate,
        endDate: course.endDate,
        description: course.description,
        department: course.department || "CS",
        credits: course.credits || 3,
      };
      state.courses = [...state.courses, newCourse] as any;
    },
    deleteCourse: (state, { payload: courseId }) => {
      state.courses = state.courses.filter(
        (c: any) => c._id !== courseId
      );
    },
    updateCourse: (state, { payload: course }) => {
      state.courses = state.courses.map((c: any) =>
        c._id === course._id ? course : c
      ) as any;
    },
    editCourse: (state, { payload: courseId }) => {
      state.courses = state.courses.map((c: any) =>
        c._id === courseId ? { ...c, editing: true } : c
      ) as any;
    },
    setCurrentCourse: (state, { payload: course }) => {
      state.currentCourse = course;
    },
    enroll: (state, { payload: { user, course } }) => {
      const newEnrollment = { user, course };
      if (!state.enrollments.some((e: any) => e.user === user && e.course === course)) {
        state.enrollments = [...state.enrollments, newEnrollment] as any;
      }
    },
    unenroll: (state, { payload: { user, course } }) => {
      state.enrollments = state.enrollments.filter(
        (e: any) => !(e.user === user && e.course === course)
      ) as any;
    },
  },
});

export const { 
  setCourses, 
  addCourse, 
  deleteCourse, 
  updateCourse, 
  editCourse,
  setCurrentCourse,
  enroll,
  unenroll
} = coursesSlice.actions;
export default coursesSlice.reducer;