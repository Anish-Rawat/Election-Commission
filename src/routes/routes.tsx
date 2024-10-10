import Signin from "../modules/signin";
import Signup from "../modules/signup";
import StateElectionDashboard from "../modules/StateElectionDashbard";
import PrivateRoute from "./PrivateRoute";

export const routes = [
    {
        path : "/",
        element:<PrivateRoute children={<StateElectionDashboard/>}/>
    },
    {
        path : "/SignUp",
        element:<Signup/>
    },
    {
        path : "/SignIn",
        element:<Signin/>
    },
]