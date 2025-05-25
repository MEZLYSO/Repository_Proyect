import useSession from "../hooks/useSession"

function Login() {

  const { handleClick, userLogin, handleSubmit } = useSession()

  return (
    <div className="h-dvh bg-blue-400 flex justify-center items-center">
      <div className="bg-white p-4 rounded-2xl">
        <h1 className="text-center text-2xl font-bold">
          Login
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2"
        >
          <label>Email</label>
          <input
            id="email"
            onChange={handleClick}
            type="email"
            placeholder="example@gmail.com" />
          <label>Password</label>
          <input
            id="password"
            onChange={handleClick}
            type="password"
            placeholder="your password" />
          <input
            type="submit"
            value="Login"
            className="bg-green-400 text-white rounded-2xl"
          />
        </form>
      </div>
    </div>
  )
}

export default Login
