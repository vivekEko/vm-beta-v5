import React, { useEffect } from "react";
// components
import Header from "../globalComponents/Header";
// assets
import scroll_icon from "../../assets/img/landingPage/scroll_icon.png";
import youtube_icon from "../../assets/img/landingPage/youtube_icon.png";
import file_icon from "../../assets/img/landingPage/file_icon.png";
import { HashRouter, Link } from "react-router-dom";
import { VITE_BASE_LINK } from "../../base_link/BaseLink";

const Section = (props) => {
  return (
    <div className="">
      {props?.apiData?.layout === "hero" && (
        <section id={props?.apiData?.seq_no} className=" overflow-y-hidden ">
          <div className="bg-hero-image    md:h-screen bg-fixed bg-center bg-no-repeat bg-cover border-b-[14px] border-b-[#942200] ">
            <div className="h-full flex flex-col justify-between items-center">
              <Header />
              <div className="flex justify-between flex-col h-full">
                <div className="mt-16 w-[90%] mx-auto flex-1">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl uppercase text-center font-medium bg-gradient-to-r to-[#630000] from-[#1400FF]  stroke-white stroke-2 bg-clip-text text-transparent text-stroke   md:min-h-[70px] xl:min-h-[90px] ">
                    {props?.apiData?.h1}
                  </h1>
                  <h2 className="text-white text-[1.4rem] sm:text-[1.6rem] lg:text-3xl xl:text-5xl text-center mt-3 md:mt-5 uppercase">
                    {props?.apiData?.h2}
                  </h2>

                  <p
                    className="font-caladea sm:text-lg xl:text-xl   text-center mt-5 text-white sm:max-w-[80%] md:max-w-[70%]
     lg:max-w-[60%] xl:max-w-[50%] mx-auto"
                  >
                    {props?.apiData?.p}
                  </p>
                </div>

                <div className="flex-1 flex justify-center items-end">
                  {props?.apiData?.img?.length > 0 &&
                    props?.apiData?.img?.map((imgData, imgIndex) => {
                      return (
                        <img
                          key={imgIndex}
                          src={VITE_BASE_LINK + imgData}
                          alt={imgData}
                          className="mx-auto w-full max-w-[500px] 2xl:max-w-[550px]"
                        />
                      );
                    })}
                </div>
              </div>

              <a href="/home#landing_page_2">
                <button className="absolute bottom-52 sm:bottom-5 md:bottom-20 right-5 ">
                  <img src={scroll_icon} alt="scroll" className="w-[30px] " />
                </button>
              </a>
            </div>
          </div>
        </section>
      )}

      {/*  */}

      {props?.apiData?.layout === "event" && (
        <section
          id="landing_page_2"
          style={{ backgroundColor: props?.apiData?.background_color }}
          className={"  pt-20 border-b-[12px] border-[#942200]  min-h-screen"}
        >
          <div className="flex flex-col gap-5 justify-between h-full">
            <div>
              <h1 className="uppercase text-[#191689] text-[1.4rem] sm:text-[1.6rem] lg:text-3xl xl:text-5xl  font-semibold text-center">
                {props?.apiData?.h1}
              </h1>
              <h2 className="uppercase text-[#191689] text-xl text-center my-5 w-[80%] mx-auto  sm:text-lg lg:text-xl xl:text-2xl ">
                {props?.apiData?.h2}
              </h2>
            </div>

            <div>
              <img
                src={VITE_BASE_LINK + props?.apiData?.img[0]}
                alt=""
                className="mx-auto"
              />
            </div>

            <p
              className="font-caladea pb-10 w-[80%] 
            mx-auto mb-5 sm:text-lg xl:text-xl text-justify"
            >
              {props?.apiData?.p}
            </p>
          </div>
        </section>
      )}
      {/*  */}
      {props?.apiData?.layout === "two_images" && (
        <section
          id={props?.apiData?.seq_no}
          style={{ backgroundColor: props?.apiData?.background_color }}
          className="  pt-20 border-b-[12px] border-[#942200]  md:h-screen "
        >
          <div className="flex flex-col justify-between h-full  ">
            <div>
              <h1 className="uppercase text-[#191689] text-[1.4rem] sm:text-[1.6rem] lg:text-3xl xl:text-5xl  font-semibold text-center">
                {props?.apiData?.h1}
              </h1>
              <h2 className="uppercase text-[#191689] text-xl text-center my-5 w-[80%] mx-auto  sm:text-lg lg:text-xl xl:text-2xl ">
                {props?.apiData?.h2}
              </h2>

              <p
                className="font-caladea text-center w-[80%] md:max-w-[70%]
          lg:max-w-[60%] xl:max-w-[50%] mx-auto mb-5 sm:text-lg xl:text-xl "
              >
                {props?.apiData?.p}
              </p>

              <button className="p-3 px-10 text-lg mt-20 bg-[#282626] text-white w-fit mx-auto block active:scale-95 transition-all">
                <span>READ MORE</span>
              </button>
            </div>

            <div className="mt-5 flex items-end justify-between gap-5 overflow-hidden">
              {props?.apiData?.img?.length > 0 &&
                props?.apiData?.img?.map((imgData, imgIndex) => {
                  return (
                    <div
                      key={imgIndex}
                      className={` ${
                        imgIndex > 0 ? "hidden md:block" : ""
                      }  w-full`}
                    >
                      <img
                        src={VITE_BASE_LINK + imgData}
                        alt={imgData}
                        className="w-full"
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
      )}

      {props?.apiData?.layout === "right_image" && (
        <section
          id={props?.apiData?.seq_no}
          style={{ backgroundColor: props?.apiData?.background_color }}
          className=" pt-10 flex gap-5 flex-col  justify-between md:flex-row border-b-[9px] border-[#942200]  min-h-screen"
        >
          <div className="flex justify-between flex-col  gap-5  py-20 w-full">
            <div className="">
              <h1 className="uppercase text-[#55111D] text-center md:text-left  w-[80%] mx-auto text-[1.4rem] sm:text-[1.6rem] lg:text-3xl xl:text-5xl md:font-semibold">
                {props?.apiData?.h1}
              </h1>
              <p className="font-caladea text-center md:text-left w-[80%] mx-auto mt-10 mb-5 sm:text-lg xl:text-xl">
                {props?.apiData?.p}
              </p>

              <div className="flex justify-center md:justify-start w-[80%] mx-auto ">
                <button className="p-3 px-10 text-lg mt-20 bg-[#282626] text-white w-fit  active:scale-95 transition-all">
                  READ MORE
                </button>
              </div>
            </div>

            <div className="hidden md:flex gap-5 items-start mt-5  w-[80%] mx-auto pb-5">
              <div className="">
                <a
                  href={props?.apiData?.yt_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={youtube_icon} alt="youtube" />
                  <h3 className="uppercase   sm:text-lg xl:text-xl">
                    {props?.apiData?.yt_title}
                  </h3>
                </a>
              </div>

              <a
                href={
                  VITE_BASE_LINK +
                  "fileDownload?file_name=" +
                  props?.apiData?.file_link
                }
                className="border block border-green-500"
              >
                <img src={file_icon} alt="file" className="" />
                <h3 className="uppercase   sm:text-lg xl:text-xl">
                  {props?.apiData?.file_title}
                </h3>
              </a>
            </div>
          </div>

          {/* mobile view */}
          <div className="flex gap-5  w-full">
            <div className="flex-1 pl-10 md:hidden">
              <a
                href={props?.apiData?.yt_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={youtube_icon} alt="youtube" />
                <h3 className="uppercase  sm:text-lg xl:text-xl">
                  {props?.apiData?.yt_title}
                </h3>
              </a>

              <img src={file_icon} alt="file" className="mt-5" />
              <h3 className="uppercase sm:text-lg xl:text-xl">
                {props?.apiData?.file_title}
              </h3>
            </div>
            <div className="flex-1 overflow-hidden  flex justify-end items-end ">
              {props?.apiData?.img?.map((imgData, imgIndex) => {
                return (
                  <img
                    key={imgIndex}
                    src={VITE_BASE_LINK + imgData}
                    alt={imgData}
                    className="translate-y-2 md:translate-y-5  w-full"
                  />
                );
              })}
            </div>
          </div>
        </section>
      )}

      {props?.apiData?.layout === "left_image" && (
        <section
          id={props?.apiData?.seq_no}
          style={{ backgroundColor: props?.apiData?.background_color }}
          className=" pt-10 py-20 flex flex-col-reverse gap-5 min-h-screen md:flex-row-reverse border-b-[12px] border-[#942200]  justify-between "
        >
          <div className="flex justify-between flex-col gap-5 flex-1  ">
            <div className="md:py-20">
              <h1 className="uppercase text-[#55111D] text-center md:text-left  w-[80%] mx-auto text-[1.4rem] sm:text-[1.6rem] lg:text-3xl xl:text-5xl md:font-semibold">
                {props?.apiData?.h1}
              </h1>
              <p className="font-caladea text-center w-[80%] mx-auto mt-10 mb-5 md:text-left sm:text-lg xl:text-xl">
                {props?.apiData?.p}
              </p>

              <div className="flex justify-center md:justify-start w-[80%] mx-auto ">
                <button className="p-3 px-6 bg-[#282626] text-white w-fit active:scale-95 transition-all ">
                  READ MORE
                </button>
              </div>
            </div>

            <div className="hidden md:flex gap-5 items-start mt-5  w-[80%] mx-auto pb-5">
              <div>
                <img src={youtube_icon} alt="youtube" />
                <h3 className="uppercase sm:text-lg xl:text-xl">
                  {props?.apiData?.yt_title}
                </h3>
              </div>

              <div>
                <img src={file_icon} alt="youtube" className="" />
                <h3 className="uppercase sm:text-lg xl:text-xl">
                  {props?.apiData?.file_title}
                </h3>
              </div>
            </div>

            <div className="md:hidden flex gap-5 items-start mt-5  w-[80%] mx-auto pb-5">
              <div>
                <img src={youtube_icon} alt="youtube" />
                <h3 className="uppercase sm:text-lg xl:text-xl">
                  {props?.apiData?.yt_title}
                </h3>
              </div>

              <div>
                <img src={file_icon} alt="file" className="" />
                <h3 className="uppercase sm:text-lg xl:text-xl">
                  {props?.apiData?.file_title}
                </h3>
              </div>
            </div>
          </div>

          <div className="flex gap-5 flex-1 ">
            {props?.apiData?.img?.map((imgData, imgIndex) => {
              return (
                <img
                  key={imgIndex}
                  src={VITE_BASE_LINK + imgData}
                  alt={imgData}
                  className="mx-auto w-full max-w-[500px] xl:max-w-[600px] object-contain"
                />
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
};

export default Section;
