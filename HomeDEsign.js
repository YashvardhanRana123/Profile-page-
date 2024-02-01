import React from 'react'
import Profile from '../Pages/ProfileSetup/Profile';
import BankDetail from '../Pages/ProfileSetup/BankDetail';


export const HomeDEsign = () => {
  return (
        <div>
           <div className='wrapper'>
        <header className='header'>
          <h4>Profile Setup</h4>
        </header>
        <article className='main'>
          <p><BankDetail/></p>
        </article>
        <aside className='aside aside1'>
          <h5><a href='' style={{textDecoration:'none', color:'black'}}>Bank Detail</a></h5>
          <h5><a href='' style={{textDecoration:'none',color:'black'}}>Bussiness Information</a></h5>
        </aside>
        <aside className='aside aside3'>
          <h1>audeet</h1>
        </aside>
      </div>
        </div>
      )
}
export default HomeDEsign;