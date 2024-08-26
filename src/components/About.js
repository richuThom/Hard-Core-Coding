import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
      <h1>About Us Page</h1>
      <h2>
        This app provides brings all the restaurants with different cuisiones in
        one page, so that people can place their orders.
      </h2>
      <div className="card">
        <h2>User Details</h2>
        <User
          name={"Richu Thomas(Functional Component)"}
          country={"India"}
          email={"richu@gmail.com"}
        />
      </div>
      <div className="card">
        <UserClass
          name={"Richu Thomas(Class Component)"}
          country={"India"}
          email={"richu@gmail.com"}
        />
      </div>
    </div>
  );
};
export default About;
