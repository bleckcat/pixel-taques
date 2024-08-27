import React from "react";

const Wrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <section className="col-span-full">{children}</section>;
};

export default Wrapper;
