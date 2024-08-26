import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Accordion = ({ data, flag, setShowIndex }) => {
  //const [flag, setFlag] = useState(false);
  const showAndHide = () => {
    //setFlag(!flag);
    setShowIndex();
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={showAndHide}>
        <span>
          {data.title} ({data.itemCards.length})
        </span>
        <span>↓</span>
      </div>

      {flag && <ItemList itemList={data.itemCards} />}
    </div>
  );
};
export default Accordion;
