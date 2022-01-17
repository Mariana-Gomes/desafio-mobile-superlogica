import axios from 'axios';


export const getCharacters = async(page: number) => {
    const result = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
    return result.data.results;
}

export const filterCharacters = async(name:string) => {
    const result = await axios.get(`https://rickandmortyapi.com/api/character/?name=${name}`);
    return result.data.results;
}

export async function getEpisodesByUrl(url: string) {
    const result = await axios.get(url);
    return result.data
}

export async function getCharacterByUrl(url: string) {
    const result = await axios.get(url);
    return result.data
}