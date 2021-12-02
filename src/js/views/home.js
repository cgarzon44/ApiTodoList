import React, { useContext, useState } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [newItem, setNewItem] = useState("");

	return (
		<>
			<div className="text-center mt-5">
				<img src="https://media.istockphoto.com/vectors/colorful-typography-banner-vector-id1282301744?k=20&m=1282301744&s=612x612&w=0&h=B8PNgvmH4OY88dlfl3OsIQtOfTwMELqqPEyUWxRA74c=" />
			</div>
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
											type="button"
											onClick={() => {
												actions.deleteItem(index);
											}}>
											<i className="far fa-trash-alt" />
										</button>
									</li>
								);
							})}
					</ul>
				</div>
			</div>
		</>
	);
};
