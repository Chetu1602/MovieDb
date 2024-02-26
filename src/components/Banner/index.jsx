import { useRef } from "react";

import SearchInput from "../../baseUI/Button/Input/SearchInput";
import SearchButton from "../../baseUI/Button/SearchButton";

const Banner = () => {
  const searchInputRef = useRef();
  const handleSearch = () => {
    alert(`you typed ${searchInputRef.current.value}`);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // console.log(searchInputRef.current.value);
      handleSearch() 
       }
  };
  
  return (
    <>
      {/* firstbanner */}
      <div className="top banner">
        <div className="content">
          <div className="title">
            <h2>Welcome.</h2>
            <h3>
              Millions of movies, TV shows and people to discover. Explore now.
            </h3>
          </div>
          <div className="search">
            <SearchInput ref={searchInputRef} onKeyDown={handleKeyDown} />
            <div className="button">
              <SearchButton onClick={handleSearch} />
            </div>
          </div>
        </div>
      </div>
      {/* secondbanner */}
      <div className="banner wrap">
        <div className="bannerbg">
          <div className="gradienText">
            <h2>
              That's a <br /> Wrap 2023
            </h2>
          </div>
          <div className="bannerText ">
            <p>The best (and worst) of the year from TMDB.</p>
            <h4>
              Check it out<span className="arrow"></span>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
