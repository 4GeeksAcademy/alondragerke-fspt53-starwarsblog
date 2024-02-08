const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			vehicles: [],
			planets: []
		},
		actions: {
			getDataFromApi: async () => {
                try {
					const characterResponse = await fetch('https://www.swapi.tech/api/people');
					const vehicleResponse = await fetch('https://www.swapi.tech/api/vehicles');
					const planetResponse = await fetch('https://www.swapi.tech/api/planets');

					if (!characterResponse.ok || !vehicleResponse.ok || !planetResponse.ok) {
						throw new Error('Network response was not ok');
					}

					const characterData = await characterResponse.json();
					const vehicleData = await vehicleResponse.json();
					const planetData = await planetResponse.json();
					
					setStore({
						characters: characterData.results.map(character => ({ ...character, isFavorite: false })),
						vehicles: vehicleData.results.map(vehicle => ({ ...vehicle, isFavorite: false })),
						planets: planetData.results.map(planet => ({ ...planet, isFavorite: false }))
					});
					
				} catch (error) {
                    console.error('Error fetching data:', error);
				}
            },
			toggleFavorite: (id, category) => {
				const store = getStore();
				const updatedCategory = store[category].map(item => {
					if (item.id === id) {
						return { ...item, isFavorite: !item.isFavorite };
					}
					return item;
				});
				setStore({ [category]: updatedCategory });
			}
		}
	};
};

export default getState;
