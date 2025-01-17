import React from "react";
import Image from "next/image";
import Logo from "../../assets/Vlogo.d83a8feb5370b0b7c52a.png";

export default function Footer() {
return (
    <footer className="md:min-h-screen w-full flex flex-col justify-between gap-20 md:px-20 px-10 pt-10 pb-5 bg-mainblue text-white">
        <div>
            <Image src={Logo} alt="AMURoboclub Logo" className="h-fit md:w-[30%] w-[80%]" />
        </div>
        <div className="flex md:flex-row flex-col-reverse justify-between font-medium text-sm">
            <div className="flex md:gap-20 gap-10 flex-wrap md:pt-0 pt-10">
                <div className="flex flex-col gap-5">
                    <a href="/about">About Us</a>
                    <a href="/about">About Us</a>
                    <a href="/about">About Us</a>
                </div>
                <div className="flex flex-col gap-5">
                    <a href="/about">About Us</a>
                    <a href="/about">About Us</a>
                    <a href="/about">About Us</a>
                </div>
                <div className="flex flex-col gap-5">
                    <a href="/about">About Us</a>
                    <a href="/about">About Us</a>
                    <a href="/about">About Us</a>
                </div>
                <div className="flex flex-col gap-5">
                    <a href="/about">About Us</a>
                    <a href="/about">About Us</a>
                    <a href="/about">About Us</a>
                </div>
            </div>
            <div style={{ maxWidth: "100%", overflow: "hidden", color: "red" }}>
                <div id="my-map-display" className="h-[40vh] md:w-[30vw] w-[80vw] max-w-full">
                    <iframe
                        style={{ height: "100%", width: "100%", border: 0 }}
                        frameBorder="0"
                        src="https://www.google.com/maps/embed/v1/place?q=amu+roboclub&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                    ></iframe>
                </div>
            </div>
            <div className="flex md:flex-col items-center justify-between md:justify-start md:border-0 border-b-[1px] border-gray-400 pb-5 md:pb-0 mb-10">
                <a className="h-[2.7rem] flex items-center gap-5 border-2 border-white hover:bg-white hover:text-mainblue transition-colors duration-200 px-5 py-1 cursor-pointer rounded-full font-medium text-[1.15rem]">
                    Contact
                </a>
                <div className="flex items-center gap-5 md:mt-5">
                    <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:bg-white transition-all duration-200 hover:rounded-full p-2 group"
                    >
                        <svg
                            className="block w-6 h-6 fill-current group-hover:fill-mainblue"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            role="img"
                        >
                            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                            <title>LinkedIn</title>
                        </svg>
                    </a>
                    <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:bg-white transition-all duration-200 hover:rounded-full p-2 group"
                    >
                        <svg
                            className="block w-6 h-6 fill-current group-hover:fill-mainblue"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            role="img"
                        >
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                            <title>Instagram</title>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        <div className="flex md:flex-row flex-col justify-center text-[1rem] gap-5 md:mt-0 border-t-[1px] border-gray-400 pt-10 ">
            <p>&copy; 2024 AMURoboclub | Developed by Web Developers Team 2024-2025</p>
            {/* <p>
                <a href="/privacy-policy">PRIVACY POLICY</a>
            </p>
            <p>
                <a href="/terms-of-service">TERMS OF SERVICE</a>
            </p>
            <p>
                <a href="/contact">CONTACT US</a>
            </p> */}
        </div>
    </footer>
);
}
