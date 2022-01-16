import React from 'react'
// require('../SVG/Tags.svg');
// require('../SVG/money.svg');
// require('../SVG/Statistics.svg');

let importAll=(requireContext:__WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('Icon',true,/\.svg$/))} catch(error) {console.log(error)}


type Props={
    name:string
}

const Icon =(props:Props)=>{
  return(
        <svg className="icon">
             <use xlinkHref={'#'+props.name}/>
        </svg>
  )
}

export default Icon