# Elfennel.js
Frontend library

Le code proposé ici me permet d'exploiter le document fourni par Laravel 
La vue est généré depuis un template

La structure du document influence le fonctionnement, la structure est mise en forme par les styles.

Les styles sont utilsés pour identifer les partie de structure : header, onglet, barre de navigation


## Actuellement

La structure est composé d'onglets associés aux objets **Tab**

Le script de page [pure30_note.js](./html/pure30_note.js) 

- inclu le module [Pagemanager.js](./public/build/assets/modules/PageManager.js)
https://github.com/arbph-dev/Elfennel.js/blob/0f05e1c82550b699f58b87ac7fda239338109db5/public/build/assets/pure30_note.js#L10

- charge la page et ses recources, appele **window.onload** et instancie **PageManager** via son *constructeur*
https://github.com/arbph-dev/Elfennel.js/blob/ea5ac8015c4eb6dc57a197d45510722926942633/public/build/assets/pure30_note.js#L130

- affecte la méthode **PageManager::showTab** à la fenêtre **window** pour qu'elle soit acessible. Ceci du fait de la portée module et globale des variables et fonctions
https://github.com/arbph-dev/Elfennel.js/blob/ea5ac8015c4eb6dc57a197d45510722926942633/public/build/assets/pure30_note.js#L132

Dés lors, on peut exploiter les evenenements via les attributs **onclick** des noeuds liens (a). 
Par exmple **ihmTabShow( 0 )** dans
- le layout [pure30.blade.php](./resources/views/layouts/pure30.blade.php)
- la vue [note.blade.php](./resources/views/note.blade.php)

```html
<a class="w3-bar-item w3-button w3-hover-black" href="#" onclick="ihmTabShow( 0 )">Link</a>
<a href="#" class="w3-bar-item w3-button w3-hide-small w3-hover-white" onclick="ihmTabShow( 0 )">Tab-0</a>
```

Le gestionnaire de page **Pagemanager** s'initialise et parcourt la [structure](./docs/structure.md)

Dans la vue [note.blade.php] les sections 8, 9 sont laissé vides, sans sections définies par @yield, cela ne semble pas géné
```blade
@section('section8')
@endsection
```



Le gestionnaire de page **Pagemanager**  gére les echanges de données, qu'il renvoie a un objet **Tab** qui en a la charge

La methode **PageManager::showTab** gere l'affichage des onglets 





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




## PageManager
## xhr
