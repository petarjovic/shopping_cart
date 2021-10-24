import { useState } from "react";
import NumberFormat from "react-number-format";

const AddItems = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [cost, setCost] = useState("");
  const [discount, setDiscount] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text || !cost) {
      alert("Please input both cost and name.");
      return;
    }

    setCost(Number(cost));
    setDiscount(Number(discount));

    onAdd({ text, cost, discount });

    setText("");
    setCost("");
    setDiscount("");
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-item">
        <label>Item Name: </label>
        <input
          type="text"
          placeholder="Name"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-cost-discount">
        <label>Item Cost: </label>
        <NumberFormat
          value={cost}
          thousandSeparator={true}
          allowNegative={false}
          isNumericString={true}
          decimalScale={2}
          prefix={"$"}
          placeholder="($)"
          onChange={(e) =>
            setCost(e.target.value.substring(1).replace(/\,/g, ""))
          }
        />
      </div>
      <div className="form-cost-discount">
        <label>Item Discount: </label>
        <NumberFormat
          value={discount}
          allowNegative={false}
          isNumericString={true}
          decimalScale={1}
          suffix={"%"}
          placeholder="(%)"
          onChange={(e) => setDiscount(e.target.value.slice(0, -1))}
        />
      </div>

      <input
        type="submit"
        value="Add Item"
        className="btn btn-block btn-block-place-item"
      />
    </form>
  );
};

export default AddItems;
