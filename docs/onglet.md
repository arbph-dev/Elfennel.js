Les onglets sont associés à la classe **Tab** du module **PageManager**

La structure est détaillée : [ici](./structure.md#structure-d%C3%A9taill%C3%A9-dun-onglet)


**TODO**
- a documenter fonctions et variables, paramètres et type de retour
- harmoniser get , set noeud , objet ou texte en retour
- choix construction noeud ou text et template ? garder les 2 options ?
- zone information =>
  - clear, remet en bleu et vide
  - show hide

-----------------------------------------------------------------------------------------------------------------------
## zone information

Une partie est réservé aux informations dans les onglets

```html
<div class="w3-container w3-padding-64 w3-hide" >
  <div class="w3-container">
  ...  
    <div class="w3-panel w3-blue">
      <h3>Information!</h3>
      <p>Blue often indicates a neutral informative change or action.</p>
```

### Tab::infoGet()
- retourne un objet
```js
a = TabTemp.infoGet() ; console.log(a) // 
```
### Tab::infoSet(T,M)
- définit le contenu et le style de la zone information
```js
TabTemp.infoSet('Information', 'Tab::infoSet(T,M) , it s works' )
```

On gere 4 types d'informations a passer en chaine  dans le paramètre  **T** :
- Alert
- Information
- Success
- Warning

Un message est transmis avec la variable **M**


-----------------------------------------------------------------------------------------------------------------------
## Zone Contenu
Le contenu est affiché dans la zone utile de la page sous les barres de navigation "onglet" et "information"

```html
<div class="w3-container w3-padding-64 w3-hide" >
  <div class="w3-container">
  ...  
    <div class="w3-content w3-display-container">
      
```




### Tab::contentGet()
TODO a documenter retour 
```js
let a = TabTemp.contentGet() ;
console.log(a) 
```

### Tab::contentSet()
TODO a documenter parametre
```js
TabTemp.contentSet('<h1>PageManager.showTab</h1><p>TabTemp.contentSet</p>')
```

### Tab::contentSetfromData()
retourne liste complete sans pagination ni lien CRUD , les données sont lues à l'initialisation de **PageManager**

```js
TabTemp.contentSetfromData()
```
### Tab::contentSetfromPaginateData( P )
retourne liste paginée sans lien CRUD, ci dessous la page P sera la page 0, les données sont lues à l'initialisation de **PageManager**
```js
TabTemp.contentSetfromPaginateData(0)
```
