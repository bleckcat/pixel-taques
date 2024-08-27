import Image from "next/image";
import React from "react";

const SkillCard = () => {
  return (
    <div className="bg-card bg-[size:100%_100%] bg-no-repeat col-span-4 p-2">
      <Image
        width={96}
        height={96}
        alt="java-script-logo"
        src="img/java-script-logo.svg"
        className="mt-8 mx-auto"
      />
      <div className="m-2 flex flex-col">
        <h2 className="text-center text-4xl pb-4">JavaScript</h2>
        <p className="text-xl mx-2">
          I have used JavaScript since I started developing, so I&apos;m pretty
          much confortable with it in my day-to-day life.
        </p>
        <button className="px-4 py-2 text-2xl shadow-gray-900 shadow-sm text-slate-800 font-black bg-java-script m-auto mb-8 mt-8">
          JS SKILL TREE
        </button>
      </div>
    </div>
  );
};

export default SkillCard;
