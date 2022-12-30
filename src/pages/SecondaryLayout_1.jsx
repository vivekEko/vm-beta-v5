import React, { useEffect, useState } from "react";
import Header_2 from "../components/globalComponents/Header_2";
// assets
import frame from "../assets/img/secondaryLayoutPage/frame.png";
import { useParams } from "react-router-dom";
// recoil
import { useRecoilState } from "recoil";
import currentCallPathAtom from "../recoil/helpers/currentCallPathAtom";
import axios from "axios";
import { VITE_BASE_LINK } from "../base_link/BaseLink";

const SecondaryLayout_1 = () => {
  // global variables
  const [currentCallPath] = useRecoilState(currentCallPathAtom);
  // Local variables
  const [activeTab, setActiveTab] = useState(0);
  const [pageData, setPageData] = useState(null);

  const parameters = useParams();

  // const pageData = {
  //   banner: {
  //     heading: "Sri Ramanuja Public and Educational Charitable Trust ",
  //     image: "",
  //   },

  //   content: {
  //     title: "Sri Vanamahachala Vidhya Peetam",
  //     sub_title: "Vedha Patasala at Srirangam",
  //     image: "",
  //   },

  //   tab_data: [
  //     {
  //       name: "Details",
  //       content: [
  //         {
  //           data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quo ipsam accusantium molestias nobis perspiciatis sapiente ipsa eveniet dolore cupiditate at adipisci non omnis expedita, qui error repudiandae magnam enim quisquam tempora reprehenderit quasi illo praesentium. Sit nam non distinctio exercitationem, quaerat reiciendis illo molestias. Deleniti ipsum odit cum laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quo ipsam accusantium molestias nobis perspiciatis sapiente ipsa eveniet dolore cupiditate at adipisci non omnis expedita, qui error repudiandae magnam enim quisquam tempora reprehenderit quasi illo praesentium. Sit nam non distinctio exercitationem, quaerat reiciendis illo molestias. Deleniti ipsum odit cum laudantium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quo ipsam accusantium molestias nobis perspiciatis sapiente ipsa eveniet dolore cupiditate at adipisci non omnis expedita, qui error repudiandae magnam enim quisquam tempora reprehenderit quasi illo praesentium. Sit nam non distinctio exercitationem, quaerat reiciendis illo molestias. Deleniti ipsum odit cum laudantium.",
  //           type: "text",
  //         },
  //         {
  //           data: "/image-path",
  //           type: "image",
  //         },

  //         {
  //           data: "   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur labore mollitia ratione autem delectus dolor sint, voluptatibus unde voluptas a. Ad iste rerum necessitatibus, quis id a voluptates error! A illo labore, consequatur blanditiis odit quos nihil minus quod porro, doloribus asperiores, iste provident possimus error accusantium ratione molestias quas.",
  //           type: "image",
  //         },
  //       ],
  //     },

  //     {
  //       name: "History",
  //       content: [
  //         {
  //           data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quo ipsam accusantium molestias nobis perspiciatis sapiente ipsa eveniet dolore cupiditate at adipisci non omnis expedita, qui error repudiandae magnam enim quisquam tempora reprehenderit quasi illo praesentium. Sit nam non distinctio exercitationem, quaerat reiciendis illo molestias. Deleniti ipsum odit cum laudantium. e ipsa eveniet dolore cupiditate at adipisci non omnis expedita, qui error repudiandae magnam enim quisquam tempora reprehenderit quasi illo praesentium. Sit nam non distinctio exercitationem, quaerat reiciendis illo molestias. Deleniti ipsum odit cum laudantium.",
  //           type: "text",
  //         },
  //         {
  //           data: "/image-path",
  //           type: "image",
  //         },

  //         {
  //           data: "   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur labore mollitia ratione autem delectus dolor sint, voluptatibus unde voluptas a. Ad iste rerum necessitatibus, quis id a voluptates error! A illo labore, consequatur blanditiis odit quos nihil minus quod porro, doloribus asperiores, iste provident possimus error accusantium ratione molestias quas.",
  //           type: "image",
  //         },
  //       ],
  //     },

  //     {
  //       name: "Uthsavams",
  //       content: [
  //         {
  //           data: "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quo ipsam accusantium molestias nobis perspiciatis sapiente ipsa eveniet dolore cupiditate at adipisci non omnis expedita, qui error repudiandae magnam enim quisquam tempora reprehenderit quasi illo praesentium. Sit nam non distinctio exercitationem, quaerat reiciendis illo molestias. Deleniti ipsum odit cum laudantium.Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quo ipsam accusantium molestias nobis perspiciatis sapiente ipsa eveniet dolore cupiditate at adipisci non omnis expedita, qui error repudiandae magnam enim quisquam tempora reprehenderit quasi illo praesentium. Sit nam non distinctio exercitationem, quaerat reiciendis illo molestias. Deleniti ipsum odit cum laudantium.",
  //           type: "text",
  //         },
  //         {
  //           data: "/image-path",
  //           type: "image",
  //         },

  //         {
  //           data: "   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur labore mollitia ratione autem delectus dolor sint, voluptatibus unde voluptas a. Ad iste rerum necessitatibus, quis id a voluptates error! A illo labore, consequatur blanditiis odit quos nihil minus quod porro, doloribus asperiores, iste provident possimus error accusantium ratione molestias quas.",
  //           type: "image",
  //         },
  //       ],
  //     },

  //     {
  //       name: "How to Reach",
  //       content: [
  //         {
  //           data: "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quo ipsam accusantium molestias nobis perspiciatis sapiente ipsa eveniet dolore cupiditate at adipisci non omnis expedita, qui error repudiandae magnam enim quisquam tempora reprehenderit quasi illo praesentium. Sit nam non distinctio exercitationem, quaerat reiciendis illo molestias. Deleniti ipsum odit cum laudantium.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quo ipsam accusantium molestias nobis perspiciatis sapiente ipsa eveniet dolore cupiditate at adipisci non omnis expedita, qui error repudiandae magnam enim quisquam tempora reprehenderit",
  //           type: "text",
  //         },
  //         {
  //           data: "/image-path",
  //           type: "image",
  //         },

  //         {
  //           data: "   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur labore mollitia ratione autem delectus dolor sint, voluptatibus unde voluptas a. Ad iste rerum necessitatibus, quis id a voluptates error! A illo labore, consequatur blanditiis odit quos nihil minus quod porro, doloribus asperiores, iste provident possimus error accusantium ratione molestias quas.",
  //           type: "image",
  //         },
  //       ],
  //     },
  //   ],
  // };

  // useEffect(() => {
  //   console.log("layout 1 parameters changed:");
  //   console.log(parameters);
  // }, [parameters]);

  useEffect(() => {
    axios
      .post(VITE_BASE_LINK + parameters?.call_link, {
        id: parameters?.page_id,
      })
      .then(function (response) {
        console.log(response?.data);
        setPageData(response?.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [parameters]);

  return (
    <section>
      {/* banner */}
      <div
        className="bg-[#D9D9D9] bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            "url(" + VITE_BASE_LINK + pageData?.banner?.image + ")",
        }}
      >
        <Header_2 />

        <div className="w-[90%] mx-auto">
          <h1 className="pb-5 md:pb-8  pt-60  uppercase text-3xl md:text-4xl xl:text-5xl lg:w-[70%] xl:w-[60%] 2xl:w-[50%]   font-bold text-[#292929] ">
            {pageData?.banner?.heading}
          </h1>
        </div>
      </div>

      {/* content */}
      <div>
        <div className="  pt-10 md:pt-20 ">
          {/* content title */}
          <div className="w-[90%] mx-auto">
            <h2 className="text-[#AB0000] uppercase text-2xl md:text-3xl xl:text-4xl font-semibold">
              {pageData?.content?.title}
            </h2>
            <h3 className="text-[#292929] text-lg md:text-xl xl:text-2xl">
              {pageData?.content?.sub_title}
            </h3>
          </div>

          {/* content flex */}
          <div className=" mt-10 flex flex-col md:flex-row gap-5 md:w-[95%] ml-auto pb-16 ">
            <div className="md:w-[30%] w-[90%] mx-auto">
              <img src={frame} alt="..." className="w-[50%] md:w-full " />
            </div>

            <div className="md:w-full ">
              <div className="bg-[#FF9D80] flex md:rounded-bl-3xl">
                {pageData?.tab_data?.map((data, index) => {
                  return (
                    <button
                      key={index}
                      onClick={() => setActiveTab(index)}
                      className={` ${
                        activeTab === index ? "bg-[#FF5A29]" : ""
                      } ${
                        activeTab === index && index === 0
                          ? "md:rounded-bl-3xl"
                          : ""
                      } p-2 text-white  flex-1 sm:text-lg transition-all`}
                    >
                      {data?.name}
                    </button>
                  );
                })}
              </div>
              <div className="font-caladea sm:text-lg xl:text-xl pt-10 w-[90%] mx-auto md:w-full ">
                <p className="  md:w-[93%]">
                  {pageData?.tab_data[activeTab]?.content[0]?.data}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondaryLayout_1;
