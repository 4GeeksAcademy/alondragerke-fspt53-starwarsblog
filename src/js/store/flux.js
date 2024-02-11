const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			vehicles: [],
			planets: [],
			species: [],
			favorites: JSON.parse(localStorage.getItem('favorites')) || [],
			heartStates: {}
		},
		actions: {
			getDataFromApi: async () => {
				try {
					 const storedData = localStorage.getItem('swapiData');
					 if (storedData) {
						 setStore(JSON.parse(storedData));
						 return;
					 }
					const characterResponse = await fetch('https://www.swapi.tech/api/people');
					const vehicleResponse = await fetch('https://www.swapi.tech/api/vehicles');
					const planetResponse = await fetch('https://www.swapi.tech/api/planets');
					const speciesResponse = await fetch('https://www.swapi.tech/api/species')
			
					if (!characterResponse.ok || !vehicleResponse.ok || !planetResponse.ok || !speciesResponse.ok) {
						throw new Error('Network response was not ok');
					}
			
					const characterData = await characterResponse.json();
					const vehicleData = await vehicleResponse.json();
					const planetData = await planetResponse.json();
					const speciesData = await speciesResponse.json();
			
					const charactersWithDetails = await Promise.all(characterData.results.map(async character => {
						const detailsResponse = await fetch(character.url);
						if (!detailsResponse.ok) {
							throw new Error('Network response was not ok');
						}
						const detailsData = await detailsResponse.json();
			
						const homeworldResponse = await fetch(detailsData.result.properties.homeworld);
						if (!homeworldResponse.ok) {
							throw new Error('Network response was not ok');
						}
						const homeworldData = await homeworldResponse.json();
			
						return { ...detailsData.result, homeworld: homeworldData.result };
					}));
			
					const vehiclesWithDetails = await Promise.all(vehicleData.results.map(async vehicle => {
						const detailsResponse = await fetch(vehicle.url);
						if (!detailsResponse.ok) {
							throw new Error('Network response was not ok');
						}
						const detailsData = await detailsResponse.json();
						return detailsData.result;
					}));
			
					const planetsWithDetails = await Promise.all(planetData.results.map(async planet => {
						const detailsResponse = await fetch(planet.url);
						if (!detailsResponse.ok) {
							throw new Error('Network response was not ok');
						}
						const detailsData = await detailsResponse.json();
						return detailsData.result;
					}));

					const speciesWithDetails = await Promise.all(speciesData.results.map(async species => {
						const detailsResponse = await fetch(species.url);
						if (!detailsResponse.ok) {
							throw new Error('Network response was not ok');
						}
						const detailsData = await detailsResponse.json();
						return detailsData.result;
					}));
			
                    const dataToStore = {
                        characters: charactersWithDetails,
                        vehicles: vehiclesWithDetails,
                        planets: planetsWithDetails,
                        species: speciesWithDetails
                    };
                    localStorage.setItem('swapiData', JSON.stringify(dataToStore));

                    setStore(dataToStore);
				} catch (error) {
					console.error('Error fetching data:', error);
				}
			},
			toggleFavorite: (id, category) => {
				try {
                    const store = getStore();
                    const updatedCategory = store[category].map(item => {
                        if (item.uid === id) {
                            return { ...item, isFavorite: !item.isFavorite };
                        }
                        return item;
                    });

                    let newFavorites = [...store.favorites];
                    const index = newFavorites.findIndex(item => item.uid === id);
                    if (index !== -1) {
                        newFavorites.splice(index, 1);
                    } else {
                        const itemToAdd = store[category].find(item => item.uid === id);
                        if (itemToAdd) {
                            newFavorites.push(itemToAdd);
                        }
                    }

                    setStore({
                        ...store,
                        [category]: updatedCategory,
                        favorites: newFavorites
                    });
                } catch (error) {
                    console.error('Error toggling favorite:', error);
				}
            }
		}
	};
};

export default getState;