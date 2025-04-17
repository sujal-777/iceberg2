import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Blogs - Iceberg",
  description:
    "Empowering Future Chartered Accountants & Cost Accountants with Expert Guidance & Unmatched Test Series!",
};

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
