import { Outlet } from "react-router";

function MainContent() {
  return <main className="flex-1"><Outlet /></main>;
}

export default MainContent;
