import React, { useContext, useState } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import ToDoCounter from "./TodoCounter";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [newItem, setNewItem] = useState("");
	const [isShownHoverContent, setIsShownHoverContent] = useState(null);

	return (
		<>
			<div className="text-center mt-5">
				<img src="https://media.istockphoto.com/vectors/colorful-typography-banner-vector-id1282301744?k=20&m=1282301744&s=612x612&w=0&h=B8PNgvmH4OY88dlfl3OsIQtOfTwMELqqPEyUWxRA74c=" />
			</div>
			<div className="text-center mt-5">
				<input
					className="TodoInput"
					type="text"
					placeholder="New Task"
					value={newItem}
					onChange={e => setNewItem(e.target.value)}
				/>
				<button
					className="btn-primary "
					type="button"
					onClick={() => {
						actions.newListItem(newItem);
						setNewItem("");
					}}>
					Add
				</button>

				<ToDoCounter />
				<div>
					<ul>
						{store.list &&
							store.list.map((item, index) => {
								return (
									<li key={index}>
										<div
											onMouseEnter={() => setIsShownHoverContent(index)}
											onMouseLeave={() => setIsShownHoverContent(-1)}>
											{item.label}
											<div
												onClick={() => {
													actions.deleteItem(index);
												}}>
												<i
													className={
														isShownHoverContent === index
															? "fas fa-times p-2 flex-shrink-1 "
															: "fas fa-times p-2 flex-shrink-1 hide"
													}
												/>
											</div>
										</div>
									</li>
								);
							})}
					</ul>
				</div>
				<button
					type="button"
					onClick={() => {
						actions.returnNewArray();
					}}>
					Delete list
				</button>
			</div>
		</>
	);
};
