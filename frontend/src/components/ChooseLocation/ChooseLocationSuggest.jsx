function SuggestLocation(e, suggestionLocations){

    const locationName = e.target.value;

    const satisfiedLocation = suggestionLocations.filter(location => location.includes(locationName));

    satisfiedLocation.map((location) => console.log(location));
    
}

export default SuggestLocation;

