export const getDataByQueryParams = (data, query) => {
    const { continent, country, is_open_to_public } = query

    if (continent) {
        data = data.filter((data) => 
            data.continent.toLowerCase() === continent.toLowerCase()
        )
    }

    if (country) {
        data = data.filter((data) => 
            data.country.toLowerCase() === country.toLowerCase()
        )
    }

    if (is_open_to_public !== undefined) {
        data = data.filter((data) => 
            data.is_open_to_public === JSON.parse(is_open_to_public)            
        )
    }

    return data
}