import eventBus from "eventBus";

import generateKey from "./generateKey";

const dispatchNewNotification = (info = "default", type, message) => {
	const newNotification = {
		id: generateKey(info),
		type,
		message,
	};

	eventBus.dispatch("new-notification", newNotification);
};

export default dispatchNewNotification;
