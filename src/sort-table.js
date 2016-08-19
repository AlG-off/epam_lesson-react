export let sortByLastName = (usersList, sortDir) => {
	sortDir = sortDir === 'ASC' ? 'DESC' : 'ASC';

	if(sortDir === 'ASC') {
		usersList.sort( (a,b) => {
			if(a.last_name.toLowerCase() > b.last_name.toLowerCase()) return 1;
			return -1;
		});
	} else {
		usersList.sort((a, b) => {
			if(a.last_name.toLowerCase() < b.last_name.toLowerCase() ) return 1;
			return -1;
		});
	}
	return {
		usersList: usersList,
		sortDir: sortDir
	}
}
