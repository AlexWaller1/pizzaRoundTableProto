import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Pizza from "./pages/Pizza";
import RouterLinksAndNavLinks from "./components/RouterLinksAndNavLinks";

// cache is a storage layer where we can store data in order to allow
// for faster data retrieval and more ease on the server
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        businessPartners: {
          merge(existing, incoming) {
            return incoming;
          }
        },
        pizzas: {
          merge(existing, incoming) {
            return incoming;
          }
        }
      }
    }
  }
});
// we define the types of queried data that we want saved, which right now is pizzas and
// businessPartners

const client = new ApolloClient({
  uri: "http://localhost:3021/graphql",
  cache
});
// client is where we specify to our react app where we are retrieving data,
// and what our cache is

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        {/* must provide our client variable as prop for ApolloProvider component */}
        <Router>
          <Header />
          <div className="container">
            <RouterLinksAndNavLinks />
          </div>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
