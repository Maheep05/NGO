import { memo, useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import img1 from "../../src/assets/1.png";
import img2 from "../../src/assets/2.png";
import img3 from "../../src/assets/3.png";
import Card from "../Components/Card/Card";
import Contact from "../Components/ContactUs/Contact";
import Footer from "../Components/Footer/Footer";
import founderImg from "../assets/founderpic.jpg";

const colorClasses = [
  "bg-[url('../../src/assets/slide1.png')]",
  "bg-[url('../../src/assets/slide2.png')]",
  "bg-[url('../../src/assets/slide3.png')]",
  "bg-[url('../../src/assets/slide4.png')]",
  "bg-[url('../../src/assets/slide5.png')]",
];

const LandingPage = memo(() => {
  const [currentBackgroundImage, setCurrentBackgroundImage] = useState(
    colorClasses[0]
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBackgroundImage((prevColor) => {
        const currentIndex = colorClasses.indexOf(prevColor);
        const nextIndex = (currentIndex + 1) % colorClasses.length;
        return colorClasses[nextIndex];
      });
    }, 3000); // Change color every 5 seconds

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, []);

  const data = [
    {
      img: img1,
      text: "शिक्षा",
      onclick: () => console.log("hello"),
    },
    {
      img: img2,
      text: "आजीविका",
      onclick: () => console.log("hello"),
    },
    {
      img: img3,
      text: "स्वास्थ्य",
      onclick: () => console.log("hello"),
    },
    {
      img: img1,
      text: "शिक्षा",
      onclick: () => console.log("hello"),
    },
    {
      img: img2,
      text: "आजीविका",
      onclick: () => console.log("hello"),
    },
    {
      img: img3,
      text: "स्वास्थ्य",
      onclick: () => console.log("hello"),
    },
  ];
  return (
    <div>
      <Navbar />

      <div
        className={`${currentBackgroundImage} bg-cover bg-center md:bg-cover  min-h-screen flex flex-col items-center justify-center`}
      >
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>{" "}
        {/* Overlay */}
        <div className="relative z-10 text-center">
          <h1 className=" font-poppins text-[3.5rem] md:text-[7rem] font-medium text-white ">
            चंद्रा फाउंडेशन
          </h1>
          <h2 className=" font-poppins text-2xl md:text-3xl text-white ">
            आशा, सहायता और खुशी
          </h2>
        </div>
      </div>

      <div
        className={` flex flex-col justify-center  items-center text-center gap-20 md:gap-40 bg-[url('../../src/assets/crowd.png')] bg-cover relative p-10 min-h-screen`}
      >
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>{" "}
        {/* Overlay */}
        <div className="relative flex flex-col justify-center gap-20 md:gap-40  items-center z-10">
          <p className="flex flex-col gap-2 md:w-1/2 font-poppins text-lg md:text-2xl leading-10 text-white ">
            <span> नमस्ते!</span> चंद्रा फाउंडेशन की ओर से शुभकामनाएँ! हमारे पेज
            पर आने के लिए धन्यवाद। इस फाउंडेशन के बारे में हमारी पृष्ठभूमि को
            पढ़ने के लिए आपको यहां देखकर हम धन्य हो गए हैं। हमारा दृष्टिकोण और
            मिशन और साथ ही यह चैरिटी फाउंडेशन कैसे शुरू हुआ।
          </p>
          <div className="flex flex-col gap-5 items-center justify-center text-center">
            <h1 className=" font-poppins text-2xl md:text-4xl leading-10 text-white ">
              Our Vision :
            </h1>
            <p className=" md:w-1/2 font-poppins text-lg md:text-2xl leading-10 text-white ">
              हम लोगों की मदद करने के लिए विचारों और ऊर्जा का विस्तार करते हैं
              ताकि मेरे परिवार की सहायता से, और मेरे दोस्तों के समर्थन से हम
              अपने संसाधनों का बेहतर उपयोग कर सकें।
            </p>
          </div>
        </div>
      </div>
      <div
        className={`flex relative flex-col gap-20 md:gap-40 bg-[url('../../src/assets/soil.jpg')] bg-cover p-10 min-h-screen`}
      >
        {" "}
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>{" "}
        {/* Overlay */}
        <h1 className=" font-poppins text-2xl md:text-4xl z-10 leading-10 text-white ">
          About Us
        </h1>
        <div className="flex flex-col gap-5 z-10 items-center justify-center text-center">
          <p className=" md:w-1/2 font-poppins text-lg md:text-2xl leading-10 text-white ">
            हम लोगों की मदद करने के लिए विचारों और ऊर्जा का विस्तार करते हैं
            ताकि मेरे परिवार की सहायता से, और मेरे दोस्तों के समर्थन से हम अपने
            संसाधनों का बेहतर उपयोग कर सकें।
          </p>
        </div>
      </div>
      <div
        className={`flex relative flex-col justify-center  gap-10  bg-[url('../../src/assets/soil.jpg')] bg-cover p-10 min-h-screen`}
      >  <div className="absolute inset-0 bg-black opacity-40 z-0"></div>{" "}
        {/* Overlay */}
        <h1 className="flex z-10 flex-row justify-end w-3/4 font-poppins text-2xl md:text-4xl leading-10 text-white ">
          About the idea :
        </h1>

        <div className="flex z-10 flex-col gap-5 items-center justify-center text-center">
          <p className=" md:w-1/2 font-poppins text-lg md:text-2xl leading-10 text-white ">
            यह चैरिटी फाउंडेशन अनौपचारिक रूप से जुलाई 2019 में शुरू हुआ लेकिन
            जनवरी 2020 में पंजीकृत हुआ। 2019 से, हमने लोगों/बच्चों के साथ अधिक
            समय बिताने और जीवन में उनकी इच्छाओं और आकांक्षाओं को समझने की कोशिश
            की। हमने लोगों से अपने पुराने कपड़े और सामान दान करने का अनुरोध
            किया। लेकिन यह पर्याप्त नहीं होगा। किसी की बुनियादी जरूरतों के अलावा
            शिक्षा और रोजगार विकास का केंद्र बिंदु है।
          </p>
        </div>
      </div>
      <div
        className={`flex relative flex-col justify-center  gap-10  bg-[url('../../src/assets/soil.jpg')] bg-cover p-10 min-h-screen`}
      >  <div className="absolute  inset-0 bg-black opacity-40 z-0"></div>{" "}
        {/* Overlay */}
        <h1 className=" font-poppins z-10 text-2xl md:text-4xl leading-10 text-white ">
          From the desk of founder:
        </h1>

        <img src={founderImg} alt="" className="w-60 z-10 mx-auto" />
        <div className="flex flex-col gap-5 items-center z-10 justify-center text-center">
          <p className=" md:w-1/2 font-poppins text-lg md:text-2xl leading-10 text-white ">
            यह चैरिटी फाउंडेशन अनौपचारिक रूप से जुलाई 2019 में शुरू हुआ लेकिन
            जनवरी 2020 में पंजीकृत हुआ। 2019 से, हमने लोगों/बच्चों के साथ अधिक
            समय बिताने और जीवन में उनकी इच्छाओं और आकांक्षाओं को समझने की कोशिश
            की। हमने लोगों से अपने पुराने कपड़े और सामान दान करने का अनुरोध
            किया। लेकिन यह पर्याप्त नहीं होगा। किसी की बुनियादी जरूरतों के अलावा
            शिक्षा और रोजगार विकास का केंद्र बिंदु है।
          </p>
        </div>
      </div>
      <div
        className={` flex flex-col gap-6 bg-[url('../../src/assets/clouds.png')] bg-center p-10 min-h-screen`}
      >
        <h1 className="text-white font-poppins text-3xl md:text-4xl">
          Programmes
        </h1>
        <div className="flex flex-row justify-center gap-20 items-center flex-wrap">
          {data.map((item, index) => (
            <Card
              key={index}
              imageLink={item.img}
              text={item.text}
              onClickHandler={item.onclick}
            />
          ))}
        </div>
      </div>
      <Contact />
      <Footer />
      <p className="font-poppins bg-black text-white flex justify-center items-center py-2">
        &copy; 2024 चंद्रा फाउंडेशन
      </p>
    </div>
  );
});

export default LandingPage;
