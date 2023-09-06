"use client"

import Contacts from "@/components/Konnectors/Messages/Contacts"
import InputField from "@/components/shared/InputField"
import { useState } from "react";

const Messages = () => {
    const [input, setInput] = useState("");
    return (
        <section className="w-full h-full grid lg:grid-cols-[300px,calc(100%-316px)] grid-cols-[70px,calc(100%-86px)] gap-4" >
            <Contacts
                title="Messaging"
                searchBar={<InputField
                    placeHolder={"Search here..."}
                    id="Username"
                    type="text"
                    name="username"
                    value={input}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
                    required
                    inputStyle={"rounded-full w-full"}
                />}
                contactList={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
            />
            <aside className="w-full bg-white-300 rounded-[20px]" >

            </aside>
        </section>
    )
}

export default Messages