import { useContext } from "react";
import Navber from "./Shared/Navber";
import {Link} from "react-router-dom"
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
    const {createUser} = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const PhotoUrl = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, PhotoUrl, email, password)

        

        createUser(email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.error(error);
        })
    }
    return (
        <div>
            <Navber></Navber>
            <div className="">
                <h2 className="text-3xl my-10 text-center">Please Register</h2>
                <form onSubmit={handleRegister} className="card-body lg:w-1/2 md:3/4 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center mt-4">Already have an account <Link to="/login" className="text-blue-700 font-bold">Login</Link> </p>
            </div>
        </div>
    );
};

export default Register;