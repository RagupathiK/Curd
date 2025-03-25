import React from 'react'

// export default function ChildPage(props) {
export default function ChildPage({data}) {


  return (
    <div>
        <h1>ChildPage</h1>
        {/* <h1>{props.data.Name}</h1> */}
        {/* <h1>{data.Name}</h1> */}
        <h1>{data.Arr}</h1>
    </div>
  )
}
