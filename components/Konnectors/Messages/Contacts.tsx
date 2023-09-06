import { ReactNode } from "react";
import Image from "next/image";

type Props = {
    title: string;
    searchBar: ReactNode;
    contactList: Array<any>
}

const Contacts = ({ title, searchBar, contactList }: Props) => {
    return (
        <aside className="w-full h-full max-h-[calc(100vh-94px)] bg-white-300 rounded-[20px] lg:p-4 p-2 overflow-auto flex justify-start items-start flex-col gap-3 hide-scrollbar" >
            <h3 className="text-[20px] font-medium text-black-500 capitalize lg:block hidden" >{title}</h3>
            <div className="w-full lg:block hidden" >
                {searchBar}
            </div>
            {
                contactList?.map((con: any, index: number) => <button key={index} className="w-full grid lg:grid-cols-[1fr,4fr] justify-center items-center p-1 lg:shadow-light lg:border-[1px] border-gray-200 rounded-full group" >
                    <div className="w-full" >
                        <div className="w-[40px] h-[40px] rounded-full overflow-hidden relative" >
                            <Image src={"/chat.jpg"} alt="" fill sizes="" className="object-cover" />
                        </div>
                    </div>
                    <div className="w-full h-[40px] overflow-hidden transition-all duration-300 group-hover:scale-[1.03] lg:flex hidden justify-center items-start flex-col" >
                        <strong className="font-semibold text-[14px] text-brand-primary whitespace-nowrap text-left" >Retired, Inc.</strong>
                        <p className="text-[12px] text-brand-primary text-left" >Hi, I’d like to know more about...</p>
                    </div>
                </button>)
            }
        </aside>
    )
}

export default Contacts