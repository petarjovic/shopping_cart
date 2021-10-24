import { FaTimes } from "react-icons/fa";

const Item = ({ item, onDelete }) => {
  return (
    <div className="item">
      <h3>
        {item.text}{" "}
        <FaTimes
          style={{ color: "darkred", cursor: "pointer" }}
          onClick={() => onDelete(item.id)}
        />
      </h3>
      <p>${item.cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
    </div>
  );
};

export default Item;
