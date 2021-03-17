import './App.css';

import { useState, useCallback } from 'react';

import axios from 'axios';
import { Route } from 'react-router-dom';
import NewsPage from './components/NewsPage';

function App() {
  return <Route path="/:category?" component={NewsPage} />;
}

export default App;
