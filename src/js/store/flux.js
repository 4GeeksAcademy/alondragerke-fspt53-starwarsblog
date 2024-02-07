const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [
				"name",
				"birth_year",
				"homeworld",
				"species",
				"gender",
				"height",
				"mass",
				"skin_color",
				"eye_color",
				"hair_color",
				"films"
			],
			vehicles: [
				"name",
				"model",
				"vehicle_class",
				"consumables",
				"length",
				"max_atmosphering_speed",
				"manufacturer",
				"crew",
				"cargo_capacity",
				"passengers",
				"films",
			],
			planets: [
				"name",
				"climate",
				"population",
				"terrain",
				"diameter",
				"gravity",
				"surface_water",
				"orbital_period",
				"rotation_period",
				"films"
			]
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
						characters: characterData.results.map(character => ({ ...character.properties, isFavorite: false })),
						vehicles: vehicleData.results.map(vehicle => ({ ...vehicle.properties, isFavorite: false })),
						planets: planetData.results.map(planet => ({ ...planet.properties, isFavorite: false }))
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
