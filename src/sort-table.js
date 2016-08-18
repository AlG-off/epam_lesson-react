export let sortByLastName = (userList, sortDir) => {
	let reverseSortDir =  sortDir === 'DESC' ? 'ASC' : 'DESC';

	(sortDir === 'ASC') && userList.sort( (a,b) => a['last_name'] > b['last_name']);
	(sortDir === 'DESK') && userList.sort( (a,b) => a['last_name'] < b['last_name']);

	return {
		userList:userList,
		sortDir:reverseSortDir
	}
}
