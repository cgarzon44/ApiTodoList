import React, { useContext, useState } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import ToDoCounter from "./TodoCounter";
import { Footer } from "../component/footer";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [newItem, setNewItem] = useState("");
	const [isShownHoverContent, setIsShownHoverContent] = useState(null);

	var randomColor = Math.floor(Math.random() * 16777215).toString(16);

	return (
		<>
			<div className="text-center mt-5">
				<div className="text-center mt-5">
					<img src="https://media.istockphoto.com/vectors/colorful-typography-banner-vector-id1282301744?k=20&m=1282301744&s=612x612&w=0&h=B8PNgvmH4OY88dlfl3OsIQtOfTwMELqqPEyUWxRA74c=" />
				</div>
				<input
					className="TodoInput"
					type="text"
					placeholder="New Task"
					value={newItem}
					onChange={e => setNewItem(e.target.value)}
				/>{" "}
				<button
					className="btn-primary "
					type="button"
					onClick={() => {
						actions.newListItem(newItem);
						setNewItem("");
					}}>
					Add
				</button>{" "}
				<button
					className="deleteListButton"
					type="button"
					onClick={() => {
						actions.returnNewArray();
					}}>
					Delete List
				</button>
				<div>
					<ToDoCounter />
				</div>
				<div>
					<ul>
						{store.list &&
							store.list.map((item, index) => {
								return (
									<li key={index}>
										<div
											className="listItemDiv"
											onMouseEnter={() => setIsShownHoverContent(index)}
											onMouseLeave={() => setIsShownHoverContent(-1)}>
											<h3> {item.label}</h3>
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
			</div>
		</>
	);
};
