/**
 * Show an histogram showing how many time a number appears
 * @module Experiences/Experience1
 */

import React, { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'

const margin = { top: 10, right: 30, bottom: 30, left: 40 }

/**
 * @function Experience1
 * Show an histogram showing how many time a number appears
 * @return {Object} Return the dom
 */
const Experience1 = () => {
  const canvasRef = useRef()
  const [size] = useState({
    width: 500 - margin.left - margin.right,
    height: 500 - margin.top - margin.bottom
  })

  useEffect(() => {
    const { width, height } = size
    const canvas = d3
      .select(canvasRef.current)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`)
    d3.csv('/numbers_2.csv').then((data) => {
      const x = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.price) * 1 + 5])
        .range([0, width])
      canvas
        .append('g')
        .attr('transform', `translate(0, ${height})`)
        .call(d3.axisBottom(x))
      const histogram = d3
        .histogram()
        .value((d) => {
          return d.price
        })
        .domain(x.domain())
        .thresholds(x.ticks(20))

      const bins = histogram(data)

      const y = d3.scaleLinear().range([height, 0])
      y.domain([
        0,
        d3.max(bins, (d) => {
          return d.length
        })
      ])
      canvas.append('g').call(d3.axisLeft(y))

      canvas
        .selectAll('rect')
        .data(bins)
        .join('rect')
        .attr('x', 1)
        .attr('transform', (d) => {
          return `translate(${x(d.x0)} , ${y(d.length)})`
        })
        .attr('width', (d) => {
          return x(d.x1) - x(d.x0) - 1
        })
        .attr('height', (d) => {
          return height - y(d.length)
        })
        .style('fill', '#69b3a2')
    })
  })

  return <div className="canvas" ref={canvasRef}></div>
}

export default Experience1
