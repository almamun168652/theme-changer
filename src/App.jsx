
import './App.css'
import { useTheme } from './Hooks/useMode'

function App() {

  const { changeTheme , mode } = useTheme();


  return (
    <>
      <div className='p-10 w-1/3 mx-auto mt-10 rounded-xl bg-slate-200 dark:bg-slate-700'>
        <h1 className='text-2xl text-black dark:text-white font-bold mb-4'>Content Heading</h1>
        <p className='dark:text-slate-200'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, voluptates nostrum. Ab veniam laudantium quam!</p>
      </div>
      <div>
        <button onClick={changeTheme} className='mt-10 px-8 py-1 bg-black dark:bg-white dark:text-black rounded-lg text-white'>Make {mode === 'dark' ? 'light' : 'dark'}</button>
      </div>
    </>
  )
}

export default App
