# 2025-09-02 / 002
idTodo		: #0903000 
descTodo	: gérer le défaut PM 0000 <= this.#initMainElementsFounded = false
fileTodo	: PageManager.js
rowfileTodo	: 458

---

# 2025-09-02 / 002
idTodo		: #0903001  FUNCTION ERROR SYS
descTodo	: afficher un message
fileTodo	: PageManager.js
rowfileTodo	: 475

---

# 2025-09-02 / 002

idTodo		: #0903002 =>
descTodo	: gestion des donnés plus élaborées dans une autre fonction que iniFailSafe
fileTodo	: PageManager.js
rowfileTodo	: 546
peut impacter la callback UpdateData
prevoir gestion requete
objet echange 
	id = timestamp ms
	reqSent	 = true, false; 
	respRcv = true, false ;
	echP = -1 ou id  d'une requete parente
	sous objet requete
		methode GET POST
		data formdata meme en get?
		url
	sous objet requete
la gestion des echanges se fait dans une classe ExchangeController
par exemple imbd necessite plusieurs echange, on chositi, puis ondemande le sinfos sur le film

---

# 2025-09-03 / 003
idTodo		: #0903003
descTodo	: gestion des sections d'onglets
fileTodo	: PageManager.js Pure30_note.js


on upload le dernier pagemanager

	[x] on check 

on sauvegarde dans le dossier publication

	[x] PageManager.js
	[x]	xhr.js
	[x]	Pure30_note.js (version complete)
	[x]	note.blade.php(version complete)
	[x]	pure30.blade.php(version complete)


=> copie dans DMZ /  note et layout
on simplifie  note.blade.php et layout pure30.blade.php

 	[ ] note.blade.php 
 	[ ] pure30.blade.php
  
on laisse main  et un enfant tab w3-contanier w3-padding-64 comme tab 9 10 ou 11 section

	[ ]	Pure30_note.js (minimale reset)

**Note**
Reprendre le code Pure30_note.js dans un fichier oldscript.js recopier le necessaire
Reprendre une méthode de codification  : objTab = new Tab( i , `tab-${i}`,`tab-${i}` , this.#collTabElement[i] );




---


# 2025-09-02 / 002

Essai a réaliser sur modification # 2025-09-02 /001 => ok
- MakefromNode doit etre testée
- On ajoute une méthode **PageManager::add()**

```js
    addTab()
    {
      // cree un nouveau noeud tab
        let i = this.#collTab.length
        
        let objTab = new Tab( i , `tab-${i}`,`tab-${i}` , null );
        let nodeTabe = objTab.CreatefromNode()

        this.#Root.appendChild(nodeTabe)

        this.#collTabElement = this.#Root.getElementsByClassName(tabClass) // recupere tous les onglets document
        objTab.obj = this.#collTabElement[i]

        this.#collTab.push(objTab) //creation des instances de class Tab en memoire


    }
```

Ajout correcte dans la structure mais le noeud n'a pas attribut id ni name
=> modif 
- on affiche le  tab créer pour les essais

- **Tab::MakefromNode** doit affecter les propriétés id et name

- Suppression de la partie essai sur l'onglet 8 depuis la méthode **PageManager::show**
	a déplacer dans initfailsafe ou constructeur

- prévoir uen fonction init générale ?? eval string ??

```js
      if ( index === 8 )
      {
        let TabTemp = this.#collTab[index]
//        TabTemp.contentSet('<h1>PageManager.showTab</h1><p>TabTemp.contentSet</p>')
//        TabTemp.contentSetfromData() // oK , NO => retourne liste complete sans pagination
        TabTemp.contentSetfromPaginateData(0) // Ok
        TabTemp.infoSet('Information', 'Tab::infoSet(T,M) , it s works' )
      }
```



# 2025-09-02 /001
module : PageManager / Class : Tab / Methode : 

- MakefromString
- MakefromNode

construise le container tab mais pas l'onglet par lui meme
```html
<!-- conteneur des onglet -->
<div class="w3-container w3-padding-64 w3-hide" >
  <!-- onglet -->
  <div class="w3-container">
    <!-- barre de nvaigation niveau onglet-->
    <div class="w3-bar w3-black">
```


methode utilitaires
- buildTab
- buildTabNode

renommer :
- MakefromNode en MakeTabContainerfromNode  ?? pour les sections laravel => Tab 
- buildTabNode en buildTabContainerNode

ajout MakeTabfromNode ?? pour creer l'ensemble voir structure

on creer buildTabNode qui utilisera buildTabContainerNode et encapsulera 

=> methode a généraliser ??

buildTabNode contient plusieurs parties distinctes reexpolitables => plusieurs fonctions


  let sT = `<div class="w3-container">    
	            <div class="w3-bar w3-black">Barre</div> 
	            <div class="w3-panel ${colNode}">
                <h3>${titleNode}</h3>
                <p>${M}</p>
              </div>  
	            <div class="w3-container"> 
              </div>	
            </div>`
  return sT        

## buildTabNode

- rennommer les occurrences de buildTabNode en buildTabContainerNode
- rennommer buildTabNode en buildTabContainerNode
- créer buildTabNode (hide par défaut ?)
- MakefromNode devient MakeContainerfromNode
  check : utilise buildTabContainerNode 
- créer MakefromNode 

function buildTabNode(T, M)
{
  const ndTab = document.createElement("div");
  ndTab.classList = "w3-container w3-padding-64 w3-hide"
 
  const ndTabContainer = buildTabContainerNode(T, M)
  ndTab.appendChild(ndTabContainer)
  
  return ndTab
}

## buildTabContainerNode

```js
function buildTabContainerNode(T, M)
{
  const ndTab = document.createElement("div");   ndTab.classList ="w3-container" => div.w3-container
  
  const ndBarTab = document.createElement("div") ;  ndBarTab.classList = "w3-bar w3-black";  ndBarTab.innerHTML="w3-bar" // => div.w3-bar w3-black
  
  let classInfoTab = makeClassInfoTab(T)
  const ndInfoTab = document.createElement("div") ; ndInfoTab.classList = classInfoTab //   => div.w3-panel w3-color

  const ndH3InfoTab = document.createElement("h3") ; ndH3InfoTab.innerText = T //   => <h3>T</h3>

  const ndtextInfoTab = document.createElement("p") ; ndtextInfoTab.innerText = M //   => <p>M</p>
  
  const ndContentTab = document.createElement("div") ; ndContentTab.classList ="w3-container" //  => <div class="w3-container">
  
  ndInfoTab.appendChild(ndH3InfoTab) // => div.w3-panel w3-color / h3

ndInfoTab.appendChild(ndtextInfoTab)
 /* => div.w3-panel w3-color /  h3
  => div.w3-panel w3-color /  p */

  ndTab.appendChild(ndBarTab) 
/*  => div.w3-container
    => div."w3-bar w3-black*/


  ndTab.appendChild(ndInfoTab)
  /* => div.w3-container
    => div."w3-bar w3-black
  => div.w3-panel w3-color / ( h3 , p)*/

  ndTab.appendChild(ndContentTab)
 /* => div.w3-container
    => div."w3-bar w3-black
  => div.w3-panel w3-color
    => h3
    => <p>M</p>
    => <div class="w3-container">*/
  return ndTab

}
```
