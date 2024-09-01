import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import PostsComponent from './components/PostsComponent';

const QueryClientInstance = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={QueryClientInstance}>
      <PostsComponent />
    </QueryClientProvider>
  );
}

export default App;
