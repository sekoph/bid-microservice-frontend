import { RouterProvider } from 'react-router-dom'
import router from './router'
import { ReduxProvider } from "@/redux/provider";
import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";


const url = `${import.meta.env.VITE_API_URL}/products/graphql`;
const client = new ApolloClient({
  uri: url,
  cache: new InMemoryCache(),
});



function App() {
  return (
    <>
      <ReduxProvider>
          <ApolloProvider client={client}>
            <RouterProvider router={router}/>
          </ApolloProvider>
      </ReduxProvider>
    </>
  )
}

export default App
