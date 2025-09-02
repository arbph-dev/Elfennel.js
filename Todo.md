# 2025-09-02 / 002

Essai a réaliser sur modification # 2025-09-02 /001 => ok
- MakefromNode doit etre testée
- On ajoute une méthode PageManger::add()

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

- Tab::MakefromNode doit affecter les propriétés id et name

- Suppression de la partie essai sur l'onglet 8 depuis la fonction show
	a déplacer dans initfailsafe ou constructeur

- prévoir uen fonction init générale ?? eval string ??

```
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
