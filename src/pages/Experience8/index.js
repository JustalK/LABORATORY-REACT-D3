/**
 * Create a brush and limiting the area for the drawing
 * @module Experiences/Experience8
 */

import React, { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'

/**
 * @function Experience1
 * Create a brush and limiting the area for the drawing
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
    canvas.append('g').call(
      d3.brush().extent([
        [(width - size.width) / 2, (height - size.height) / 2],
        [
          (width - size.width) / 2 + size.width,
          (height - size.height) / 2 + size.height
        ]
      ])
    )
  })

  return <svg className="canvas" ref={canvasRef}></svg>
}

export default Experience1
