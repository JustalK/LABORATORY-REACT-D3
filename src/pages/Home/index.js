/**
 * The module managing the home page
 * @module Home
 */

import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'

/**
 * @function Home
 * Create the component Home
 * @return {Object} Return the dom of the Home page
 */
const Home = () => {
  const canvasRef = useRef()

  useEffect(() => {
    const canvas = d3.select(canvasRef.current)
    canvas
      .append('image')
      .attr('xlink:href', './test.jpg')
      .attr('width', 500)
      .attr('height', 500)
      .attr('x', 0)
      .attr('y', 0)
  })

  return (
    <>
      <svg className="canvas" ref={canvasRef}></svg>
    </>
  )
}

export default Home
