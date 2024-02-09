const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			vehicles: [],
			planets: [],
			species: [],
			favorites: []
		},
		actions: {
			getDataFromApi: async () => {
				try {
					 // Intenta obtener los datos del almacenamiento local
					 const storedData = localStorage.getItem('swapiData');
					 if (storedData) {
						 setStore(JSON.parse(storedData));
						 return;
					 }
					const characterResponse = await fetch('https://www.swapi.tech/api/people');
					const vehicleResponse = await fetch('https://www.swapi.tech/api/vehicles');
					const planetResponse = await fetch('https://www.swapi.tech/api/planets');
					const specieResponse = await fetch('https://www.swapi.tech/api/species')
			
					if (!characterResponse.ok || !vehicleResponse.ok || !planetResponse.ok || !specieResponse.ok) {
						throw new Error('Network response was not ok');
					}
			
					const characterData = await characterResponse.json();
					const vehicleData = await vehicleResponse.json();
					const planetData = await planetResponse.json();
					const specieData = await specieResponse.json();
			
					// Obtener detalles completos de cada personaje, vehículo y planeta
					const charactersWithDetails = await Promise.all(characterData.results.map(async character => {
						const detailsResponse = await fetch(character.url);
						if (!detailsResponse.ok) {
							throw new Error('Network response was not ok');
						}
						const detailsData = await detailsResponse.json();
			
						// Obtener detalles del planeta de origen
						const homeworldResponse = await fetch(detailsData.result.properties.homeworld);
						if (!homeworldResponse.ok) {
							throw new Error('Network response was not ok');
						}
						const homeworldData = await homeworldResponse.json();
			
						return { ...detailsData.result, homeworld: homeworldData.result };
					}));
			
					// Obtener detalles completos de cada vehículo
					const vehiclesWithDetails = await Promise.all(vehicleData.results.map(async vehicle => {
						const detailsResponse = await fetch(vehicle.url);
						if (!detailsResponse.ok) {
							throw new Error('Network response was not ok');
						}
						const detailsData = await detailsResponse.json();
						return detailsData.result;
					}));
			
					// Obtener detalles completos de cada planeta
					const planetsWithDetails = await Promise.all(planetData.results.map(async planet => {
						const detailsResponse = await fetch(planet.url);
						if (!detailsResponse.ok) {
							throw new Error('Network response was not ok');
						}
						const detailsData = await detailsResponse.json();
						return detailsData.result;
					}));

					// Obtener detalles completos de cada especie
					const specieWithDetails = await Promise.all(specieData.results.map(async specie => {
						const detailsResponse = await fetch(specie.url);
						if (!detailsResponse.ok) {
							throw new Error('Network response was not ok');
						}
						const detailsData = await detailsResponse.json();
						return detailsData.result;
					}));
			
					// Guardar los datos en el almacenamiento local
                    const dataToStore = {
                        characters: charactersWithDetails,
                        vehicles: vehiclesWithDetails,
                        planets: planetsWithDetails,
                        species: specieWithDetails
                    };
                    localStorage.setItem('swapiData', JSON.stringify(dataToStore));

                    // Actualizar el estado con los datos de la API
                    setStore(dataToStore);
				} catch (error) {
					console.error('Error fetching data:', error);
				}
			},
			toggleFavorite: (id, category) => {
				const store = getStore();
				const updatedCategory = store[category].map(item => {
					if (item.uid === id) {
						return { ...item, isFavorite: !item.isFavorite };
					}
					return item;
				});
			
				const updatedStore = {
					...store,
					[category]: updatedCategory
				};
			
				// Update favorites in the store
				const favorites = updatedStore[category].filter(item => item.isFavorite);
				setStore({ ...updatedStore, favorites });
			}
		}
	};
};

export default getState;