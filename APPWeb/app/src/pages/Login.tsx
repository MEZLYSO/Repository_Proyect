import useSession from "../hooks/useSession"

function Login() {

  const { handleClick, handleSubmit } = useSession()

  return (
    <div className="h-dvh bg-blue-400 flex justify-center items-center">
      <div className="bg-white p-4 rounded-2xl">
        <h1 className="text-center text-3xl font-bold mb-10">
          Login
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2"
        >
          <label
            className="font-bold"
          >
            Email
          </label>
          <input
            className="border-b-2 border-black font-thin focus:outline-0 p-2"
            id="email"
            onChange={handleClick}
            type="email"
            placeholder="example@gmail.com" />
          <label
            className="font-bold"
          >
            Password
          </label>
          <input
            className="border-b-2 border-black font-thin focus:outline-0 p-2"
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
