/**
 * Testing to add a marker on the image with the zoom control
 * @module Experiences/Experience1
 */

import React, { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'

/**
 * @function Experience1
 * Testing to add a marker on the image with the zoom control
 * @return {Object} Return the dom
 */
const Experience1 = () => {
  const canvasRef = useRef()
  const drawRef = useRef()
  const [size] = useState({ width: 500, height: 500 })

  const handleClick = (e) => {
    const [x, y] = d3.pointer(e)
    drawRef.current
      .append('svg:path')
      .attr('class', 'marker')
      .attr(
        'd',
        'M0,0l-8.8-17.7C-12.1-24.3-7.4-32,0-32h0c7.4,0,12.1,7.7,8.8,14.3L0,0z'
      )
      .attr('transform', `translate(${x},${y}) scale(1.5)`)
  }

  useEffect(() => {
    drawRef.current = d3
      .select(canvasRef.current)
      .call(
        d3.zoom().on('zoom', (event) => {
          drawRef.current.attr('transform', event.transform)
        })
      )
      .append('g')
      .on('click', handleClick)
    const { width, height } = canvasRef.current.getBoundingClientRect()
    drawRef.current
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
