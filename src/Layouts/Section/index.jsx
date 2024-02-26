import UseSwitch from "../../baseUI/UseSwitch";

const Section = ({ title,items,onToggle,children}) => {
  const isTrending = title === "Trending";
  const isTrailer = title ==="Latest Trailers";
    
  return (
    <section className={`whatspopular ${isTrending ? 'trending' : ''} || ${isTrailer ? 'trailers' : ''}`}>
      <div className="whatsPopularHeader">
        <h2 className="sectionTitle">{title}</h2>
        <UseSwitch items={items} onToggle={onToggle}/>
      </div>
      <div className="moviecardsstyling">
        {children}
      </div>
    </section>
  );
};
export default Section;





