import AboutChart from "./AboutChart";

const HeadlineSubline = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-2 items-center max-w-full ">
      <div className="mx-3">
        <h1 className="text-2xl font-bold font-allan text-pink-600">The headline of Alphabet subline.</h1>
        <p className="text-start text-gray-800 mt-5 font-roboto text-sm lg:text-base">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean. A small river named Duden flows by their place and
          supplies it with the necessary regelialia. It is a paradisematic
          country blind text by the name of Lorem Ipsum decided to leave for the
          far World of Grammar.
        </p>
      </div>
      <div className="flex items-start ">
        <AboutChart />
      </div>
    </div>
  );
};

export default HeadlineSubline;
