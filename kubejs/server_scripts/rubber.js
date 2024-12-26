ServerEvents.recipes(event => {
    event.shaped('industrialforegoing:tinydryrubber', [
      'AAA',
      '',
      ''
    ], {
      A: 'mysticalagriculture:rubber_essence'
    })
  })

ServerEvents.recipes(event => {
    event.shaped('gtceu:raw_rubber_dust', [
      'BBB',
      'B B',
      'BBB'
    ], {
      B: 'mysticalagriculture:rubber_essence'
    })
  })