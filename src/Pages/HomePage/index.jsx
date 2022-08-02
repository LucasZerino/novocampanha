import React from 'react'
import HomeBody from '../../Components/Bodys/HomeBody'
import PageHeader from '../../Components/PageHeader'

const HomePage = () => {
  return (
    <div className="page-wrapper compact-wrapper" id="pageWrapper">
        <PageHeader/>
        <HomeBody/>
    </div>
  )
}

export default HomePage