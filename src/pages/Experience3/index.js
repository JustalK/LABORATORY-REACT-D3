/**
 * Testing to center an image in the svg
 * @module Experiences/Experience1
 */

import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'

const data = [4, 8, 15, 16, 23, 42]

/**
 * @function Experience1
 * Testing to center an image in the svg
 * @return {Object} Return the dom
 */
const Experience1 = () => {
  const barRef = useRef()
  const canvasRef = useRef()

  useEffect(() => {
    const { width } = canvasRef.current.getBoundingClientRect()
    const barNew = d3
      .select(barRef.current)
      .selectAll('div')
      .data(data)
      .join('div')
      .attr('class', 'bar')

    const f = d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .range([0, width])

    barNew.style('width', (d) => `${f(d)}px`)
    barNew.text((d) => d)
  })

  return (
    <div className="canvas" ref={canvasRef}>
      <div className="bars" ref={barRef} />
    </div>
  )
}

export default Experience1
