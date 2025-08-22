import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Diezmos } from "./Diezmos";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Diezmos />
    </StrictMode>
);
