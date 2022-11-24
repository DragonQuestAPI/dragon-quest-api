# Dragon Quest API

## /!\ WORK IN PROGRESS /!\

An API project featuring all the datas about all the episode of the Dragon Quest franchise developed by Square Enix.
English, Spanish, French, German, Italian and Japanese languages are supported and includes in the API, which means each character, monster, items, etc. is fully translated in the languages mentioned above.

## What content does it include ?

### The games

- Dragon Quest I SNES
- Dragon Quest II SNES
- Dragon Quest III SNES
- Dragon Quest IV DS 
- Dragon Quest V DS
- Dragon Quest VI DS 
- Dragon Quest VII 3DS
- Dragon Quest VIII 3DS
- Dragon Quest IX DS
- Dragon Quest X WII
- Dragon Quest XI PC

- Dragon Quest Monsters Joker
- Dragon Quest Monsters Joker 2
- Dragon Quest Monsters Joker 3
- More to come later...

### The characters

- Their name.
- Their stats (for each level) and experience required to reach a specific level.
- Their sprite, animated and non animated.
- Their copy sprite, animated and non animated.
- Their official artwork.

Examples of requests :
[b]GET http://localhost:8000/characters/[/b]
[b]GET http://localhost:8000/characters/?name=alena[/b]

### The monsters

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
[b]GET http://localhost:8000/dqiv/monsters/[/b]
[b]GET http://localhost:8000/dqiv/monsters/?name=slime[/b]
[b]GET http://localhost:8000/dqiv/monsters/?item=medicinal_herb[/b]

### The items

- Every item you can find in the game, normal and key items.
- Their name.
- Their sprite.
- Their official artwork.
- Their price.
- Their description.
- The areas where you can find them.
- Their type (normal or key item).
- Their slug, used to join other data.

Examples of requests :
[b]GET http://localhost:8000/dqiv/items/[/b]
[b]GET http://localhost:8000/dqiv/items/?name=medicinal_herb[/b]
[b]GET http://localhost:8000/dqiv/items/?price_greater_than=100[/b]

### The weapons

- Their name.
- Their sprite.
- Their official artwork.
- The stats they change once equipped.
- Their price.
- Their description.
- The areas where you can find them.
- Their slug, used to join other data.

Examples of requests :
[b]GET http://localhost:8000/dqiv/weapons/[/b]
[b]GET http://localhost:8000/dqiv/weapons/?name=copper_sword[/b]
[b]GET http://localhost:8000/dqiv/weapons/?is_minimedal_reward=true[/b]

### The helmets

- Their name.
- Their sprite.
- Their official artwork.
- The stats they change once equipped.
- Their price.
- Their description.
- The areas where you can find them.
- Their slug, used to join other data.

Examples of requests :
[b]GET http://localhost:8000/helmets/[/b]
[b]GET http://localhost:8000/helmets/?name=leather_cap[/b]
[b]GET http://localhost:8000/helmets/?is_minimedal_reward=true[/b]

### The armors

- Their name.
- Their sprite.
- Their official artwork.
- The stats they change once equipped.
- Their price.
- Their description.
- The areas where you can find them.
- Their slug, used to join other data.

Examples of requests :
[b]GET http://localhost:8000/dqiv/helmets/[/b]
[b]GET http://localhost:8000/dqiv/helmets/?name=iron_armor[/b]
[b]GET http://localhost:8000/dqiv/helmets/?is_minimedal_reward=true[/b]

### The shields

- Every shield you can find in the game.
- Their name.
- Their sprite.
- Their official artwork.
- The stats they change once equipped.
- Their price.
- Their description.
- The areas where you can find them.
- Their slug, used to join other data.

Examples of requests :
[b]GET http://localhost:8000/dqiv/shields/[/b]
[b]GET http://localhost:8000/dqiv/shields/?name=scale_shield[/b]
[b]GET http://localhost:8000/dqiv/shields/?is_minimedal_reward=true[/b]

### The accessories

- Every accessory you can find in the game.
- Their name.
- Their sprite.
- Their official artwork.
- The stats they change once equipped.
- Their price.
- Their description.
- The areas where you can find them.
- Their slug, used to join other data.

Examples of requests :
[b]GET http://localhost:8000/dqiv/accessories/[/b]
[b]GET http://localhost:8000/dqiv/accessories/?name=scale_shield[/b]
[b]GET http://localhost:8000/dqiv/accessories/?is_minimedal_reward=true[/b]

### Credits

- Maps ripped by Barubary from the spriters resource.
- Enemy sprites taken from the Dragon Quest Fan website.
- Some sprites were ripped by NaorimSenchai.
