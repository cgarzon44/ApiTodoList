import React, { useContext, useState } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [newItem, setNewItem] = useState("");

	function deleteCurrentItem(i, index) {
		const newList = store.list.filter((i, index) => {
			return index !== i;
		});
	}

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
									<button
										onChange={deleteCurrentItem}
										type="button"
										onClick={() => {
											actions.deleteItem();
										}}>
										<i className="far fa-trash-alt" />
									</button>
								</li>
							);
						})}
				</ul>
			</div>
		</div>
	);
};
