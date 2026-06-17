import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
	// let auth = { token: false };
	const token = localStorage.getItem("token");

	return (
		<Route {...rest}>{!token ? <Redirect to="/login" /> : children}</Route>
	);
};

export default PrivateRoute;
