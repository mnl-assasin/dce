let networkItems = null;

//
// network list
//
const getItems = async () => {
	if (networkItems === null) {
	  // fetch items first
   
    networkItems = [
	    {
	      _id: '_server_Mainet', 
	      title: 'Mainet',
	      info: 'chinese server',
	    },
	    {
	      _id: '_server_Ropstain', 
	      title: 'Ropstain testnet',
	      info: 'di ko aalam',
	    }
	  ]
	}

  return networkItems
}

export const getNetworkById = (_id) => {
	const items = getItems()
  if (!(items.length > 0)) {
  	return null
  }

  return items.find((item, i) => {
  	return items._id === _id
  })

}