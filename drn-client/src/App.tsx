import { ApolloProvider } from '@apollo/client';
import client from './services/graphql/client';
import Routes from './routes';

const App = () => {
  return (
    <ApolloProvider client={ client }>
      <div className="flex flex-col min-h-screen bg-orange-100">
        <div className="h-16 bg-gray-400">SOME HEADER WILL BE ADDED</div>
        <div className="flex flex-col grow w-[1200px] m-auto my-5 rounded-2xl bg-white">
          <Routes />
        </div>
        <div className="h-16 bg-gray-400">SOME FOOTER WILL BE ADDED</div>
      </div>
    </ApolloProvider>
  )
}

export default App
