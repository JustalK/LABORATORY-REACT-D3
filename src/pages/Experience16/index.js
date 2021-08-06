/**
 * Creating a line shart
 * If you forget to fill (line class) without any color, it will fill up the chart in black
 * @module Experiences/Experience1
 */

import React, { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3'

const margin = { top: 20, right: 20, bottom: 50, left: 70 }

const parseTime = d3.timeParse('%d-%b-%y')

/**
 * @function Experience1
 * Creating a line shart
 * @return {Object} Return the dom
 */
const Experience1 = () => {
  const canvasRef = useRef()
  const [size] = useState({
    width: 1000 - margin.left - margin.right,
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

    const data = await d3.csv('date.csv', (d) => {
      return {
        close: parseFloat(d.close),
        date: parseTime(d.date)
      }
    })

    const x = d3
      .scaleTime()
      .domain(
        d3.extent(data, (d) => {
          return d.date
        })
      )
      .range([0, width])

    const y = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(data, (d) => {
          return d.close
        })
      ])
      .range([height, 0])

    const valueline = d3
      .line()
      .x((d) => {
        return x(d.date)
      })
      .y((d) => {
        return y(d.close)
      })

    canvas
      .append('path')
      .data([data])
      .attr('class', 'line')
      .attr('d', valueline)

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

export default Experience1
