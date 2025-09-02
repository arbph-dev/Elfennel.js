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
-----------------------------------------------------------------------------------------------------------------------

## Gestion 

### Tab::CreatefromNode
Cree le noeud onglet complet qui sera associé a l'objet Tab
La fonction exploite **buildTabNode** , une fonction utilitaire elle ne connait pas l'objet tab , elle pourra etre complétée on passera des variables

On assigne les propriétés  avec les valeurs de celle de l'objet avant de retourner le noeud

```js
let tmpNod =   buildTabNode('Success' , strP1)
tmpNod.id  = this.id
tmpNod.name = this.name 
```
    
**ATTENTION** 
Le noeud n'est assigné a l'objet qu'après l'ajout par le **PageManager::addTab**, quand le noeud est ajouté à la structure
Il serait possible de passer une référence au noeud Root en paramètre et d'ajouter le noeud dans la fonction

```js
//PageManager::addTab
this.#Root.appendChild(nodeTabe)
this.#collTabElement = this.#Root.getElementsByClassName(tabClass) // recupere tous les onglets document
objTab.obj = this.#collTabElement[i]
this.#collTab.push(objTab) //creation des instances de class Tab en memoire
```

### Tab::MakefromString( strP1 = 'Message initial template string' )

**TODO** Renommer en **CreateContainerfromString**
emploie la fonction utilitaire **buildTab( T, M )** qui retourne ue chaine, la chaine est assignée au Noeud "onglet"


## Fonctions bas niveau

### Tab::NodeQuery( sDomQuery )
permet de retrouver les élements enfants du Noeud associé à l'objet Tab , on commence le parcours depuis le noeud actuel

Pour accéder à la zone information, dont la structure est détaillé plus haut :
```js
let TabInfo = this.NodeQuery("div.w3-container.w3-padding-64 > div.w3-container > div.w3-panel")
```
- on part du noeud **onglet** : div.w3-container.w3-padding-64
- on descend au noeud **container onglet** : > div.w3-container
- on descend au noeud **container onglet** : > div.w3-panel

Noter:
-  la syntaxe : **div.w3-container.w3-padding-64** ; sans espace entre classe de style
-  la syntaxe : **#tab-8 > div > div.w3-container** ; fonctionne avec les id
-  la syntaxe : **div.w3-container.w3-padding-64** plus précise que div.w3-container est a privilégier

### Tab::StoreData( DatIn )
Stocke les données reçues de XHR  dans la propriété privée **this.#dataStore** 

## Propriété
### this.#dataStore
permet de garder les données, les données sont transmises et envoyées par le PageManager



