/**
 * Creating a bar chart in a svg
 * @module Experiences/Experience4
 */

import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'

const data = [4, 8, 15, 16, 23, 42]

const y = d3
  .scaleBand()
  .domain(d3.range(data.length))
  .range([0, 20 * data.length])

const x = d3
  .scaleLinear()
  .domain([0, d3.max(data)])
  .range([0, 420])

/**
 * @function Experience
 * Creating a bar chart in a svg
 * @return {Object} Return the dom
 */
const Experience = () => {
  const canvasRef = useRef()

  useEffect(() => {
    const { width } = canvasRef.current.getBoundingClientRect()
    const canvas = d3
      .select(canvasRef.current)
      .attr('width', width)
      .attr('height', y.range()[1])
      .attr('text-anchor', 'end')

    const bar = canvas
      .selectAll('g')
      .data(data)
      .join('g')
      .attr('transform', (d, i) => `translate(0,${y(i)})`)

    bar
      .append('rect')
      .attr('fill', 'steelblue')
      .attr('width', x)
      .attr('height', y.bandwidth() - 1)

    bar
      .append('text')
      .attr('fill', 'white')
      .attr('x', (d) => x(d) - 3)
      .attr('y', (y.bandwidth() - 1) / 2)
      .attr('dy', '0.35em')
      .text((d) => d)
  })

  return <svg className="canvas" ref={canvasRef}></svg>
}

export default Experience
