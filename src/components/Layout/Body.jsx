const Body = ({ children }) => {
	const containerStyles = {
		paddingLeft: "16px",
		paddingRight: "16px",
		display: "flex",
		justifyContent: "center",
		
	};
	return <div style={containerStyles}>{children}</div>;
};

export default Body;
