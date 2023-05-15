#!/usr/bin/env node

export default function eventld (event) {
  const jsonLD = {
    '@id': '',
    mainEntity: {
      '@context': 'https://w3id.org/nostr/context',
      '@id': 'nostr:event:' + event.id,
      '@type': 'Event',
      ...event
    }
  }
  return jsonLD
}

const event = '{"id":"6e2235816bf0f1fc0f6c9859bd8fdf073efb450e08d43293775fac752c1ffd20","pubkey":"82b36089920375da7c0e900799a7c22d57afa41447261406fa5de41d81884618","created_at":1679239395,"kind":7,"tags":[["e","636059ec807249787dd28939246139f0753bc668cfa41501c9cbd394e82e6946"],["p","82b36089920375da7c0e900799a7c22d57afa41447261406fa5de41d81884618"]],"content":" + ","sig":"0150628586070f45a7cb4cdd629db5aa49e74934d95367917766bae539f1360bbce47f21b34d26213df89e2f9ce7d6c63b266cbf15349a31946d4ce3d7e73608"}'

console.log(JSON.stringify(eventld(JSON.parse(event)), null, 2))
