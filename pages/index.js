import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";
import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
import LatestCode from "../components/LatestCode";
import Hero from "../components/Hero";

export default function Home({repositories}) {
  return (<ContainerBlock
    title="Lin Hong - Engineer, Programmer, Developer"
    description="Fullstack Web and Blockchain engineer"
  >
    <Hero/>
    <FavouriteProjects/>
    <LatestCode repositories={repositories}/>
  </ContainerBlock>);
}

export const getServerSideProps = async () => {
  console.log(process.env.GITHUB_AUTH_TOKEN);
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);

  return {
    props: {
      repositories,
    },
  };
};
