import React from 'react'
import InfoSectionView from './InfoSectionView'

const InfoSectionContainer = ({id, heading,text}) => {
  return (
<InfoSectionView>
id={id}
heading={heading}
text={text}
</InfoSectionView>
  )
}

export default InfoSectionContainer