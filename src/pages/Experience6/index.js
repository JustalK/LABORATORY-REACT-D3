/**
 * Rotating a chart
 * @module Experiences/Experience5
 */

import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'

/**
 * @function Experience6
 * Rotating a chart
 * @return {Object} Return the dom
 */
const Experience = () => {
  const canvasRef = useRef()

  const init = async () => {
    const data = await d3.csv('numbers.csv', (d) => {
      return {
        name: d.name,
        value: parseInt(d.value, 10)
      }
    })
    const { width } = canvasRef.current.getBoundingClientRect()

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.name))
      .range([0, 20 * data.length])

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .range([0, 420])

    const canvas = d3
      .select(canvasRef.current)
      .attr('width', width)
      .attr('height', y.range()[1])
      .attr('text-anchor', 'end')

    const bar = canvas
      .selectAll('g')
      .data(data)
      .join('g')
      .attr('transform', (d) => `translate(${x(d.name)})`, 0)

    bar
      .append('rect')
      .attr('fill', 'steelblue')
      .attr('y', (d) => 420 - y(d.value))
      .attr('height', (d) => y(d.value))
      .attr('width', x.bandwidth() - 1)

    bar
      .append('text')
      .attr('fill', 'white')
      .attr('y', (d) => 420 - y(d.value) + 20)
      .attr('x', x.bandwidth() / 2 + 8)
      .attr('dy', '0.35em')
      .text((d) => d.value)
  }

  useEffect(() => {
    init()
  })

  return <svg className="canvas" ref={canvasRef}></svg>
}

export default Experience
