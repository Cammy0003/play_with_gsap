// src/routes/index.tsx
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/home/Home.tsx';
import ExplodingMenu from "../playgrounds/play01_exploding_menu/ExplodingMenu.tsx";
import { PATHS } from './paths';

export const router = createBrowserRouter([
  {
    path: PATHS.HOME,
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: PATHS.EXPLODING_MENU, element: <ExplodingMenu /> },
      // Add other routes here as they are created
    ],
  },
]);