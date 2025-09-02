# 2025-09-02 / 002

Essai a réaliser sur modification # 2025-09-02 /001

MakefromNode doit etre testée, elle stocke le noeud dans this.obj Tab::obj
on doit utiliser collection.length pour déterminer id et name du nouvel onglet
ce code peut etre testé en fin d'initialisation


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
