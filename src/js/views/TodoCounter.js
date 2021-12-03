import React from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";

function ToDoCounter(props) {
	const { store } = React.useContext(Context);

	if (store.list.length == 0) {
		return <p className="counter">No tasks, add your first task!</p>;
	} else if (store.list.length - 1 == 1) {
		return <p className="counter">You have 1 task, You have one thing to do! </p>;
	} else if ((store.list.length >= 2, store.list.length - 1 <= 4)) {
		return <p className="counter">You have {store.list.length - 1} tasks, You have a few things to do!</p>;
	} else if ((store.list.length >= 5, store.list.length - 1 <= 9)) {
		return <p className="counter">You have {store.list.length - 1} tasks. You many things to do!</p>;
	} else if (store.list.length >= 10) {
		return <p className="counter">You have {store.list.length - 1} tasks. You have A lot to do!</p>;
	}
}

ToDoCounter.propTypes = {
	store: PropTypes.array
};

export default ToDoCounter;
