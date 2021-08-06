/**
 * Testing the scaleBand
 * @module Experiences/Experience15
 */

import React from 'react'
import * as d3 from 'd3'

const datas = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']

/**
 * @function Experience1
 * Testing the scaleBand
 * @return {Object} Return the dom
 */
const Experience1 = () => {
  const scaleBand = () => {
    // Interpolate data from 0 to 10 into 0 to 600
    const scaleDatas = d3
      .scaleBand()
      .domain(['Mon', 'Tue', 'Wed', 'Thu', 'Fri'])
      .range([0, 200])
    const sizeBand = scaleDatas.bandwidth()
    console.log(
      datas,
      scaleDatas('Mon'),
      scaleDatas('Tue'),
      scaleDatas('Fri'),
      sizeBand
    )
    scaleDatas.paddingInner(0.05)
    console.log(
      datas,
      scaleDatas('Mon'),
      scaleDatas('Tue'),
      scaleDatas('Fri'),
      sizeBand
    )
  }

  return (
    <>
      <div>
        <div>Bandwidth for bar chart</div>
        <button onClick={scaleBand}>Testing scaleBand</button>
      </div>
    </>
  )
}

export default Experience1
