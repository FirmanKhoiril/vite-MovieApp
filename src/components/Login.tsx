import { useGlobalContext } from "../context/Context";

const Login = () => {
  const { formLogin, setFormLogin } = useGlobalContext();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formLogin);
  };
  return (
    <form className="flex flex-col gap-1" onSubmit={handleSubmit}>
      <label>Name</label>
      <input type="text" onChange={(e) => setFormLogin({ ...formLogin, name: e.target.value })} required value={formLogin.name} className="py-2 px-4 bg-black/50 outline-none" />
      <label>Email</label>
      <input type="email" onChange={(e) => setFormLogin({ ...formLogin, email: e.target.value })} required value={formLogin.email} className="py-2 px-4 bg-black/50 outline-none" />
      <label>Password</label>
      <input type="text" onChange={(e) => setFormLogin({ ...formLogin, password: e.target.value })} required value={formLogin.password} className="py-2 px-4 bg-black/50 outline-none" />

      <button type="submit" className="py-2 px-3 bg-red-500 mt-4">
        Submit
      </button>
    </form>
  );
};

export default Login;
