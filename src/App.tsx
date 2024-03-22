import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from './redux/slices/theme'
import { store } from './redux/store';

function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state: ReturnType<typeof store.getState>) => state.theme);

  return (
    <main className='main-container'>
      <p>Theme: {theme.currentTheme}</p>
      <div className='buttons-container'>
        <button type="button" onClick={() => dispatch(setTheme({ theme: 'dark' }))}>Set Dark Mode</button>
        <button type="button" onClick={() => dispatch(setTheme({ theme: 'light' }))}>Set Light Mode</button>
      </div>
    </main>
  )
}

export default App
