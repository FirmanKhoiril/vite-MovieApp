// import { useGlobalContext } from "../context/Context";

const Login = () => {
  //   const { formLogin, setFormLogin } = useGlobalContext();
  return (
    <form className="flex flex-col gap-1">
      <label>Name</label>
      <input type="text" className="py-2 px-4 bg-black/50 outline-none" />
      <label>Email</label>
      <input type="email" className="py-2 px-4 bg-black/50 outline-none" />
      <label>Password</label>
      <input type="text" className="py-2 px-4 bg-black/50 outline-none" />

      <button type="submit" className="py-2 px-3 bg-red-500 mt-4">
        Submit
      </button>
    </form>
  );
};

export default Login;
