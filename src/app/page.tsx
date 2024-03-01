"use server";

import Page1 from "./components/Page1/Page";
import Page2 from "./components/page2/Page2";
import Page3 from "./components/page3/Page3";

export default async function Home() {
  console.log("server components");
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-10 bg-slate-100"
      dir="rtl"
    >
      <div className="main  w-full h-[400px] p-2 ">
        <div className="box-title flex justify-between items-center border rounded-md p-2 mx-2">
          <div className="name text-lg">امیرحسین کریمی</div>
          <div className="detail gap-2 flex-col flex">
            <div className="city">شهر: تهران</div>
            <a className="phone" href="tel:+989391470427">
              شماره تماس: 09391470427
            </a>
            <div className="email">amirhosein.karimi@ut.ac.ir</div>
          </div>
        </div>
        <Page1 />
        <Page3 />
        {/* <Page1> */}
        {/* <Page2 /> */}
        {/* </Page1> */}
      </div>
    </main>
  );
}
