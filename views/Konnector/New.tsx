'use client'
import React, { useState } from "react";
import InputField from "@/components/shared/InputField";
import Button from "@/components/shared/Button";
import CompanyCard from "@/components/shared/CompanyCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

enum Tab {
    Tab1 = 1,
    Tab2 = 2,
    Tab3 = 3,
}

const companyData = [
    {
        title: "Company 1",
        summarydesc:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut tenetur voluptates suscipit ad quasi omnis magnam est",
        img: "/Company/PAlto1.png",
    },
];

const New = () => {
    const [input, setInput] = useState("");
    const [activeTab, setActiveTab] = useState<Tab>(Tab.Tab1);

    const handleTabClick = (tab: Tab) => {
        setActiveTab(tab);
    };

    return (
        <section className="max-w-full min-h-[calc(100vh-140px)]">
            <div className="w-full lg:flex lg:justify-between block">
                <h1 className="lg:text-[24px] text-[16px] font-bold lg:font-light text-brand-primary">
                    New Companies
                </h1>
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
            <div className="min-h-[calc(100vh-200px)]">
                <CompanyCard companyData={companyData.concat(companyData, companyData, companyData, companyData, companyData, companyData)} />
            </div>
            <div className="mt-4 flex justify-center">
                <Stack spacing={2}>
                    <Pagination count={10} variant="outlined" shape="rounded" />
                </Stack>
            </div>
        </section>
    );
};

export default New;
