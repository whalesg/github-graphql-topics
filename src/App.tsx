import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// MUIs
import Box from '@mui/material/Box';

// Contexts
import { TopicContextProvider } from './contexts/TopicContextProvider';

// Pages
const Topics = lazy(() => import('./screens/Topics'));

const App = () => (
  <TopicContextProvider>
    <BrowserRouter>
      <Suspense fallback={<Box>Loading page...</Box>}>
        <Routes>
          <Route path='/topics' element={<Topics />} />
          <Route path="*" element={<Navigate to='/topics' />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </TopicContextProvider>
);

export default App;
