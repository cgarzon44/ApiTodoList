import React, { useContext, useState } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [newItem, setNewItem] = useState("");

	const deleteList = () => {};

	return (
		<div className="text-center mt-5">
			<input type="text" placeholder="New Task" value={newItem} onChange={e => setNewItem(e.target.value)} />
			<button
				className="btn-primary "
				type="button"
				onClick={() => {
					actions.newListItem(newItem);
					setNewItem("");
				}}>
				Add
			</button>
			<div>
				<ul>
					{store.list &&
						store.list.map((item, index) => {
							return (
								<li key={index}>
									{item.label}
									<button onClick={deleteList} type="button">
										X
									</button>
								</li>
							);
						})}
				</ul>
			</div>
		</div>
	);
};
