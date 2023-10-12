import { Fragment } from 'react';
import './App.css'
import HomePage from './containers/HomePage/HomePage';
import Header from './containers/HomePage/Header/Header';


function App() {

  return (
    <Fragment>
      <div className='max-w-full h-full w-full'>
        <div className='mb-[35px]'>
          <Header />
        </div>
        <HomePage />
      </div>
    </Fragment>
  )
}

export default App
