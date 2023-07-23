"use client";

//assets
import { DashboardContainer } from "@/assets/css/dashboard";

//components
import { SidebarRight, SidebarBottom } from "./sidebar";

const Dashboard = (props: { children: React.ReactNode }) => {
  return (
    <DashboardContainer>
      <div className="sidebar">
        <SidebarRight />
      </div>
      <div className="content">{props.children}</div>
      <SidebarBottom />
    </DashboardContainer>
  );
};
export default Dashboard;
