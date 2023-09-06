'use client'
import React, { useState } from "react";
import InputField from "@/components/shared/InputField";
import Button from "@/components/shared/Button";
import CompanyCard from "@/components/shared/CompanyCard";

enum Tab {
  Tab1 = 1,
  Tab2 = 2,
  Tab3 = 3,

}

const companyData = [
  {
    title: 'Company 1',
    summarydesc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut tenetur voluptates suscipit ad quasi omnis magnam est',
    img: '/Company/PAlto1.png', 
  },
];


const Explore = () => {
  const [input, setInput] = useState("");
  const [activeTab, setActiveTab] = useState<Tab>(Tab.Tab1);

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="max-w-full min-h-[calc(100vh-140px)]">
      <div className="w-full lg:flex lg:justify-between block">
        <h1 className="lg:text-[24px] text-[16px] font-bold lg:font-light text-brand-primary ">Explore New Companies</h1>
        <div className="flex items-center lg:gap-1 gap-0">
          <InputField
            type="text"
            name="password"
            placeHolder="Search..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            outerContainerStyle="mt-0"
            inputStyle="rounded-full h-[50px] w-full"
          />
          <Button
            style="bg-brand-primary font-medium rounded-full ml-2 mt-1 md:text-[16px] text-[14px]"
            onClick={() => { }}
            text="Search"
            icon=""
          />
        </div>
      </div>

      {/* TabBar */}
      <div className="w-full pt-8 pb-2 flex justify-center gap-2 border-b-[1px] border-black-300 ">
        <button
          className={`tab-button p-2 ${activeTab === Tab.Tab1 ? "bg-brand-primary_light text-white-600 rounded-full " : ""}`}
          onClick={() => handleTabClick(Tab.Tab1)}>
          <p className="text-[14px] lg:text-[16px]">Company 1</p>
        </button>
        <button
          className={`tab-button p-2 ${activeTab === Tab.Tab2 ? "bg-brand-primary_light text-white-600 rounded-full " : ""}`}
          onClick={() => handleTabClick(Tab.Tab2)}>
          <p className="text-[14px] lg:text-[16px]">Company 2</p>
        </button>
        <button
          className={`tab-button p-2 ${activeTab === Tab.Tab3 ? "bg-brand-primary_light text-white-600 rounded-full " : ""}`}
          onClick={() => handleTabClick(Tab.Tab3)}>
          <p className="text-[14px] lg:text-[16px]">Company 3</p>
        </button>
      </div>

      <div className="py-2 lg:py-4">
        {activeTab === Tab.Tab1 && <div><CompanyCard companyData={companyData.concat(companyData, companyData, companyData, companyData, companyData, companyData)} /> </div>}
        {activeTab === Tab.Tab2 && <div><CompanyCard companyData={companyData.concat(companyData, companyData, companyData)} /></div>}
        {activeTab === Tab.Tab3 && <div><CompanyCard companyData={companyData.concat(companyData, companyData, companyData, companyData)} /></div>}
      </div>

    </section >
  );
};

export default Explore;
