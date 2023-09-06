"use client"
import { FormEvent, Fragment, useState } from "react";
import Wrapper from "@/components/shared/Wrapper";
import InputField from "@/components/shared/InputField";
import Button from "@/components/shared/Button";
import { BsArrowRight, BsArrowRightCircleFill } from "react-icons/bs";
import Dialogue from "@/components/shared/Dialogue";
import Image from "next/image";



const features = [
    {
        original: "Unlimited, organic source of ", design: "self-qualifying leads"
    },
    {
        original: "exposure - no paid advertising", design: "Unbiased "
    },
    {
        original: "Company-wide ", design: "KPI tracking"
    },
    {
        original: "discovery, let users come to YOU", design: "Redefine "
    },
];

const Vendor = () => {
    const [isMenu, setMenu] = useState<boolean>(false)
    const [isDialogue, setDialogue] = useState<boolean>(false)
    const [Input, setInput] = useState({
        konnectID: ""
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
        <Fragment>
            <Wrapper
                id="Login_Vendor"
                outerContainerStyle="lg:h-[calc(100vh+90px)] lg:py-0 py-16 bg-[url('/SignUp/bg.png')] bg-center bg-cover bg-no-repeat bg-white-600 lg:-mt-[120px] -mt-[70px] relative"
                innerContainerStyle="grid md:grid-cols-2 gap-12 justify-center items-center lg:pt-[120px] pt-[70px]"
            >
                <aside className="w-full flex flex-col items-start justify-start lg:gap-6 gap-4">
                    <div className="w-full flex items-center justify-start lg:gap-4 gap-2">
                        <BsArrowRightCircleFill className="lg:text-[28px] text-[16px] text-brand-primary" />
                        <p className="lg:text-[26px] text-[14px] font-light lg:leading-[39px] leading-[20px] text-brand-tertiary">{features[0].original} <span className="lg:text-[26px] text-[14px] lg:block inline text-brand-primary_light font-semibold ">{features[0].design}</span> </p>
                    </div>
                    <div className="w-full flex items-center justify-start lg:gap-4 gap-2">
                        <BsArrowRightCircleFill className="lg:text-[28px] text-[16px] text-brand-primary" />
                        <p className="lg:text-[26px] text-[14px] text-brand-primary_light font-semibold lg:leading-[39px] leading-[20px]">{features[1].design}<span className="lg:text-[26px] text-[14px] text-brand-tertiary font-light">{features[1].original}</span></p>
                    </div>
                    <div className="w-full flex items-center justify-start lg:gap-4 gap-2">
                        <BsArrowRightCircleFill className="lg:text-[28px] text-[16px] text-brand-primary" />
                        <p className="lg:text-[26px] text-[14px] font-light lg:leading-[39px] leading-[20px] text-brand-tertiary"> {features[2].original} <span className="lg:text-[26px] text-[14px] text-brand-primary_light font-semibold">{features[2].design}</span> </p>
                    </div>
                    <div className="w-full flex items-center justify-start lg:gap-4 gap-2">
                        <BsArrowRightCircleFill className="lg:text-[28px] text-[16px] text-brand-primary" />
                        <p className="lg:text-[26px] text-[14px] font-semibold text-brand-primary_light lg:leading-[39px] leading-[20px] ">{features[3].design}<span className="lg:text-[26px] text-[14px] text-brand-tertiary font-light">{features[3].original}</span> </p>
                    </div>
                </aside>

                <form onSubmit={handleSubmit} className="w-full flex justify-center items-center flex-col gap-8" >
                    <h2 className="text-brand-primary lg:text-[28px] text-[16px] lg:leading-[39px] leading-[20px] font-semibold text-center">Enter your 16 digit unique ID issued by Konnect.io</h2>
                    <div className="lg:w-[85%] w-full flex justify-center items-center flex-col gap-2">
                        <InputField
                            label=""
                            id="konnectID"
                            type="text"
                            name="konnectID"
                            value={Input.konnectID}
                            onChange={handleInput}
                            inputStyle={"bg-blue-300 bg-opacity-25 w-[100%] "}
                            required
                        />
                        <span className="text-brand-primary text-[14px] w-[100px]">What this?</span>
                    </div>
                    <Button
                        type={"submit"}
                        style="bg-brand-primary rounded-full md:text-[16px] text-[14px]"
                        text="Get Konnected"
                        onClick={() => {
                            setDialogue(true);
                            setMenu(!isMenu);
                        }}
                        icon={<BsArrowRight className="lg:text-xl text-[16px] text-white-600" />}
                    />
                </form>
            </Wrapper>
            <Dialogue show={isDialogue} onClose={() => setDialogue(false)} style="bg-brand-primary_light max-w-[800px] flex justify-center items-center flex-col py-6" >
                <div className="">
                    <h2 className="lg:text-[30px] text-[16px] mb-2 text-white-600 mt-1">Verify that the information below is correct</h2>
                    <p className="lg:text-[10px] text-[10px] lg:max-w-[500px] max-w-[270px] m-auto text-white-600">Vendors are only allowed one profile, so please ensure the information below is valid and correct. Please contact Konnect.io support of this isn’t your company.</p>

                    <div className="lg:min-w-[700px] max-w-[300px] m-auto bg-white-600 rounded-2xl py-4 px-3 mt-4 text-black-400">
                        <div className="lg:flex block">
                            <div className="min-w-[60%] text-left ">
                                <h2 className="lg:text-[20px] text-[16px] font-bold text-black-400">Company name: <span className="text-[10px] text-brand-primary">(edit)</span></h2>
                                <h2 className="lg:text-[20px] text-[16px] underline">Axis Security</h2>
                                <h2 className="lg:text-[20px] text-[16px] font-bold text-black-400 lg:mt-6 mt-3">Head Quarter Location:<span className="text-[10px] text-brand-primary">(edit)</span></h2>
                                <ul>
                                    <li className="lg:text-[12px] text-[8px] underline">North America</li>
                                    <li className="lg:text-[12px] text-[8px] underline">7700 Windrose Ave, Suite 300</li>
                                    <li className="lg:text-[12px] text-[8px] underline">Plano, Texas 75024</li>
                                </ul>
                            </div>
                            <div className="min-w-[40%] text-left lg:mt-0 mt-6">
                                <h2 className="lg:text-[20px] text-[16px] font-bold text-black-400">Company name: <span className="text-[10px] text-brand-primary">edit</span></h2>
                                <Image src="/Company/axislogo1.png" alt="" width={200} height={200} sizes="" className="object-cover mt-4" />
                            </div>
                        </div>
                        <div className="min-w-[100%] text-left lg:mt-6 mt-3">
                            <h2 className="lg:text-[20px] text-[14px] font-bold text-black-400">LinkedIn URL: <span className="text-[10px] text-brand-primary">(edit)</span> <span className="lg:text-[12px] text-[8px] underline">https://www.linkedin.com/company/axis-security</span></h2>
                        </div>
                    </div>
                    <Button
                        style="bg-brand-primary font-medium lg:mt-6 mt-3 m-auto rounded-full md:text-[16px] text-[14px]"
                        onClick={() => { }}
                        text="Get Konnected"
                        icon={<BsArrowRight className="md:text-2xl text-[16px] text-white-600" />}
                    />
                </div>
            </Dialogue>
        </Fragment>
    )
};

export default Vendor;
