/**
 * Understanding scaleLinear, scaleTime (basic)
 * @module Experiences/Experience14
 */

import React from 'react'
import * as d3 from 'd3'

const datas = [0, 2, 3, 5, 7.5, 9, 10]

/**
 * @function Experience1
 * Understanding scaleLinear, scaleTime (basic)
 * @return {Object} Return the dom
 */
const Experience1 = () => {
  const scaleLinear = () => {
    // Interpolate data from 0 to 10 into 0 to 600
    const scaleDatas = d3.scaleLinear().domain([0, 10]).range([0, 600])
    console.log(
      datas,
      scaleDatas(0),
      scaleDatas(1),
      scaleDatas(10),
      scaleDatas(20)
    )
  }

  const scaleSqrt = () => {
    // Interpolate data from 0 to 10 into 0 to 600
    const scaleDatas = d3.scaleSqrt().domain([0, 10]).range([0, 600])
    console.log(datas, scaleDatas(0), scaleDatas(1), scaleDatas(10))
  }

  const scaleTime = () => {
    // Interpolate data from 0 to 10 into 0 to 600
    const scaleDatas = d3
      .scaleTime()
      .domain([new Date(2016, 0, 1), new Date(2017, 0, 1)])
      .range([0, 700])
    console.log(
      datas,
      scaleDatas(new Date(2016, 0, 1)),
      scaleDatas(new Date(2016, 6, 1)),
      scaleDatas(new Date(2017, 0, 1))
    )
  }

  const clampLinear = () => {
    // Any data higher or smaller than the domain will be capped
    const scaleDatas = d3
      .scaleLinear()
      .domain([0, 10])
      .range([0, 600])
      .clamp(true)
    console.log(
      datas,
      scaleDatas(0),
      scaleDatas(1),
      scaleDatas(10),
      scaleDatas(20)
    )
  }

  const extendLinear = () => {
    const scaleDatas = d3.scaleLinear().domain(d3.extent(datas)).range([0, 600])
    console.log(
      datas,
      scaleDatas(0),
      scaleDatas(1),
      scaleDatas(10),
      scaleDatas(20)
    )
  }

  return (
    <>
      <div>
        <div>Linear interpolation (nice for bar, graph...)</div>
        <button onClick={scaleLinear}>Testing scale linear</button>
      </div>
      <div>
        <div>Square interpolation (nice for setting radius, surface...)</div>
        <button onClick={scaleSqrt}>Testing scale sqrt</button>
      </div>
      <div>
        <div>Time interpolation (nice for using date...)</div>
        <button onClick={scaleTime}>Testing scale time</button>
      </div>
      <div>
        <div>Linear interpolation with clamp</div>
        <button onClick={clampLinear}>Testing scale linear with clamp</button>
      </div>
      <div>
        <div>Linear interpolation with extent</div>
        <button onClick={extendLinear}>Testing scale linear with extent</button>
      </div>
    </>
  )
}

export default Experience1
