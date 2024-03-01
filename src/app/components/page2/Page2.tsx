"use server";
const Page2 = () => {
  return (
    <div className="exprence border rounded-md p-2">
      <div className="title text-lg text-sky-500">تجربیات</div>
      <div className="box flex justify-around">
        <div className="horticulture w-[450px]">
          <div className="title underline text-lg">کشاورزی و رشته تحصیلی</div>
          <ul className="flex flex-col gap-2">
            <li className="">
              گذراندن 80 ساعت کاروزی در گلخانه گل و گیاه خاورمیانه-واقع در شهرک
              گلفام
            </li>
            <li className="">
              گذراندن 100 ساعت کارورزی در پردیس علوم دانشگاه تهران در بخش کشت
              بافت زیر نطر استاد میرمعصومی
            </li>
            <li className="">
              گذراندن دوره اموزشی در مزرعه تحقیقاتی گیاهان دارویی واقع در پاکدشت
            </li>
          </ul>
        </div>
        <div className="web flex gap-3  items-center">
          <div className="title underline  text-lg">برنامه نویسی</div>
          <div className="box ">
            <div className="title text-lg">حوزه فرانت اند</div>
            <ul className="flex flex-col gap-2">
              <li className="">css</li>
              <li className="">html</li>
              <li className="">javascript</li>
              <li className="">sass</li>
              <li className="">bootstrap - tailwind</li>
            </ul>
          </div>
          <div className="box">
            <div className="title text-lg">حوزه بک اند</div>
            <ul className="flex flex-col gap-2">
              <li className="">javascript</li>
              <li className="">node js</li>
              <li className="">react js</li>
              <li className="">next js</li>
              <li className="">REST API</li>
            </ul>
          </div>
          <div className="box flex relative -top-8 flex-col">
            <div className="title text-lg">کلی</div>
            <ul className="flex flex-col gap-2">
              <li className="">ساخت سایت و پویا و ریسپانسیو</li>
              <li className="">ساخت وب اپلیکشین های تحت وب</li>
              <li className="">ساخت ربات های تلگرامی</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
