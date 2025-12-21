"use client";

import { ReactNode, useState } from "react";
import AdminHeader from "@/components/admin-layout/admin-header";
import AdminSidebar from "@/components/admin-layout/admin-sidebar";
import AdminChilren from "@/components/admin-layout/admin-children";
import AdminMobileBottomNav from "@/components/admin-layout/admin-mobile-bottom-nav";

interface Props {
  children: ReactNode;
}

const AdminPageLayout = ({ children }: Props) => {
  const [isExpand, setIsExpand] = useState(false);

  return (
    <>
      <div className="bg-[#eee] min-h-screen text-[#3c4858]">
        <div className="md:block hidden">
          <AdminSidebar isExpand={isExpand} />
        </div>
        <AdminHeader isExpand={isExpand} setIsExpand={setIsExpand} />
        <AdminChilren isExpand={isExpand}>{children}</AdminChilren>
      </div>
      <AdminMobileBottomNav />
    </>
  );
};

export default AdminPageLayout;
