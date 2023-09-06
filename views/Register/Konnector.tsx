"use client"
import { FormEvent, Fragment, useState } from "react";
import Wrapper from "@/components/shared/Wrapper";
import InputField from "@/components/shared/InputField";
import Button from "@/components/shared/Button";
import Image from "next/image";
import { BsArrowRightCircleFill, BsArrowRight } from "react-icons/bs";



const features = [
    "No costs/hidden fees",
    "Engage on YOUR terms",
    "Protect personal information",
    "Personalized & catered for YOU ",
];

const Vendor = () => {
    const [Input, setInput] = useState({
        firstName: "",
        lastName: "",
        companyEmail: "",
        companyName: "",
        location: "",
        phone: "",
        password: "",
        rPassword: "",
    });


    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;
        setInput({
            ...Input,
            [name]: value
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    };

    return (
        <Wrapper
            id="SignUp_Vendor"
            outerContainerStyle="py-16 bg-[url('/Login/bg.jpg')] bg-center bg-cover bg-no-repeat bg-white-600 lg:-mt-[120px] -mt-[70px] relative"
            innerContainerStyle="grid lg:grid-cols-2 gap-16 justify-center items-center lg:pt-[120px] pt-[70px]">
            <form onSubmit={handleSubmit} className="w-full backdrop:flex justify-center items-start flex-col m-auto">
                <div className="bg-white-300 rounded-xl md:p-6 p-4 ">
                    <div className="w-full flex items-center justify-center gap-2">
                        <Image
                            src={"/simple-logo.svg"}
                            className="object-fill"
                            alt="Konnect.io logo"
                            width={60}
                            height={60}
                            sizes=""
                        />
                        <h3 className="md:text-[18px] text-[14px] font-medium text-black-600 mt-2">Please enter the following information.</h3>
                    </div>
                    <div>
                        <div className="flex flex-row gap-4">
                            <InputField label="First name" id="firstName" type="text" name="firstName" value={Input?.firstName} onChange={handleInput} outerContainerStyle="mt-4 w-[50%]"  inputStyle="w-[100%]" required />
                            <InputField label="Last name" id="lastName" type="text" name="lastName" value={Input?.lastName} onChange={handleInput} outerContainerStyle="mt-4 w-[50%]"  inputStyle="w-[100%]" required />
                        </div>
                        <InputField label="Company email" id="companyEmail" type="text" name="companyEmail" value={Input?.companyEmail} onChange={handleInput} inputStyle="w-[100%]"  outerContainerStyle="mt-4 w-[50%]" required />
                        <div className="flex flex-row gap-4">
                            <InputField label="Company name" id="companyName" type="text" name="companyName" value={Input?.companyName} onChange={handleInput} inputStyle="w-[100%]"  outerContainerStyle="mt-4 w-[50%]" required />
                            <InputField label="HQ location" id="location" type="text" name="location" value={Input?.location} onChange={handleInput} inputStyle="w-[100%]"  outerContainerStyle="mt-4 w-[50%]" required />
                        </div>
                        <InputField label="Phone number" id="phone" type="number" name="phone" value={Input?.phone} onChange={handleInput} inputStyle="w-[100%]"  outerContainerStyle="mt-4 w-[50%]" required />
                        <InputField label="Unique password" id="password" type="password" name="password" value={Input?.password} onChange={handleInput} inputStyle="w-[100%]"  outerContainerStyle="mt-4 w-[50%]" required />
                        <InputField label="Retype password" id="rPassword" type="password" name="rPassword" value={Input?.rPassword} onChange={handleInput} inputStyle="w-[100%]"  outerContainerStyle="mt-4 w-[50%]" required />
                    </div>
                    <Button
                        style="bg-brand-primary font-medium m-auto mt-8 md:text-[16px] text-[14px]"
                        onClick={() => { }}
                        text="Get Konnected"
                        icon={<BsArrowRight className="text-2xl text-white-600 rounded-full" />}
                        type="submit"
                    />
                </div>
            </form>

            <aside className="w-full flex flex-col items-start justify-start md:gap-5 gap-4 md:pt-10">
                <h1 className="md:text-[42px] text-[32px] font-semibold text-black-500">Yup, that’s all we need. You’re done.</h1>
                <h3 className="md:text-[30px] text-[16px] font-medium text-brand-primary">Benefits of being a Konnector?</h3>
                <div className="flex justify-start items-start flex-col md:gap-4 gap-3">
                    {features?.map((item: string, index: number) => (
                        <div
                            key={index} className="w-full flex items-center justify-start md:gap-4 gap-2">
                            <BsArrowRightCircleFill className="md:text-2xl text-xl text-brand-primary" />
                            <p className="md:text-lg text-[16px] text-brand-primary">{item}</p>
                        </div>
                    ))}
                </div>
            </aside>
        </Wrapper>
    );
};

export default Vendor;
