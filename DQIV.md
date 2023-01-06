<h1>Dragon Quest IV</h1>

<h2>The accessories</h2>
<ul>
  <li>Their ID.</li>
  <li>Their name.</li>
  <li>Their sprite.</li>
  <li>Their official artwork.</li>
  <li>The stats they change once equipped.</li>
  <li>Their price.</li>
  <li>The areas where you can find them.</li>
  <li>The areas where you can buy them.</li>
  <li>Their description.</li>
  <li>Their slug, used to join other data.</li>
</ul>
<p>Examples of requests :</p>
<ul>
  <li><code>GET http://localhost:8000/dqiv/accessories/</code></li>
  <li><code>GET http://localhost:8000/dqiv/accessories/1</code></li>
  <li><code>GET http://localhost:8000/dqiv/accessories/?name=scale_shield</code></li>
</ul>

<h2>The areas</h2>
<ul>
  <li>Their ID.</li>
  <li>Their name.</li>
  <li>Their shops.</li>
  <li>Their map.</li>
  <li>The continent they are from.</li>
  <li>Their type.</li>
  <li>Their slug.</li>
</ul>
<p>Examples of requests :</p>
<ul>
  <li><code>GET http://localhost:8000/dqiv/area/</code></li>
  <li><code>GET http://localhost:8000/dqiv/area/1</code></li>
  <li><code>GET http://localhost:8000/dqiv/area/?name=endor</code></li>
</ul>

<h2>The armors</h2>
<ul>
  <li>Their ID.</li>
  <li>Their name.</li>
  <li>Their sprite.</li>
  <li>Their official artwork.</li>
  <li>The stats they change once equipped.</li>
  <li>Their price.</li>
  <li>The areas where you can find them.</li>
  <li>The areas where you can buy them.</li>
  <li>Their description.</li>
  <li>Their slug.</li>
</ul>
<p>Examples of requests :</p>
<ul>
  <li><code>GET http://localhost:8000/dqiv/armors/</code></li>
  <li><code>GET http://localhost:8000/dqiv/armors/1</code></li>
  <li><code>GET http://localhost:8000/dqiv/armors/?name=iron_armour</code></li>
</ul>

<h2>The characters</h2>
<ul>
  <li>Their ID.</li>
  <li>Their name.</li>
  <li>Their gender.</li>
  <li>Their sprite.</li>
  <li>Their animated sprite.</li>
  <li>Their copy sprite.</li>
  <li>Their animated copy sprite.</li>
  <li>Their official artwork.</li>
  <li>Their title.</li>
  <li>Their class.</li>
  <li>Their force for each level.</li>
  <li>Their speed for each level.</li>
  <li>Their vitality for each level.</li>
  <li>Their wisdom for each level.</li>
  <li>Their luck for each level.</li>
  <li>Their HP for each level.</li>
  <li>Their MP for each level.</li>
  <li>The experience required for each level.</li>
  <li>Their slug.</li>
</ul>
<p>Examples of requests :</p>
<ul>
  <li><code>GET http://localhost:8000/dqiv/characters/</code></li>
  <li><code>GET http://localhost:8000/dqiv/characters/1</code></li>
  <li><code>GET http://localhost:8000/dqiv/characters/?name=alena</code></li>
</ul>

<h2>The continents</h2>
<ul>
  <li>Their ID.</li>
  <li>Their name.</li>
  <li>Their location.</li>
  <li>Their slug.</li>
</ul>
<p>Examples of requests :</p>
<ul>
  <li><code>GET http://localhost:8000/dqiv/continents/</code></li>
  <li><code>GET http://localhost:8000/dqiv/continents/1</code></li>
  <li><code>GET http://localhost:8000/dqiv/continents/?slug=maestral</code></li>
</ul>

<h2>The game</h2>
<ul>
  <li>Its name.</li>
  <li>Its title.</li>
  <li>Its logo.</li>
  <li>Its developer.</li>
  <li>Its publisher.</li>
  <li>Its director.</li>
  <li>Its designer.</li>
  <li>Its writer.</li>
  <li>Its composer.</li>
  <li>Its platform.</li>
  <li>Its release date.</li>
  <li>Its genre.</li>
  <li>Its maximum number of players.</li>
</ul>
<p>Examples of requests :</p>
<ul>
  <li><code>GET http://localhost:8000/dqiv</code></li>
</ul>

<h2>The monsters</h2>
<ul>
  <li>Their ID.</li>
  <li>Their name.</li>
  <li>Their sprite.</li>
  <li>Their animated sprite.</li>
  <li>Their official artwork.</li>
  <li>Their type (enemy or boss).</li>
  <li>Their phases.</li>
  <li>Their HP.</li>
  <li>Their MP.</li>
  <li>Their Attack.</li>
  <li>Their Defense.</li>
  <li>Their Speed.</li>
  <li>The experience they give once defeated.</li>
  <li>The gold they give once defeated.</li>
  <li>The items they can drop once defeated.</li>
  <li>The areas where we can find them.</li>
  <li>Their slug, used to join other data.</li>
</ul>
<p>Examples of requests :</p>
<ul>
  <li><code>GET http://localhost:8000/dqiv/monsters/</code></li>
  <li><code>GET http://localhost:8000/dqiv/monsters/1</code></li>
  <li><code>GET http://localhost:8000/dqiv/monsters/?item=medicinal_herb</code></li>
</ul>

<h2>The items</h2>
<ul>
  <li>Their ID.</li>
  <li>Their name.</li>
  <li>Their sprite.</li>
  <li>Their official artwork.</li>
  <li>Their price.</li>
  <li>Their description.</li>
  <li>The areas where you can find them.</li>
  <li>The areas where you can buy them.</li>
  <li>Their type (normal or key item).</li>
  <li>Their slug, used to join other data.</li>
</ul>
<p>Examples of requests :</p>
<ul>
  <li><code>GET http://localhost:8000/dqiv/items/</code></li>
  <li><code>GET http://localhost:8000/dqiv/items/1</code></li>
  <li><code>GET http://localhost:8000/dqiv/items/?price_greater_than=100</code></li>
</ul>

<h2>The weapons</h2>
<ul>
  <li>Their ID.</li>
  <li>Their name.</li>
  <li>Their sprite.</li>
  <li>Their official artwork.</li>
  <li>The stats they change once equipped.</li>
  <li>Their price.</li>
  <li>Their description.</li>
  <li>The areas where you can find them.</li>
  <li>The areas where you can buy them.</li>
  <li>Their slug, used to join other data.</li>
</ul>
<p>
  Examples of requests :</p>
<ul>
  <li><code>GET http://localhost:8000/dqiv/weapons/</code></li>
  <li><code>GET http://localhost:8000/dqiv/weapons/1</code></li>
  <li><code>GET http://localhost:8000/dqiv/weapons/?is_minimedal_reward=true</code></li>
</ul>

<h2>The helmets</h2>
<ul>
  <li>Their ID.</li>
  <li>Their name.</li>
  <li>Their sprite.</li>
  <li>Their official artwork.</li>
  <li>The stats they change once equipped.</li>
  <li>Their price.</li>
  <li>Their description.</li>
  <li>The areas where you can find them.</li>
  <li>The areas where you can buy them.</li>
  <li>Their slug, used to join other data.</li>
</ul>
<p>Examples of requests :</p>
<ul>
  <li><code>GET http://localhost:8000/helmets/</code></li>
  <li><code>GET http://localhost:8000/helmets/?name=leather_cap</code></li>
  <li><code>GET http://localhost:8000/helmets/?is_minimedal_reward=true</code></li>
</ul>

<h2>The shields</h2>
<ul>
  <li>Their ID.</li>
  <li>Their name.</li>
  <li>Their sprite.</li>
  <li>Their official artwork.</li>
  <li>The stats they change once equipped.</li>
  <li>Their price.</li>
  <li>Their description.</li>
  <li>The areas where you can find them.</li>
  <li>The areas where you can buy them.</li>
  <li>Their slug, used to join other data.</li>
</ul>
<p>Examples of requests :</p>
<ul>
  <li><code>GET http://localhost:8000/dqiv/shields/</code></li>
  <li><code>GET http://localhost:8000/dqiv/shields/?name=scale_shield</code></li>
  <li><code>GET http://localhost:8000/dqiv/shields/?is_minimedal_reward=true</code></li>
</ul>

<h3>Credits</h3>
<ul>
  <li>Maps ripped by Barubary from the spriters resource.</li>
  <li>Enemy sprites taken from the Dragon Quest Fan website.</li>
  <li>Some sprites were ripped by NaorimSenchai.</li>
</ul>
