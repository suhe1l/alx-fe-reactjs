import axios from "axios";

export const fetchAdvancedUserData = async ({ username, location, minRepos }) => {
    try {
        let query = '';
        if (username) query += `user:${username}`;
        if (location) query += ` location:${location}`;
        if (repos) query += ` repos:>${minRepos}`;
    
        const response = await axios.get(
          `https://api.github.com/search/users?q=${query}`
        );
        return response.data;
      } catch (error) {
        throw new Error('Failed to fetch users');
    }
};