import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import NewsLetter from "../../components/newsletter/NewsLetter";

const HowToEnrol = () => {
  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>

        <div className="howtoenrol justify-center flex  items-center">
          <div className="text-white text-[48px] font-semibold leading-[1.3em]">
            How To Enroll
          </div>
        </div>

        <div className="px-[4rem] pt-[3.5rem] pb-[4rem]">
          <div>
            <span className="text-[30px] font-light">W</span>ith Ethical Hackers Academy we offer more than 100+ courses and all
            the courses comes with lifetime access, also we do have subscription
            plans. Here you can find our courses list.
          </div>

          <div className="text-[1.5em] font-medium pt-5 w-fit">
            <h3>Here are the Steps to Enroll</h3>
            <div className="border-b-2 w-[30%] pt-2 border-[#0f2961cc]"></div>
          </div>

          <div className="pt-7 flex flex-col gap-6">
            <div><span className=" font-semibold">Step 1</span> – Select the courses that you like to enroll for</div>

            <div><span className=" font-semibold">Step 2</span> – Your course got added with the cart, now you can checkout</div>
            <div><span className=" font-semibold">Step 3</span> – Need to fill in the details; please make sure the email address is correct because the same email will be used for sending login credentials. Once Details are added, click on continue to payment.</div>
            <div><span className=" font-semibold">Step 4</span> –  Pay through a highly secured  “Stripe” payment gateway, where you can pay with your credit/debit cards.</div>
            <div><span className=" font-semibold">Note:</span> – We are not storing any of your payment-related information.</div>
            <div><span className=" font-semibold">Step 5</span> – Once Payment is completed, you will get login credentials in about 5 minutes, for bundle, it may get delayed, the maximum delay time is 4hrs.</div>
          </div>
        </div>

        <div>
            <NewsLetter />
        </div>
        <div>
        <Footer />
        </div>
      </div>
    </>
  );
};

export default HowToEnrol;
