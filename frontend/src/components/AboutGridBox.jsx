import gridImage1 from "../assets/images/s1.jpeg";
import gridImage2 from "../assets/images/s2.jpeg";


const AboutGridBox = () => {
  return (
    <div className="relative lg:w-full min-w-full min-h-[350px] lg:min-h-full flex flex-wrap l ">
      <div
        className="w-[80%] h-[50%] lg:h-[70%] absolute top-10 right-0 p-4 border-pink-300 border-2 rounded-sm"
        style={{
          backgroundImage: `url(${gridImage1})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <div
        className="w-[60%] h-[40%] absolute bottom-10 left-0 p-4 border-pink-300 border-2 rounded-sm"
        style={{
          backgroundImage: `url(${gridImage2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
};

export default AboutGridBox;
