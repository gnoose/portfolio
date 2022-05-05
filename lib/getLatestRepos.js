import axios from "axios";

const getLatestRepos = async (data, token) => {
  try {
    const username = data.githubUsername;
    const token = `bearer ${process.env.GITHUB_AUTH_TOKEN}`;
    const res = await axios.post(
      `https://api.github.com/graphql`,
      {
        query: `{
          user(login: "${username}") {
            pinnedItems(first: 6, types: REPOSITORY) {
              nodes {
                ... on Repository {
                  name, description, url, stargazerCount
                }
              }
            }
          }
        }`,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,
        }
      }
    );
    return res.data.data.user.pinnedItems.nodes;
  } catch (err) {
    console.log(err);
  }
};

export default getLatestRepos;
