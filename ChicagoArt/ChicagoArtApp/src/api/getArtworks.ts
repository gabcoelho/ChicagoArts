import { Artwork } from './Models'

const getArtworks = async (
    pageNumber: number = 1,
    pageSize: number = 20,
  ): Promise<Artwork[] | null> => {
    try {
      const response = await fetch(
        `https://api.artic.edu/api/v1/artworks?page=${pageNumber}&limit=${pageSize}`,
      )
      if (!response.ok) {
        throw new Error('Network response was not ok.')
      }
      const data = await response.json()
      if (!data || !data.data) throw Error('Empty data')
      const filteredData: Artwork[] = data.data.map((artwork: any) => {
        return {
          id: artwork.id,
          title: artwork.title,
          placeOrigin: artwork.place_origin,
          artistTitle: artwork.artist_title,
          img: {
            imgCode: artwork.image_id,
            baseUrl: data.config.iiif_url,
          },
        }
      })
      // console.log(filteredData)
      return filteredData
    } catch (error) {
      console.log(error, 'Unexpected error getting data')
      return null
    }
  }
  
  export default getArtworks
