import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// 💖 SET THEME GLOBAL (putih + biru + pink)
const rootElement = document.documentElement;

// reset dulu biar aman
rootElement.classList.remove("theme-blue", "theme-pink");

// 💙 base biru + 💖 pink mode
rootElement.classList.add("theme-blue", "theme-pink");

// 🚀 Render React App
const root = createRoot(document.getElementById("root")!);
root.render(<App />);