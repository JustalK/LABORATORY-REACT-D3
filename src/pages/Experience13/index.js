/**
 * Create a bar graph with axis (compare to experience 5)
 * @module Experiences/Experience5
 */

import React, { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'

const margin = { top: 20, right: 20, bottom: 30, left: 40 }

/**
 * @function Experience5
 * Create a bar graph with axis (compare to experience 5)
 * @return {Object} Return the dom
 */
const Experience = () => {
  const canvasRef = useRef()
  const [size] = useState({
    width: 500 - margin.left - margin.right,
    height: 500 - margin.top - margin.bottom
  })

  const init = async () => {
    const { width, height } = size
    const canvas = d3
      .select(canvasRef.current)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`)

    const data = await d3.csv('numbers.csv', (d) => {
      return {
        name: d.name,
        value: parseInt(d.value, 10)
      }
    })

    const x = d3.scaleBand().range([0, width]).padding(0.3)
    const y = d3.scaleLinear().range([height, 0])

    x.domain(
      data.map((d) => {
        return d.name
      })
    )
    y.domain([
      0,
      d3.max(data, (d) => {
        return d.value
      })
    ])

    canvas
      .selectAll('.bar')
      .data(data)
      .join('g')
      .append('rect')
      .attr('x', (d) => {
        return x(d.name)
      })
      .attr('width', x.bandwidth())
      .attr('y', (d) => {
        return y(d.value)
      })
      .attr('height', (d) => {
        return height - y(d.value)
      })

    canvas
      .append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x))

    canvas.append('g').call(d3.axisLeft(y))
  }

  useEffect(() => {
    init()
  })

  return <svg className="canvas" ref={canvasRef}></svg>
}

export default Experience
