import React from 'react';

const MainHome = (props) => {
  console.log('mainHome is rendering')
  return (
    <div>
      <button onClick={props.create}>Create</button>
    </div>
  )
}
 export default MainHome;