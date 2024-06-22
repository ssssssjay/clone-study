import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/root.jsx";
import Shop29cmRoot from "./routes/29cm/root.jsx";
import Shop29cmClothes from "./routes/29cm/clothes.jsx";
import Shop28cmGift from "./routes/29cm/gift.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/29cm",
    element: <Shop29cmRoot />,
    children: [
      {
        path: "clothes",
        element: <Shop29cmClothes />,
        meta: {
          title: "의류",
        },
      },
      {
        path: "gift",
        element: <Shop28cmGift />,
        meta: {
          title: "선물하기",
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
