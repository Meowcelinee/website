import Image from "next/image";

export default function Header() {
    return (
        <>
            <div className="flex justify-center items-center gap-10 bg-mantle mb-4 md:mb-5 md:py-4 md:px-3 py-3 px-2">
                <div className="">
                    <img
                        src="/images/ghpicrew.png"
                        className="rounded-full m-auto h-40 w-40"
                    />
                </div>
                <div className="">
                    <p>nyatalie</p>
                    <p>askdhjhaklsjdfhaskljdfhjkla</p>
                </div>
            </div>
        </>
    );
}
