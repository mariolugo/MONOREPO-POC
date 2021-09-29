import React from 'react';

import { Sidebar, NavBar } from '@belong/ui';

export default function Admin({ children }) {
  return (
    <>
      <Sidebar />
      <div className="relative flex h-full bg-gray-50 md:ml-64">
        <NavBar />
        {/* Header */}
        {/* <HeaderStats /> */}
        <div className="m-24 mx-auto px-4 w-full md:px-10">
          {children}
          {/* <FooterAdmin /> */}
        </div>
      </div>
    </>
  );
}
