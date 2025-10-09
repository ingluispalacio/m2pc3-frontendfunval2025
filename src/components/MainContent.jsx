import { Outlet } from "react-router";

function MainContent() {
  return <main className="flex-1 bg-[url('/themewagon/background_elements.png')] bg-top bg-cover bg-no-repeat"><Outlet /></main>;
}

export default MainContent;
