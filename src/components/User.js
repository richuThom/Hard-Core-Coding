import { useState } from "react";
const User = (props) => {
  const [count, setCount] = useState(0);
  const { name, country, email } = props;
  return (
    <div>
      <button
        type="submit"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Submit
        {count}
      </button>
      <h3>Name : {name}</h3>
      <h4>Country : {country}</h4>
      <h4>Email : {email}</h4>
    </div>
  );
};
export default User;
