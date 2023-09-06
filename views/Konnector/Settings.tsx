"use client"

import InputField from "@/components/shared/InputField";
import { useState } from "react";

const Settings = () => {

    const [input, setInput] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        company: "",
        HQLocation: "",
        companyEmail: "",
        recoveryEmail: "",
        bio: ""
    });

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;
        setInput({
            ...input,
            [name]: value
        });
    };

    return (
        <section className="h-full flex justify-center items-start flex-col" >
            <h1 className="text-[24px] text-brand-primary">Personal information</h1>
            <div className="w-full h-full grid lg:grid-cols-2 lg:gap-10 gap-3 mt-4" >
                <aside className="w-full h-full flex flex-col gap-3" >
                    <div className="w-full flex gap-3" >
                        <InputField label="First Name*" type="text" name="firstName" value={input?.firstName} onChange={handleInput} inputStyle="w-[100%]" labelStyle="text-brand-primary font-medium" />
                        <InputField label="Last Name*" type="text" name="lastName" value={input?.lastName} onChange={handleInput} inputStyle="w-[100%]" labelStyle="text-brand-primary font-medium" />
                    </div>
                    <InputField label="Phone number*" type="text" name="phoneNumber" value={input?.phoneNumber} onChange={handleInput} inputStyle="w-[100%]" labelStyle="text-brand-primary font-medium" />
                    <div className="w-full flex gap-3" >
                        <InputField label="Company*" type="text" name="company" value={input?.company} onChange={handleInput} inputStyle="w-[100%]" labelStyle="text-brand-primary font-medium" />
                        <InputField label="HQ Location*" type="text" name="HQLocation" value={input?.HQLocation} onChange={handleInput} inputStyle="w-[100%]" labelStyle="text-brand-primary font-medium" />
                    </div>
                    <InputField label="Company email*" type="text" name="companyEmail" value={input?.companyEmail} onChange={handleInput} inputStyle="w-[100%]" labelStyle="text-brand-primary font-medium" />
                    <InputField label="Recovery email*" type="text" name="recoveryEmail" value={input?.recoveryEmail} onChange={handleInput} inputStyle="w-[100%]" labelStyle="text-brand-primary font-medium" />
                </aside>
                <aside className={`w-full flex flex-col items-start`}>
                    <label htmlFor={"Bio"} className={`block md:text-[16px] text-[14px] text-brand-primary`}>
                        Optional bio for vendors to see
                    </label>
                    <textarea
                        placeholder="I love Konnect.io, it allows me to research and find what I need without being annoyed with spam."
                        id="Bio"
                        value={input.bio}
                        onChange={(e) => setInput({ ...input, bio: e.target.value })}
                        className="w-full h-[200px] px-3 py-2 border rounded-2xl focus:outline-none focus:ring focus:border-blue-500 text-black-600 mt-1 resize-none" />
                </aside>
            </div>
        </section>
    )
}

export default Settings