import { FcGoogle } from "react-icons/fc";

function SignUp() {

    return (
        <div className="min-h-screen max-w-6xl mx-auto px-6 flex items-center">
            <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-16">
                {/* image */}
                <div className="hidden md:block w-full lg:w-1/2">
                    <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80&utm_source=chatgpt.com" alt="Image" className="w-full h-[300px] lg:h-[600px] object-cover rounded-2xl" />
                </div>
                {/* form */}
                <div className="w-full md:w-[80%] lg:w-1/2 flex justify-center">
                    <form action="/" className="w-full max-w-md space-y-5">
                        <div className="text-center space-y-2">
                            <h2 className="text-3xl md:text-4xl font-semibold tracking-wide">Welcome to <span className="bg-linear-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text ">VirtualR</span></h2>
                            <p className="text-neutral-400">Please enter your details.</p>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="username" className="block text-sm font-medium">Username</label>
                            <input type="text" placeholder="Enter your username" required id="username" className="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-700 outline-none focus:border-orange-500 transition"
                            />
                        </div>
                        <div className="space-y-2 ">
                            <label htmlFor="email" className="block text-sm font-medium">Email</label>
                            <input type="text" placeholder="Enter your email" required id="email" className="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-700 outline-none focus:border-orange-500 transition" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="pass" className="block text-sm font-medium">Password</label>
                            <input type="text" placeholder="********" required id="pass" className="w-full px-4 py-3 rounded-lg bg-neutral-900 border border-neutral-700 outline-none focus:border-orange-500 transition" />
                        </div>
                        <div className="flex items-center justify-between text-sm">
                            <div >
                                <input type="checkbox" required id="remember" className="accent-orange-500"/>
                                <label htmlFor="remember">Remember me</label>
                            </div>
                            <a href="#"  className="text-orange-400 hover:text-orange-300 transition">Forget password</a>
                        </div>
                        <div className="space-y-2 pt-2">
                                 < button  className="w-full py-3 rounded-lg bg-linear-to-r from-orange-500 to-orange-800 font-medium hover:opacity-90 transition">
                                Sign Up
                            </button>
                            <button className="w-full py-3 rounded-lg bg-linear-to-r from-orange-500 to-orange-800 font-medium hover:opacity-90 transition">
                                Sign up with Google
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}
export default SignUp;