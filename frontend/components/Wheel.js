import React from 'react'
import { connect } from 'react-redux'

// import the required actions
import { moveClockwise, moveCounterClockwise } from '../state/action-creators'

// key for state should be "wheel"

const mapStateToProps = state => {
  return {
    wheel: state.wheel
  }
}

function Wheel(props) {
  console.log(` === Props === `)
  console.log(props);
  console.log(` ============= `)
  // console.log(`wheel value:`, props.wheel)

  const handleClockwise = e => {
    e.preventDefault();
    
    let newPosition = props.wheel + 1;

    if (newPosition > 5) {
      newPosition = 0;
    }
    
    console.log(`component: handle_clockwise triggered...`)
    console.log(`component: new value is ${newPosition}`);
    props.moveClockwise(newPosition);
  };

  return (
    <div id="wrapper">
      <div id="wheel">
        <div className="cog active" style={{ "--i": 0 }}>B</div>
        <div className="cog" style={{ "--i": 1 }}></div>
        <div className="cog" style={{ "--i": 2 }}></div>
        <div className="cog" style={{ "--i": 3 }}></div>
        <div className="cog" style={{ "--i": 4 }}></div>
        <div className="cog" style={{ "--i": 5 }}></div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={ handleClockwise } >Counter clockwise</button>
        <button id="clockwiseBtn" onClick={ handleClockwise } >Clockwise</button>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, { moveClockwise, moveCounterClockwise })(Wheel)
