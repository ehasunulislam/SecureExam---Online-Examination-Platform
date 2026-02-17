export default function Login() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-neutral-900">
      <div className="w-full max-w-md px-6">
        <div className="bg-white dark:bg-neutral-800 shadow-2xl rounded-2xl p-8">

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">Welcome Back</h1>
            <p className="text-gray-500 mt-2">Sign in to continue</p>
          </div>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full px-4 py-2 border rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 border rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-black" />
                Remember me
              </label>
              <a href="#" className="text-gray-500 hover:underline">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg font-medium hover:opacity-90 transition"
            >
              Login
            </button>
          </form>
          <p className="text-sm text-center text-gray-500 mt-6">
            Don’t have an account?{" "}
            <a href="#" className="underline">
              Register Now
            </a>
          </p>

        </div>
      </div>
    </main>
  );
}
