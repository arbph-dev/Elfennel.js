# Elfennel.js
Frontend library

Le code proposé ici me permet d'exploiter le document fourni par Laravel 
La vue est généré depuis un template

La structure du document influence le fonctionnement, la structure est mise en forme par les styles.

Les styles sont utilsés pour identifer les partie de structure : header, onglet, barre de navigation


## Actuellement

Le gestionnaire de page **Pagemanager** s'initialise et parcourt la strucutre

Le gestionnaire de page **Pagemanager**  gére les echanges de données, qu'il renvoie a un objet **Tab** qui en a la charge

La structure est composé d'onglets associés aux objets **Tab**





## fichiers : 
- Layout
  [pure30](./resources/views/layouts/pure30.blade.php)
- Vue
  [note](./resources/views/note.blade.php)
- script de page
  [pure30_note.js](./public/build/assets/pure30_note.js)
- modules javascript
  [Pagemanager.js](./public/build/assets/modules/PageManager.js)
  [xhr.js](./public/build/assets/modules/xhr.js)




## PageManager
## xhr
