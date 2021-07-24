/**
 * Testing to get the data from a csv
 * @module Experiences/Experience5
 */

import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'

/**
 * @function Experience5
 * Testing to get the data from a csv
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

    const y = d3
      .scaleBand()
      .domain(data.map((d) => d.name))
      .range([0, 20 * data.length])

    const x = d3
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
      .attr('transform', (d) => `translate(0,${y(d.name)})`)

    bar
      .append('rect')
      .attr('fill', 'steelblue')
      .attr('width', (d) => x(d.value))
      .attr('height', y.bandwidth() - 1)

    bar
      .append('text')
      .attr('fill', 'white')
      .attr('x', (d) => x(d.value) - 3)
      .attr('y', y.bandwidth() / 2)
      .attr('dy', '0.35em')
      .text((d) => d.value)
  }

  useEffect(() => {
    init()
  })

  return <svg className="canvas" ref={canvasRef}></svg>
}

export default Experience
