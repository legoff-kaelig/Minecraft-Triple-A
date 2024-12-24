ServerEvents.recipes(event => {
  event.remove({ type: 'minecraft:smelting', input: 'minecraft:iron_ingot', output: '#forge:ingots/steel' });
  event.remove({ type: 'minecraft:blasting', input: 'minecraft:iron_ingot', output: '#forge:ingots/steel' });

  event.remove({ type: 'minecraft:smelting', input: 'minecraft:iron_nugget', output: '#forge:nuggets/steel' });
  event.remove({ type: 'minecraft:blasting', input: 'minecraft:iron_nugget', output: '#forge:nuggets/steel' });

  event.remove({ type: 'minecraft:smelting', input: 'minecraft:iron_block', output: '#forge:blocks/steel' });
  event.remove({ type: 'minecraft:blasting', input: 'minecraft:iron_block', output: '#forge:blocks/steel' });
});
