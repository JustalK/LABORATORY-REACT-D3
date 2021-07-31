/**
 * Testing to center an image in the svg
 * @module Experiences/Experience1
 */

import React, { useEffect, useRef, useState } from 'react'
import ReactDOMServer from 'react-dom/server'
import * as d3 from 'd3'
import Children from './Children'

/**
 * @function Experience1
 * Testing to center an image in the svg
 * @return {Object} Return the dom
 */
const Experience1 = () => {
  const canvasRef = useRef()
  const tooltipRef = useRef()
  const [size] = useState({ width: 500, height: 500 })

  const handleMouseMove = (e) => {
    const [x, y] = d3.pointer(e)
    tooltipRef.current
      .style('left', `${(x * 100) / size.width}%`)
      .style('top', `${(y * 100) / size.width}%`)
  }

  useEffect(() => {
    /** This way of cleaning does not remove the event, so careful * */
    canvasRef.current.innerHTML = ''
    const canvas = d3.select(canvasRef.current).attr('class', 'centered')
    const relative = canvas.append('div').attr('class', 'relative')

    const svg = relative
      .append('svg')
      .attr('width', size.width)
      .attr('height', size.height)
      .on('mousemove', handleMouseMove)

    svg
      .append('image')
      .attr('xlink:href', './test.jpg')
      .attr('width', size.width)
      .attr('height', size.height)

    tooltipRef.current = relative
      .append('div')
      .style('left', '50%')
      .style('top', '50%')
      .style('background', 'white')
      .style('position', 'absolute')
      .style('pointer-events', 'none')
      .html(ReactDOMServer.renderToStaticMarkup(<Children />))
  })

  return <div className="canvas" ref={canvasRef}></div>
}

export default Experience1
