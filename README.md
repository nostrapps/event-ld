

<div align="center">  
  <h1>event-ld</h1>
</div>

<div align="center">  
<i>event-ld</i>
</div>

---

<div align="center">
<h4>Documentation</h4>
</div>

---

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/nostrapps/event-ld/blob/gh-pages/LICENSE)
[![npm](https://img.shields.io/npm/v/event-ld)](https://npmjs.com/package/event-ld)
[![npm](https://img.shields.io/npm/dw/event-ld.svg)](https://npmjs.com/package/event-ld)
[![Github Stars](https://img.shields.io/github/stars/nostrapps/event-ld.svg)](https://github.com/nostrapps/event-ld/)

# EventLD: Decentralized JSON-LD Representation of Nostr Events

Welcome to the EventLD project! We provide a simple and elegant way of transforming [Nostr](https://github.com/fiatjaf/nostr) events into JSON-LD format, a widely used standard for structuring data on the web. 

## Overview

EventLD offers a clean, streamlined approach to representing Nostr events in JSON-LD format. By leveraging JSON-LD, EventLD enhances the interoperability and extensibility of Nostr events, making them easier to integrate with different systems and applications. 

The JSON-LD produced by EventLD is cleanly structured, making it easy to understand and use. It follows best practices for JSON-LD design, ensuring a high degree of compatibility with JSON-LD processors and tools.

## Decentralization & Domain Independence

One of the key strengths of EventLD is its support for decentralization and domain independence. By storing the JSON-LD representation of each Nostr event at `/.well-known/nostr/event/<hash>/` on the origin server, EventLD allows each event to be accessed independently of any centralized infrastructure. This method aligns with the principles of the decentralized web, enhancing privacy, resilience and control over data.

This decentralization approach also takes the pressure off other Nostr relays. Instead of relying on a single point of failure, each event lives on its own and can be accessed from its origin server. 

## Getting Started

Here's a simple example of how to use EventLD to transform a Nostr event into JSON-LD format:

```javascript
import eventld from './eventld'

const event = '{"id":"6e2235816bf0f1fc0f6c9859bd8fdf073efb450e08d43293775fac752c1ffd20","pubkey":"82b36089920375da7c0e900799a7c22d57afa41447261406fa5de41d81884618","created_at":1679239395,"kind":7,"tags":[["e","636059ec807249787dd28939246139f0753bc668cfa41501c9cbd394e82e6946"],["p","82b36089920375da7c0e900799a7c22d57afa41447261406fa5de41d81884618"]],"content":" + ","sig":"0150628586070f45a7cb4cdd629db5aa49e74934d95367917766bae539f1360bbce47f21b34d26213df89e2f9ce7d6c63b266cbf15349a31946d4ce3d7e73608"}'

console.log(JSON.stringify(eventld(JSON.parse(event)), null, 2))
```

This script will parse the input event, convert it into a JSON-LD formatted object using the `eventld` function, and then print the JSON-LD object to the console.

We hope you find EventLD useful for your projects. If you have any questions or feedback, please feel free to contribute to this project. Enjoy the decentralized web!


## License

- MIT
