import { useContext } from "react";
import MyContext from "../context/MyContext";
const LoginForm = () => {
  const context = useContext(MyContext);
  const { form, handleFormInput, handleFormSubmit, auth } = context;
  const { user, password } = form;
  const logged = !auth ? (
    <form>
      <input
        onChange={(e) => handleFormInput(e)}
        name="user"
        value={user}
        type="text"
        placeholder="UserName"
      />
      <input
        onChange={(e) => handleFormInput(e)}
        name="password"
        value={password}
        type="password"
        placeholder="Password"
      />
      <button className="form-button" onClick={(e) => handleFormSubmit(e)}>
        Login
      </button>
    </form>
  ) : (
    <button className="form-button" onClick={(e) => handleFormSubmit(e)}>
      Logout
    </button>
  );
  return logged;
};
export default LoginForm;
