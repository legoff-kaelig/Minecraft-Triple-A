ServerEvents.recipes(event => {
  event.remove({ type: 'minecraft:smelting', input: 'minecraft:iron_ingot', output: '#forge:ingots/steel' });
  event.remove({ type: 'minecraft:blasting', input: 'minecraft:iron_ingot', output: '#forge:ingots/steel' });
});
