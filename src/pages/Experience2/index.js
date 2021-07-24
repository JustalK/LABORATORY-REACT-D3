/**
 * Draw a crosshair following the cursor
 * @module Experiences/Experience2
 */

import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'

/**
 * @function Experience
 * Draw a crosshair following the cursor
 * @return {Object} Return the dom
 */
const Experience = () => {
  const canvasRef = useRef()
  const crossX = useRef(-1)
  const crossY = useRef(-1)

  const handleMouseMove = (e) => {
    const [x, y] = d3.pointer(e)
    d3.select(crossX.current).transition().duration(25).attr('y', y)
    d3.select(crossY.current).transition().duration(25).attr('x', x)
  }

  useEffect(() => {
    d3.select(canvasRef.current).on('mousemove', handleMouseMove)
  })

  return (
    <svg className="canvas" ref={canvasRef}>
      <rect ref={crossX} className="red" width="100%" height="1" x="0" y="0" />
      <rect ref={crossY} className="red" width="1" height="100%" x="0" y="0" />
    </svg>
  )
}

export default Experience
