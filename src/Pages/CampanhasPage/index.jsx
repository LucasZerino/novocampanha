import React from 'react'
import CampanhaBody from '../../Components/Bodys/CampanhaBody'
import PageHeader from '../../Components/PageHeader'

const CampanhasPage = () => {
  return (
    <div className="page-wrapper compact-wrapper" id="pageWrapper">
      <PageHeader/>
      <CampanhaBody/>
    </div>
  )
}

export default CampanhasPage