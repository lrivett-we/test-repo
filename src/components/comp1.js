import React from 'react'
import SbEditable from 'storyblok-react'

const Comp1 = (props) => (
  <SbEditable content={props.blok}>
    <div className="col-4">
      <h2 style={{color: 'red'}}>{props.blok.name}</h2>
    </div>
  </SbEditable>
)

export default Comp1