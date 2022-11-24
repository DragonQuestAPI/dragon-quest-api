# Dragon Quest IV

## The accessories

- Their ID.
- Their name.
- Their sprite.
- Their official artwork.
- The stats they change once equipped.
- Their price.
- The areas where you can find them.
- The areas where you can buy them.
- Their description.
- Their slug, used to join other data.

Examples of requests :
```GET http://localhost:8000/dqiv/accessories/```
```GET http://localhost:8000/dqiv/accessories/?name=scale_shield```
```GET http://localhost:8000/dqiv/accessories/?is_minimedal_reward=true```

## The areas

- Their ID.
- Their name.
- Their map.
- Their shops.
- Their type.
- The continent they are from.
- Their slug.

Examples of requests :
```GET http://localhost:8000/dqiv/area/```
```GET http://localhost:8000/dqiv/area/1```
```GET http://localhost:8000/dqiv/area/?name=endor```

## The armors

- Their ID.
- Their name.
- Their sprite.
- Their official artwork.
- The stats they change once equipped.
- Their price.
- Their description.
- The areas where you can find them.
- The areas where you can buy them.
- Their slug, used to join other data.

Examples of requests :
```GET http://localhost:8000/dqiv/armors/```
```GET http://localhost:8000/dqiv/armors/?name=iron_armour```
```GET http://localhost:8000/dqiv/armors/?is_minimedal_reward=true```

## The characters

- Their ID.
- Their name.
- Their gender.
- Their sprite.
- Their animated sprite.
- Their copy sprite.
- Their animated copy sprite.
- Their official artwork.
- Their title.
- Their class.
- Their force for each level.
- Their speed for each level.
- Their vitality for each level.
- Their wisdom for each level.
- Their luck for each level.
- Their HP for each level.
- Their MP for each level.
- The experience required for each level.


Examples of requests :
```GET http://localhost:8000/characters/```
```GET http://localhost:8000/characters/1```
```GET http://localhost:8000/characters/?name=alena[/b]```

## The monsters

- Their ID.
- Their name.
- Their sprite, animated and non animated.
- Their official artwork.
- Their type (enemy or boss).
- Their stats (HP, MP, attack, defense, speed).
- The gold they give once defeated.
- The experience they give once defeated.
- The items they can drop once defeated.
- The areas where we can find them.
- Their slug, used to join other data.

Examples of requests :
```GET http://localhost:8000/dqiv/monsters/```
```GET http://localhost:8000/dqiv/monsters/1```
```GET http://localhost:8000/dqiv/monsters/?item=medicinal_herb```

## The items

- Their ID.
- Their name.
- Their sprite.
- Their official artwork.
- Their price.
- Their description.
- The areas where you can find them.
- The areas where you can buy them.
- Their type (normal or key item).
- Their slug, used to join other data.

Examples of requests :
```GET http://localhost:8000/dqiv/items/```
```GET http://localhost:8000/dqiv/items/1```
```GET http://localhost:8000/dqiv/items/?price_greater_than=100```

## The weapons

- Their ID.
- Their name.
- Their sprite.
- Their official artwork.
- The stats they change once equipped.
- Their price.
- Their description.
- The areas where you can find them.
- The areas where you can buy them.
- Their slug, used to join other data.

Examples of requests :
```GET http://localhost:8000/dqiv/weapons/```
```GET http://localhost:8000/dqiv/weapons/1```
```GET http://localhost:8000/dqiv/weapons/?is_minimedal_reward=true```

## The helmets

- Their ID.
- Their name.
- Their sprite.
- Their official artwork.
- The stats they change once equipped.
- Their price.
- Their description.
- The areas where you can find them.
- The areas where you can buy them.
- Their slug, used to join other data.

Examples of requests :
```GET http://localhost:8000/helmets/```
```GET http://localhost:8000/helmets/?name=leather_cap```
```GET http://localhost:8000/helmets/?is_minimedal_reward=true```

## The shields

- Their ID.
- Their name.
- Their sprite.
- Their official artwork.
- The stats they change once equipped.
- Their price.
- Their description.
- The areas where you can find them.
- The areas where you can buy them.
- Their slug, used to join other data.

Examples of requests :
```GET http://localhost:8000/dqiv/shields/```
```GET http://localhost:8000/dqiv/shields/?name=scale_shield```
```GET http://localhost:8000/dqiv/shields/?is_minimedal_reward=true```

### Credits

- Maps ripped by Barubary from the spriters resource.
- Enemy sprites taken from the Dragon Quest Fan website.
- Some sprites were ripped by NaorimSenchai.
