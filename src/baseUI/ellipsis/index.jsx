import FontAwesome from "react-fontawesome";
const Ellipsis = () => {
  return (
    <div className="ellipsis">
      <div className="ellipseDots">
        <FontAwesome name="circle" />
        <FontAwesome name="circle" />
        <FontAwesome name="circle" />
      </div>
    </div>
  );
};
export default Ellipsis;
