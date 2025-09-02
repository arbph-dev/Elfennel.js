# Elfennel.js
Frontend library

Le code proposé ici me permet d'exploiter le document fourni par Laravel 
La vue est généré depuis un template

La structure du document influence le fonctionnement, la structure est mise en forme par les styles.

Les styles sont utilsés pour identifer les partie de structure : header, onglet, barre de navigation

La solution est mise en oeuvre ici : [https://elfennel.fr/note](https://elfennel.fr/note)

## Actuellement

La structure est composé d'onglets associés aux objets [**Tab**](./docs/onglet.md)

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

Durant le parcours 
- on instancie des objets **Tab** qui sont associés aux noeuds et elements de structure 
- on remplit le tableau **collTab** qui contiendra les objet **Tab**

```js
const tabClass ='w3-container w3-padding-64'  // détermine la classe employée pour les onglets

this.#collTabElement = this.#Root.getElementsByClassName(tabClass) // recupere tous les onglets document
this.#collTab = new Array() // on prépare la collection collTab de class Tab
// parcours les onglets document creation des instances de class Tab en memoire
//  => les structures peuvent etre identifés ??

for (i =  0 ; i < this.#collTabElement.length; i++) 
{
  objTab = new Tab( i , `tab-${i}`,`tab-${i}` , this.#collTabElement[i] );this.#collTab.push(objTab) //creation des instances de class Tab en memoire
  this.#collTabElement[i].id = objTab.id // modification DOM
  this.#collTabElement[i].name = objTab.name // modification DOM
}
```




Dans la vue [note.blade.php] les sections 8, 9 sont laissé vides, sans sections définies par @yield, cela ne semble pas géné
```blade
@section('section8')
@endsection
```
On emploie la section 8 pour les essais , la méthode **Tab::MakefromNode** permet de générer les noeuds et le contenu


```js
initFailSafe()
{
  
  this.#collTab[8].MakefromNode("Titre Onglet 8 xhr") //ok

  let t8 = this.#collTab[8] //ref onglet 8 ??
  let PMref = this //ref PageManager  necessaire pour la fonction 

  window.xhr_getRequest( 
    'GET' ,
    "https://jsonplaceholder.typicode.com/todos?_limit=13" ,
    {
      load: function(event) { PMref.UpdateData( t8 , event.target  ) }
    }  
  )

}
```

Le gestionnaire de page **PageManager**  gére les echanges de données, qu'il renvoie a un objet **Tab** qui en a la charge

Ici une requete  GET sur URL en passant une callback , la fonction emplyée en callbacks exploite la méthode de **PageManager::UpdateData**

Une reference sur l'objet **PageManager** est nécessaire, this ne portant pas dans la fonction de callback

Des variables sont a transmettre : 
- t8 correspond à la un objet **Tab**
- event.target pour gerer la réponse à la requête

```js
  let PMref = this 
{ load: function(event) { PMref.UpdateData( t8 , event.target  ) } }  
```

Les données reçues par **PageManager** via **PageManager::UpdateData** sont stockées dans l'objet Tab
```js
UpdateData( el ,  evtXhr)
  ...
    let data = JSON.parse(evtXhr.responseText);
  ...
    el.StoreData(data) // stocke le sdonnées dans l'objet tab concerné reference el

```  

La methode **PageManager::showTab** gere l'affichage des onglets. La section 8 sert encore pour les essais 

La section 8 est construite, en fin d'inisitalisation de l'objet **PageManager** par la méthode **PageManager::initFailSafe()**

```js
if ( index === 8 )
{
  let TabTemp = this.#collTab[index]

  TabTemp.contentSetfromData() // oK , NO => retourne liste complete sans pagination
  TabTemp.contentSetfromPaginateData(0) // Ok => liste paginée en cours
```





---


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




