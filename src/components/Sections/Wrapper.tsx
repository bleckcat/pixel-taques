import React from "react";

const Wrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <section className="grid grid-cols-12 sm:gap-4 md:gap-8 xl:gap-16">
      {children}
    </section>
  );
};

export default Wrapper;
