import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = process.env.REACT_APP_API_URL;
// TODO: All of your API requests should be in this file
// See the README file for more information about the APIs you would need to use

/**
 * A base method to handle get requests based on path param
 * @param {string} path API endpoint to call
 * @returns a API request to return details or catch an error
 */
const fetchRequest = async (path, params) =>
  await axios.get(`${API_URL}${path}?api_key=${API_KEY}${params}`);

/**
 * A Generic method to fetch movie details based on path param
 * @param {string} path used to determin the API endpoint to call
 * @returns return details from API or errors an error on the console.
 */
export const getMovieDetails = async (path, params = "") => {
  if (!path || path === "") {
    console.error("The value of `path` was undefined");
    return { results: [], genres: [], total_results: 0 };
  }
  try {
    const { data } = await fetchRequest(path, params);
    return data;
  } catch (error) {
    console.error(`Error: ${error}`);
    return { results: [], genres: [], total_results: 0 };
  }
};
