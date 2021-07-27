/**
 * Testing to zoom and move the image
 * @module Experiences/Experience1
 */

import React, { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'

/**
 * @function Experience1
 * Testing to zoom and move the image
 * @return {Object} Return the dom
 */
const Experience1 = () => {
  const canvasRef = useRef()
  const [size] = useState({ width: 500, height: 500 })

  useEffect(() => {
    const canvas = d3
      .select(canvasRef.current)
      .call(
        d3.zoom().on('zoom', (event) => {
          canvas.attr('transform', event.transform)
        })
      )
      .append('g')
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
