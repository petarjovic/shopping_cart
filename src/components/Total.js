import { useState } from "react";
import NumberFormat from "react-number-format";

const Total = ({ items }) => {
  const [tax, setTax] = useState("");
  const [globalDiscount, setGlobalDisount] = useState("");
  const [total, setTotal] = useState(0);
  const api_base_url = "https://csc301f21-a1-57.herokuapp.com/api/v1/total";

  const onCalculate = (e) => {
    e.preventDefault();

    if (!tax || !globalDiscount) {
      alert("Please Complete All Forms");
      return;
    }

    console.log("Starting fetch...");

    //figure out how to send to backend then print the total
    (async () => {
      await fetch(api_base_url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((item) => ({
            price: item.cost,
            discount: 0,
            quantity: 1,
          })),
          discount: globalDiscount / 100,
          tax: tax / 100,
        }),
      })
        .then((res) => res.json())
        .then((data) => setTotal(data["total"]))
        .catch((e) => e);
    })();
  };

  return (
    <form className="add-form" onSubmit={onCalculate}>
      <div className="form-global-tax-discount">
        <label>Tax Rate: </label>
        <NumberFormat
          value={tax}
          allowNegative={false}
          isNumericString={true}
          decimalScale={1}
          suffix={"%"}
          placeholder="(%)"
          onChange={(e) => setTax(e.target.value.slice(0, -1))}
        />
      </div>
      <div className="form-global-tax-discount">
        <label>Global Discount: </label>
        <NumberFormat
          value={globalDiscount}
          allowNegative={false}
          isNumericString={true}
          decimalScale={1}
          suffix={"%"}
          placeholder="(%)"
          onChange={(e) => setGlobalDisount(e.target.value.slice(0, -1))}
        />
      </div>

      <input type="submit" value="Calculate" className="btn btn-block" />

      <h2 className="total">
        {" "}
        Total: ${total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </h2>
    </form>
  );
};

export default Total;
