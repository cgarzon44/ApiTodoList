const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			list: []
		},
		actions: {
			listGet: () => {
				let requestOptions = {
					method: "GET",
					redirect: "follow"
				};

				fetch(`https://assets.breatheco.de/apis/fake/todos/user/cgarzon`, requestOptions)
					.then(response => response.json())
					.then(res => getStore(setStore({ list: res })))
					.catch(error => console.log("error", error));
			},
			newListItem: newItem => {
				const myHeaders = { "Content-Type": "application/json" };
				let newList = getStore().list;
				newList = [...newList, { label: newItem, done: false }];
				const raw = JSON.stringify(newList);

				const requestOptions = {
					method: "PUT",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch("https://assets.breatheco.de/apis/fake/todos/user/cgarzon", requestOptions)
					.then(response => response.text())
					.then(result => console.log(result))
					.then(() => getActions().listGet())
					.catch(error => console.log("error", error));
			},

			deleteListItem: () => {
				const myHeaders = { "Content-Type": "application/json" };
				let newList = getStore().list;
				const raw = JSON.stringify(newList);
				newList = [...newList];
				const requestOptions = {
					method: "PUT",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch("https://assets.breatheco.de/apis/fake/todos/user/cgarzon", requestOptions)
					.then(response => response.text())
					.then(result => console.log(result))
					.then(res => getStore(setStore({ list: res })))
					.catch(error => console.log("error", error));
			}
		}
	};
};

export default getState;
