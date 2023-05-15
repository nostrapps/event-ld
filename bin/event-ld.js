#!/usr/bin/env node

import fs from 'fs'
import { pipeline } from 'stream'
import { createInterface } from 'readline'
import eventld from '../index.js'
import path from 'path'

// Convert a piped in or command line argument event to JSON-LD
const convertEventToJsonLD = (event, writeToFile = false) => {
  const parsedEvent = JSON.parse(event)
  const jsonLD = eventld(parsedEvent)

  if (writeToFile) {
    const eventDirectory = path.join('./.well-known/nostr/event', parsedEvent.id)
    fs.mkdirSync(eventDirectory, { recursive: true })

    const filePath = path.join(eventDirectory, 'index.json')
    fs.writeFileSync(filePath, JSON.stringify(jsonLD, null, 2))
  } else {
    console.log(JSON.stringify(jsonLD, null, 2))
  }
}

// Check if --file is passed as an argument
const writeToFile = process.argv.includes('--file')

// If there are command line arguments, convert them
if (process.argv.length > 2 && process.argv[2] !== '--file') {
  const event = process.argv[2]
  convertEventToJsonLD(event, writeToFile)
} else {
  // If there are no command line arguments, read from stdin
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  })

  rl.on('line', (line) => {
    convertEventToJsonLD(line, writeToFile)
  })

  // If there is no input within 1 second, exit
  setTimeout(() => {
    process.exit()
  }, 1000)
}
