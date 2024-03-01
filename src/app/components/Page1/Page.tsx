"use clinet";

import Page2 from "../page2/Page2";

const Page1 = () => {
  return (
    <div className=" h-[350px] p-2 flex flex-col gap-3 ">
      <div className="box border rounded-md p-2">
        <div className="text-lg text-sky-500">تحصیلات</div>
        <div className="p1">
          کارشناسی مهندسی باغبانی-دانشگاه تهران(پردیس ابوریحان)-1397
        </div>
        <div className="p2">
          کارشناسی ارشد-گل و گیاهان زینتی-دانشگاه تهران(پردیس ابوریحان)-1402
        </div>
      </div>

      <Page2 />
    </div>
  );
};

export default Page1;
