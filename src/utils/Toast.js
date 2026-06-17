import { message, notification } from "antd";

export const displayErrorMessage = (error) => {
	return message.error(error);
};

export const displaySuccessMessage = (success) => {
	return message.success(success);
};

export const displaySuccessNotification = (description) => {
	return notification["success"]({
		description,
		placement: "topRight",
		style: {
			marginTop: 50
		}
	});
};

export const displayErrorNotification = (description) => {
	return notification["error"]({
		description,
		placement: "topRight",
		style: {
			marginTop: 50
		}
	});
};
