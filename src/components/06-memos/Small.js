// import React,{memo} from 'react'

// export const Small = memo(({value}) => {
  
//   console.log('me volvi a llamar');
//     return (
//     <small>
// {value}
//     </small>
//   )
// })

import React from 'react'

export const Small = React.memo(({value}) => {
  
  console.log('me volvi a llamar');
    return (
    <small>
{value}
    </small>
  )
});

