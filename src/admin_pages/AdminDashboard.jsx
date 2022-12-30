import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// assets
import editIcon from "../assets/img/admin/dashboard/edit_icon.svg";
import optionsIcon from "../assets/img/admin/dashboard/options_icon.svg";
import { VITE_BASE_LINK } from "../base_link/BaseLink";
import Admin_header from "../components/admin/admin_global_components/Admin_header";

const AdminDashboard = () => {
  const [selectedPage, setSelectedPage] = useState(null);
  const [homePageData, setHomePageData] = useState(null);

  useEffect(() => {
    let formdata = new FormData();
    // formdata.append("token", localStorage.getItem("token"));
    // formdata.append("product_id", productApiData?.product_id);
    // formdata.append("size", productApiData?.size[selectedSize]);
    axios.post(VITE_BASE_LINK + "adminDashboard").then((response) => {
      setHomePageData(response?.data);
      console.log(response?.data);
    });
  }, []);

  // const homePageData = {
  //   title: ["Page title", " Side pages", "Status", "Actions"],
  //   all_page_data: [
  //     {
  //       page_name: "Home Page",
  //       page_link: "/admin/home_edit",
  //     },
  //     {
  //       page_name: "Vanamamalai temple",
  //       sub_pages: 3,
  //       status: "Published",
  //       page_link: "/admin/home_edit",
  //     },
  //     {
  //       page_name: "Other temple",
  //       sub_pages: 3,
  //       status: "Draft",
  //       page_link: "/admin/home_edit",
  //     },
  //     {
  //       page_name: "Branches",
  //       sub_pages: 3,
  //       status: "Archived",
  //       page_link: "/admin/home_edit",
  //     },
  //     {
  //       page_name: "Ponnadikkal Jeeyar",
  //       sub_pages: 3,
  //       status: "Published",
  //       page_link: "/admin/home_edit",
  //     },
  //     {
  //       page_name: "Jeeyars",
  //       sub_pages: 1,
  //       status: "Published",
  //       page_link: "/admin/home_edit",
  //     },
  //     {
  //       page_name: "Education",
  //       sub_pages: 1,
  //       status: "Published",
  //       page_link: "/admin/home_edit",
  //     },
  //     {
  //       page_name: "Gallery",
  //       sub_pages: 1,
  //       status: "Published",
  //       page_link: "/admin/home_edit",
  //     },
  //   ],
  // };
  return (
    <div className="bg-[#FFF6EB] ">
      <Admin_header />
      <div className="px-16 ">
        <div className="grid grid-cols-4 p-5 items-center pt-20 font-inter sticky top-[107px] bg-[#FFF6EB] z-[10060]">
          {homePageData?.title?.map((data, index) => {
            return (
              <h1
                key={index}
                className={`font-semibold  ${
                  data === "Page title" ? "" : "text-center"
                }
                
                ${data === "Status" ? "max-w-[200px] mx-auto" : ""}
                `}
              >
                {data}
              </h1>
            );
          })}
        </div>

        <div className="pb-16 ">
          {homePageData?.all_page_data?.map((data, index) => {
            return (
              <div
                key={index}
                className="grid grid-cols-4  items-center p-5 my-5 font-inter bg-white z-10"
              >
                <Link to={data?.page_link}>
                  <h1 className="text-[#5A5A5A] font-semibold  ">
                    {data?.page_name}
                  </h1>
                </Link>
                <h1 className="font-semibold  text-center">
                  {data?.sub_pages}
                </h1>
                <h1
                  className={` mx-auto  ${
                    data?.status === "P"
                      ? "bg-[#29A654] "
                      : data?.status === "A"
                      ? "bg-[#FFA451]"
                      : ""
                  }  text-center text-white p-2 px-5 w-[150px] rounded-full`}
                >
                  {data?.status === "P" ? "Published" : "Archived"}
                </h1>
                <div className="flex justify-center gap-5">
                  <div>
                    <Link to={data?.page_link}>
                      <img
                        src={editIcon}
                        alt="edit"
                        className="cursor-pointer"
                      />
                    </Link>
                  </div>

                  {data?.page_name !== "Home Page" && (
                    <div
                      className="relative"
                      onClick={() => {
                        if (selectedPage === data?.page_name) {
                          setSelectedPage(null);
                        } else {
                          setSelectedPage(data?.page_name);
                        }
                      }}
                    >
                      <img
                        src={optionsIcon}
                        alt="options"
                        className="cursor-pointer z-0"
                      />

                      <div
                        className={`fixed inset-0 bg-transarent ${
                          selectedPage === data?.page_name ? "block" : "hidden"
                        } z-[10000] `}
                      ></div>

                      <div
                        className={` ${
                          selectedPage === data?.page_name ? "block" : "hidden"
                        } absolute right-0 top-[110%] bg-white shadow-lg z-[10050] space-y-2 `}
                      >
                        <h1 className="p-3 px-5 cursor-pointer hover:bg-slate-100">
                          Published
                        </h1>
                        <h1 className="p-3 px-5 cursor-pointer hover:bg-slate-100">
                          Archived
                        </h1>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
