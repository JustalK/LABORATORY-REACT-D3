/**
 * Testing to center an image in the svg
 * @module Experiences/Experience1
 */

import React, { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'

/**
 * @function Experience1
 * Testing to center an image in the svg
 * @return {Object} Return the dom
 */
const Experience1 = () => {
  const canvasRef = useRef()
  const [size] = useState({ width: 500, height: 500 })

  useEffect(() => {
    const canvas = d3.select(canvasRef.current)
    const { width, height } = canvasRef.current.getBoundingClientRect()
    canvas
      .append('image')
      .attr('xlink:href', './test.jpg')
      .attr('width', size.width)
      .attr('height', size.height)
      .attr('x', (width - size.width) / 2)
      .attr('y', (height - size.height) / 2)
  })

  return <svg className="canvas" ref={canvasRef}></svg>
}

export default Experience1
