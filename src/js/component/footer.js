import React, { useContext, useState } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export const Footer = () => {
	const { actions } = useContext(Context);

	return (
		<>
			<button
				className="deleteListButton"
				type="button"
				onClick={() => {
					actions.returnNewArray();
				}}>
				Delete List
			</button>
		</>
	);
};
