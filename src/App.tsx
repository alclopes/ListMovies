import { useEffect, useState } from 'react';

import './styles/global.scss';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

export function App() {

  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleClickButton(id: number) {
    setSelectedGenreId(id)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar
        selectedGenreId={selectedGenreId}
        handleClickButton={handleClickButton}
      />
      <div className='container'>
        <Content selectedGenreId={selectedGenreId} />
      </div>
    </div>
  );
}