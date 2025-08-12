import { BsGripVertical } from 'react-icons/bs';
import ModulesControls from './ModulesControls';
import { ListGroup } from 'react-bootstrap';
import LessonControlButtons from './LessonControlButtons';
import ModuleControlButtons from './ModuleControlButtons';

import { useParams } from "react-router";
import { useState, useEffect } from 'react';
import * as coursesClient from "../client";
import * as modulesClient from "./client";

import { addModule, editModule, updateModule, deleteModule, setModules }
  from "./reducer";
import * as courseClient from "../client";
import { useSelector, useDispatch } from "react-redux";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");

  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();


  const fetchModules = async () => {
    const modules = await coursesClient.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };
  const fetchModulesForCourse = async () => {
   const modules = await courseClient.findModulesForCourse(cid!);
   dispatch(setModules(modules));
 };

  const addModuleHandler = async () => {
   const newModule = await courseClient.createModuleForCourse(cid!, {
     name: moduleName,
     course: cid,
   });
   dispatch(addModule(newModule));
   setModuleName("");
 };

 const deleteModuleHandler = async (moduleId: string) => {
   await modulesClient.deleteModule(moduleId);
   dispatch(deleteModule(moduleId));
 };

  const updateModuleHandler = async (module: any) => {
   await modulesClient.updateModule(module);
   dispatch(updateModule(module));
 };



 useEffect(() => {
   fetchModulesForCourse();
 }, [cid]);

  useEffect(() => {
    fetchModules();
  }, []);
  



  return (
    <div>
      <ModulesControls  setModuleName={setModuleName} moduleName={moduleName}  addModule={addModuleHandler} />

      <ListGroup id="wd-modules" className="rounded-0">
        {modules
          // .filter((module: any) => module.course === cid)
          .map((module: any) => (
            <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                {!module.editing && module.name}
                {module.editing && (
         <input onChange={(e) =>
                  updateModuleHandler({ ...module, name: e.target.value }) }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    updateModuleHandler({ ...module, editing: false });
                  }
                }}
                value={module.name}/>
        )}
                <ModuleControlButtons
                  moduleId={module._id}
                  deleteModule={(moduleId) => deleteModuleHandler(moduleId)}
                  editModule={(moduleId) => dispatch(editModule(moduleId))} />
              </div>
              {module.lessons && (
                <ListGroup className="wd-lessons rounded-0">
                  {module.lessons.map((lesson: any) => (
                    <ListGroup.Item className="wd-lesson p-3 ps-1">
                      <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
                    </ListGroup.Item>
                  ))}</ListGroup>)}</ListGroup.Item>))}</ListGroup>

    </div>
  );
}