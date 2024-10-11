import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Auth } from "../screens/auth/Auth";
import { MainContainer } from "./Navigation.styled";
import { NavBarComponent } from "../components";
import { PrivateRoute } from "./private-navigation/PrivateNavigation";
import { ProjectList } from "../screens/project-list/ProjectList";
import { TaskBoard } from "../screens/task-board/TaskBoard";
import { TaskForm } from "../screens/task-form/TaskForm";
import { ProjectForm } from "../screens/project-form/ProjectForm";

export const Navigation: React.FC = () => {
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <MainContainer>
        <NavBarComponent />
        <Routes>
          <Route path="/login" element={<Auth />} />
          <Route
            path="/projects"
            element={
              <PrivateRoute>
                <ProjectList />
              </PrivateRoute>
            }
          />
          <Route
            path="/projects/create"
            element={
              <PrivateRoute>
                <ProjectForm />
              </PrivateRoute>
            }
          />
          <Route
            path="/projects/:id/create-task"
            element={
              <PrivateRoute>
                <TaskForm />
              </PrivateRoute>
            }
          />
          <Route
            path="/projects/:id"
            element={
              <PrivateRoute>
                <TaskBoard />
              </PrivateRoute>
            }
          />
          <Route
            path="/"
            element={
              token ? <Navigate to="/projects" /> : <Navigate to="/login" />
            }
          />
        </Routes>
      </MainContainer>
    </BrowserRouter>
  );
};
