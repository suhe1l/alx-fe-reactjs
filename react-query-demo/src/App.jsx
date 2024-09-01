import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import PostsComponent from './components/PostsComponent';

const QueryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={QueryClient}>
      <PostsComponent />
    </QueryClientProvider>
  );
}

export default App;
