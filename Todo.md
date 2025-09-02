# 2025-09-02
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
-buildTab
-buildTabNode

renommer :
- MakefromNode en MakeTabContainerfromNode  ?? pour les sections laravel => Tab 
- buildTabNode en buildTabContainerNode

ajout MakeTabfromNode ?? pour creer l'ensemble voir structure


on creer buildTabNode qui utilisera buildTabContainerNode et encapsulera => methode a généraliser ??
buildTabNode contient plusieurs parties distinctes reexpolitables ?




```js
function buildTabNode(T, M)
{
  const ndTab = document.createElement("div");   ndTab.classList ="w3-container" => div.w3-container
  
  const ndBarTab = document.createElement("div") ;  ndBarTab.classList = "w3-bar w3-black";  ndBarTab.innerHTML="w3-bar"
=> div.w3-bar w3-black
  
  let classInfoTab = makeClassInfoTab(T)
  const ndInfoTab = document.createElement("div") ; ndInfoTab.classList = classInfoTab // -> <div class="w3-panel w3-color">  
  => div.w3-panel w3-color

  const ndH3InfoTab = document.createElement("h3") ; ndH3InfoTab.innerText = T // 
  => <h3>T</h3>

  const ndtextInfoTab = document.createElement("p") ; ndtextInfoTab.innerText = M // 
  => <p>M</p>
  
  const ndContentTab = document.createElement("div") ; ndContentTab.classList ="w3-container" // 
  => <div class="w3-container">
  
  ndInfoTab.appendChild(ndH3InfoTab)
  => div.w3-panel w3-color
    => h3

ndInfoTab.appendChild(ndtextInfoTab)
  => div.w3-panel w3-color
    => h3
    => <p>M</p>

  ndTab.appendChild(ndBarTab) 
  => div.w3-container
    => div."w3-bar w3-black


  ndTab.appendChild(ndInfoTab)
  => div.w3-container
    => div."w3-bar w3-black
  => div.w3-panel w3-color
    => h3
    => <p>M</p>


  ndTab.appendChild(ndContentTab)
  => div.w3-container
    => div."w3-bar w3-black
  => div.w3-panel w3-color
    => h3
    => <p>M</p>
    => <div class="w3-container">
  return ndTab

}
```
