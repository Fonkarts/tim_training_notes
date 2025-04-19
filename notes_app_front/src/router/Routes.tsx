import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home/Home";
import Layout from "../components/Layout/Layout";
import NotesPage from "../pages/NotesPage/NotesPage";

const Routes: React.FC = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/notes-page",
                    element: <NotesPage />,
                },
            ],
        },
    ]);
    return <RouterProvider router={router} />;
};

export default Routes;
