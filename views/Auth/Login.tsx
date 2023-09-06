"use client"
import { FormEvent, Fragment, useState } from "react";
import Wrapper from "@/components/shared/Wrapper";
import InputField from "@/components/shared/InputField";
import Button from "@/components/shared/Button";
import SocialMedia from "@/components/shared/SocialMedia";
import { ILogin } from "@/types/types";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const [Input, setInput] = useState<ILogin>({
    username: "",
    password: ""
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
    e.preventDefault();
    router.push("/konnector/explore")
  };

  return (
    <Fragment>
      <Wrapper
        id="Login_Konnector"
        outerContainerStyle="lg:h-[calc(100vh+90px)] h-screen bg-[url('/Login/bg.png')] bg-center bg-cover bg-no-repeat bg-white-600 md:mt-[-95px] mt-[-60px]"
        innerContainerStyle="flex justify-center items-center"
      >
        <form onSubmit={handleSubmit} className="lg:w-[50%] w-[80%] backdrop:flex justify-center items-start flex-col" >
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-black-500 md:text-[56px] text-[30px] md:leading-[70px] leading-[40px] font-semibold">Welcome back</h1>
            <p className="text-black-300 md:text-[20px] text-[14px] text-center mt-6">Login or sign up to start Konnecting.</p>
            <div className="md:mt-8 mt-4 md:w-[70%] w-full">
              <InputField
                label="Username"
                id="Username"
                type="text"
                name="username"
                value={Input?.username}
                onChange={handleInput}
                inputStyle="w-[100%]"
                required
              />
              <InputField
                label="Password"
                id="password"
                type="password"
                name="password"
                value={Input?.password}
                onChange={handleInput}
                outerContainerStyle="mt-4"
                inputStyle="w-[100%]"
                required
              />
            </div>
            <Button
              type={"submit"}
              style="bg-brand-primary my-6 rounded-full md:text-[16px] text-[14px]"
              text="Konnect"
              onClick={() => { }}
            />
            <SocialMedia />
          </div>
        </form>
      </Wrapper>
    </Fragment>
  );
};

export default Login;
