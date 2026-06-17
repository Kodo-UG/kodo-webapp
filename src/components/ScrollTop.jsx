import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const ScrollToTop = () => {
	const { pathname } = useHistory();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
};

export default ScrollToTop;
