import Head from "next/head";
import SearchHeader from "../components/SearchHeader";
import SearchResults from "../components/SearchResults";
import Response from "../Response";
import { useRouter } from "next/router";

function Search({ results }) {

  const router = useRouter();

  // console.log(results)
  return (
    <div>
      <Head>
        <title>{router.query.term}  - Google Search</title>
        <meta name="search-results" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SearchHeader />

      <SearchResults results={results}/>

    </div>
  )
}

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = false;
  const startIndex = context.query.start || "0";

  const data = useDummyData ? Response : await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
  ).then(response => response.json());

  return {
    props: {
      results: data
    }
  }
}
