import React from 'react'
import ReactDOM from 'react-dom/client'

import { QueryClientProvider, QueryClient } from 'react-query'
import { Routes } from './routes'
import GlobalStyles from './styles/GlobalStyles'

const queryClient= new QueryClient({
  defaultOptions:{
    queries:{
      staleTime: 5000,
      cacheTime: 1000 * 60 * 60 * 15,
      retry: 10,
      retryDelay: 1000,
      refetchOnWindowFocus: true,
    }
  }
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
     <GlobalStyles />
     <Routes />
     </QueryClientProvider>
  </React.StrictMode>
)
