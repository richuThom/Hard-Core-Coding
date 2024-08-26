import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const { name, country, email } = this.props;
    const { count } = this.state;

    return (
      <div>
        <button
          type="submit"
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Submit(class){count}
        </button>
        <h3>Name : {name}</h3>
        <h4>Country : {country}</h4>
        <h4>Email : {email}</h4>
      </div>
    );
  }
}
export default UserClass;
