Les onglets sont associés à la classe **Tab** du module **PageManager**

La structure est détaillée là : https://github.com/arbph-dev/Elfennel.js/blob/main/docs/structure.md#structure-d%C3%A9taill%C3%A9-dun-onglet

## zone information

Une partie est réservé aux informations dans les onglets

```html
<div class="w3-panel w3-blue">
  <h3>Information!</h3>
  <p>Blue often indicates a neutral informative change or action.</p>
```




On l'exploite avec une fonction dédiée : **Tab::infoSet**
```js
TabTemp.infoSet('Information', 'Tab::infoSet(T,M) , it s works' )
```

On gere 4 types d'informations a passer en chaine  dans le paramètre  **T** :
- Alert
- Information
- Success
- Warning

Un message est ransmis avec la variable **M**

