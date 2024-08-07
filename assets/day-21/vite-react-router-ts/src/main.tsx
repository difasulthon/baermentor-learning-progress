import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  LoaderFunction,
  RouterProvider,
} from "react-router-dom";
import Root, { loader as rootLoader, action as rootAction } from "./route/root";
import ErrorPage from "./error-page";
import Contact, {
  action as contactAction,
  loader as contactLoader,
} from "./route/contact";
import EditContact, { action as editAction } from "./route/edit";
import { action as destroyAction } from "./route/destroy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader satisfies LoaderFunction,
    action: rootAction,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader satisfies LoaderFunction,
        // action: contactAction,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader satisfies LoaderFunction,
        action: editAction,
      },
      {
        path: "contacts/:contactId/destroy",
        action: destroyAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
