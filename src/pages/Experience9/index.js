/**
 * Saving the square made with the brush
 * @module Experiences/Experience9
 */

import React, { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'

/**
 * @function Experience
 * Saving the square made with the brush
 * @return {Object} Return the dom
 */
const Experience1 = () => {
  const canvasRef = useRef()
  const square = useRef([])
  const [size] = useState({ width: 500, height: 500 })

  const onEnd = (brush) => {
    square.current
      .append('rect')
      .attr('width', Math.abs(brush.selection[0][0] - brush.selection[1][0]))
      .attr('height', Math.abs(brush.selection[0][1] - brush.selection[1][1]))
      .attr('x', Math.min(brush.selection[0][0], brush.selection[1][0]))
      .attr('y', Math.min(brush.selection[0][1], brush.selection[1][1]))
      .style('fill', 'white')
      .style('fill-opacity', 0.1)
      .style('stroke', 'white')
      .style('stroke-width', '1px')
  }

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
      d3
        .brush()
        .extent([
          [(width - size.width) / 2, (height - size.height) / 2],
          [
            (width - size.width) / 2 + size.width,
            (height - size.height) / 2 + size.height
          ]
        ])
        .on('end', onEnd)
    )
    square.current = canvas.append('g')
  })

  return <svg className="canvas" ref={canvasRef}></svg>
}

export default Experience1
