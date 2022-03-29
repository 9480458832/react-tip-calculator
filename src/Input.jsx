import React, { useState } from "react";
import Output from "./Output";

function Input() {
  const [peopel, setpeopel] = useState([]);
  const [sum, setTotalSum] = useState(0);
  const [state, setState] = useState({
    name: "",
    amount: "",
    type: "",
    finalTip: "",
    percentage: "",
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const cal = () => {

    if (state.amount == '' || state.name == '' || state.percentage == '') {
      alert('Please fill all flield')
      return false;
    } else {
      const finalTip = parseInt(state.amount * state.percentage) / 100;
      state.finalTip = finalTip;
      setTotalSum(sum + finalTip);

      setpeopel([...peopel, state]);

      setState({
        name: "",
        amount: "",
        type: "",
        finalTip: "",
        percentage: "",
      })
    }


  };

  return (
    <div className="container">
      <hr />
      {/* <!-- input --> */}
      <label htmlFor="bill">Enter your amount:</label>
      <br />

      <input
        type="number"
        placeholder="Enter amount in Number"
        className="form-control-plaintex"
        htmlFor="bill"
        value={state.amount}
        required onChange={handleChange}
        name="amount"


      />
      <br />
      {/* <!-- input --> */}
      <label htmlFor="num">Enter Name of person </label>
      <br />
      <input
        type="text"
        placeholder="Enter Name of person"
        className="form-control-plaintex"
        htmlFor="num"
        required onChange={handleChange}
        value={state.name}
        name="name"

      />

      <br />
      <select
        className="form-control-plaintex"
        htmlFor="select"
        name="percentage"
        required onChange={handleChange}
        value={state.percentage}

      >
        <option value="0" selected>
          Open for select Option
              </option>
        <option value="20">20%</option>
        <option value="10">10%</option>
        <option value="5">5%</option>
      </select>


      <br />
      <button onClick={cal}>Add People</button>
      <hr />
      <Output data={peopel} /> 
      <hr />
    </div>
  );
}

export default Input;
