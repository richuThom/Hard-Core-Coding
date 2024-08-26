import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ itemList }) => {
  const dispatch = useDispatch();
  const handleAdd = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div className="accordion-body">
      {itemList.map((item) => (
        <ul key={item.card.info.id}>
          <div className="acc">
            <li>{item.card.info.name}</li>
            <li>{item.card.info.price / 100}</li>
            <li>{item.card.info.description}</li>{" "}
          </div>
          <div className="image-holder">
            <button className="img-button" onClick={() => handleAdd(item)}>
              ADD +
            </button>
            <img
              className="menu-image"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                item.card.info.imageId
              }
            ></img>
          </div>
        </ul>
      ))}
    </div>
  );
};
export default ItemList;
