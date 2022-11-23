# Dragon Quest IV DS API

## /!\ WORK IN PROGRESS /!\

An API project featuring all the datas about the fourth episode of the Dragon Quest game developed by Square Enix.
English, spanish, french, german, italian and japanese languages are supported and includes in the API, which means each character, monster, items, etc. is fully translated in the languages mentioned above.

## What content does it include ?

### The characters

- Solo, Sonia, Ragnar, Alena, Kiryl, Borya, Torneko, Meena, Maya and Psaro.
- Their name.
- Their stats (for each level) and experience required to reach a specific level.
- Their sprite, animated and non animated.
- Their copy sprite, animated and non animated.
- Their official artwork.

Examples of requests :
[b]GET http://localhost:8000/characters/[/b]
[b]GET http://localhost:8000/characters/?name=alena[/b]

### The monsters

- Every monster from the The Big Book of Beasts + Psaro the Manslayer and Aaron (Chapter 6).
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
[b]GET http://localhost:8000/monsters/[/b]
[b]GET http://localhost:8000/monsters/?name=slime[/b]
[b]GET http://localhost:8000/monsters/?item=medicinal_herb[/b]

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
[b]GET http://localhost:8000/items/[/b]
[b]GET http://localhost:8000/items/?name=medicinal_herb[/b]
[b]GET http://localhost:8000/items/?price_greater_than=100[/b]

### The weapons

- Every weapon you can find in the game.
- Their name.
- Their sprite.
- Their official artwork.
- The stats they change once equipped.
- Their price.
- Their description.
- The areas where you can find them.
- Their slug, used to join other data.

Examples of requests :
[b]GET http://localhost:8000/weapons/[/b]
[b]GET http://localhost:8000/weapons/?name=copper_sword[/b]
[b]GET http://localhost:8000/weapons/?is_minimedal_reward=true[/b]

### The helmets

- Every helmet you can find in the game.
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

- Every armor you can find in the game.
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
[b]GET http://localhost:8000/helmets/?name=iron_armor[/b]
[b]GET http://localhost:8000/helmets/?is_minimedal_reward=true[/b]

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
[b]GET http://localhost:8000/helmets/[/b]
[b]GET http://localhost:8000/helmets/?name=scale_shield[/b]
[b]GET http://localhost:8000/helmets/?is_minimedal_reward=true[/b]

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
[b]GET http://localhost:8000/helmets/[/b]
[b]GET http://localhost:8000/helmets/?name=scale_shield[/b]
[b]GET http://localhost:8000/helmets/?is_minimedal_reward=true[/b]

### Credits

- Maps ripped by Barubary from the spriters resource.
- Enemy sprites taken from the dragon quest fan website.
- Some sprites were ripped by NaorimSenchai.
