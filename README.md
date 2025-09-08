# Elfennel.js
Frontend library

Le code proposé ici me permet d'exploiter le document fourni par Laravel 
La vue est généré depuis un template

La structure du document influence le fonctionnement, la structure est mise en forme par les styles.

Les styles sont utilsés pour identifer les partie de structure : header, onglet, barre de navigation

La solution est mise en oeuvre ici : [https://elfennel.fr/note](https://elfennel.fr/note)

# 2025-09-05
## point template / note

- Terminer les fonctions ihm a placer dans PageManager.js, a affecter à windows
- repris sidebar et main

### PageManager
modifier PageManager constructor et appel dans pure30_note.js
-suppression un argument rootId  
    //this.#Root = document.getElementById(rootId)
    this.#Root = document.getElementsByTagName('main')[0] 

+ permet de supprimer un parametre 
+ permis par la norme un seul main par document/page
- impose main en structure

Affectation window
**NOTE**
La fonction  PMnavSidebarToggle necessite est affecté à la classe PageManager **bind(this)**
```js
window.PMnavSidebarToggle = this.navSidebarToggle.bind(this)     
```

elements a travailler pagination

###  main
Changer div en main pour moins de confusion, id non nécessaire peut etre réaffecté
```
<div class="w3-main" style="margin-left:250px" id="Root" name="Root">
<main class="w3-main" style="margin-left:0px">
```

### sidebar 
supprimer classe w3-bar-block et w3-collapse . w3-collapse force la classe et display: none !important
```html
<nav class="w3-sidebar w3-bar-block w3-collapse w3-large w3-theme-l5 w3-animate-left" id="Sidebar" name="Sidebar">
<nav class="w3-sidebar w3-large w3-theme-l5 w3-animate-left" id="Sidebar">
```
repris style dans le template Laravel
```css
.w3-sidebar { bottom: 0; height: auto; top: 0; width: 80vw; z-index: 3;display: none }

@media (min-width: 993px) {
.w3-sidebar { bottom: 0; height: auto; top: 0; width: 500px; z-index: 3;display: none }
}
```




## fichiers : 
- Layout
  [pure30](./resources/views/layouts/pure30.blade.php)
- Vue
  [note](./resources/views/note.blade.php)
- script de page
  [pure30_note.js](./public/build/assets/pure30_note.js)
- modules javascript
  - [Pagemanager.js](./public/build/assets/modules/PageManager.js)
  - [xhr.js](./public/build/assets/modules/xhr.js)




