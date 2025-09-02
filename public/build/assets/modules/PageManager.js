/**
 *  modules/PageManager.js
 * 
 * 
 */ 

//-------------------------------------
//          configuration
//
//------------------------------------
//
//    la strucutre du document conditionne la configuration
//    la librairie permettra de créer les onglets ou de s'adapter
//
//    
const DEBUG = true



//=======================================   ONGLETS  class Tab ===========================================

const tabClass ='w3-container w3-padding-64'  // détermine la classe employée pour les onglets



export class Tab
{
  #dataStore = null

  /**
   * 
   * @param {*} i indice dans le tableau
   * @param {*} d id du noeud
   * @param {*} n name du noeud
   * @param {*} o objet noeud
   */
  constructor( i , d , n , o)
  {
    this.index = i
    this.id = d
    this.name = n
    this.obj = o
    this.content = null

    if ( DEBUG === true){ console.log ("module : PageManager.js / class Tab / constructor l38 => ended without crash" )}
  }
  
  /**----------------------------------------------------------------------------------------------------------------------
   *  this.#collTab[this.#currentTab].MakefromString("Titre Onglet 8") //ok
   * @param {*} strP1 
   */
  MakefromString( strP1 = 'Message initial template string' )
  {
    if ( ( typeof( this.obj) != undefined ) && ( this.obj != null ) )
      {
        this.obj.innerHTML = buildTab( 'Alert' , strP1 )
      }
    if ( DEBUG === true){ console.log ("module : PageManager.js / class Tab / MakefromString l51  => ended without crash" )}      
  }

  /**----------------------------------------------------------------------------------------------------------------------
   *  this.#collTab[this.#currentTab].MakefromNode("Titre Onglet 8") //ok
   * @param {*} strP1 
   */
  MakefromNode( strP1 = 'Message initial template node')
  {
    //debugger

    if ( ( typeof( this.obj) != undefined ) && ( this.obj != null ) )
      {
        //this.obj.innerHTML ='';
        //this.obj.innerHTML =`<h1>${strP1}</h1><p>On passe le texte de l'onglet</p>`;
        this.obj.appendChild( buildTabNode('Success' , strP1) )
      }
      
    if ( DEBUG === true){ console.log ("module : PageManager.js / class Tab / MakefromNode l68  => ended without crash" )}      
  }


  /**----------------------------------------------------------------------------------------------------------------------
   * noeud tab : this.obj -> w3-container w3-padding-64 avec +/- w3-hide => 
* NOTE il faut commencer le parcours depuis le noeud actuel c'est 

   * let TabContent = TabTemp.NodeQuery("div.w3-container > div.w3-container > div.w3-container")
   * TabContent = document.querySelector("#tab-8 > div > div.w3-container") //ok
   * 
   * 
   * @returns 
   * 
   */
  NodeQuery( sDomQuery )
  {
    return this.obj.querySelector(sDomQuery)
  }

  /**----------------------------------------------------------------------------------------------------------------------
   * permet de conserver des données
   * @param {*} DatIn 
   */
  StoreData( DatIn ) { this.#dataStore = DatIn }

  /**----------------------------------------------------------------------------------------------------------------------
   * doit pemettre l'acces au contenu => string innerHTML
   * essai dans PageManager -> showTab
   */
  contentGet()
  {
    let TabContent = this.NodeQuery("div.w3-container.w3-padding-64 > div.w3-container > div.w3-container")
    console.log( `PageManager / class Tab :: contentGet / TabContent.innerHTML : ${TabContent.innerHTML}\n` ) ;
    return TabContent.innerHTML
  }
  
  /**----------------------------------------------------------------------------------------------------------------------
   * 
   */
  infoGet()
  {
    let TabInfo = this.NodeQuery("div.w3-container.w3-padding-64 > div.w3-container > div.w3-panel")
    console.log( `PageManager / class Tab :: contentGet / TabContent.innerHTML : ${TabInfo.innerHTML}\n` ) ;
    let TabInfoH3 = TabInfo.getElementsByTagName('h3').innerHTML
    let TabInfoP = TabInfo.getElementsByTagName('p').innerHTML
    let r = { "titre" : TabInfoH3 , "texte" : TabInfoP } //let r = TabInfo.innerHTML //let r = [ TabInfoH3 , TabInfoP ] 
    return r
  }

  /**----------------------------------------------------------------------------------------------------------------------
   * definit le type et le contenu du bandeau info
   * @param {*} T : Alert , Information , Success , Warning
   * @param {*} M : message apparaitra dans P , peut etre du code mais light
   */
  infoSet( T , M )
  {
    let TabInfo = this.NodeQuery("div.w3-container.w3-padding-64 > div.w3-container > div.w3-panel")
    TabInfo.classList = makeClassInfoTab(T)//on modifie le style du div parent englobant h3 et p
    let TabInfoH3 = TabInfo.getElementsByTagName('h3')
    TabInfoH3[0].innerHTML = T //on affecte T au H3
    let TabInfoP = TabInfo.getElementsByTagName('p')
    TabInfoP[0].innerHTML = M //on affecte M au noeud P
  } 

  /**----------------------------------------------------------------------------------------------------------------------
   * @param {*} strHTML 
   * @returns 
   */
  contentSet( strHTML )
  {
    let TabContent = this.NodeQuery("div.w3-container.w3-padding-64 > div.w3-container > div.w3-container")
    console.log( `PageManager / class Tab :: contentSet (strHTML) : ${strHTML}\n` ) ;
    TabContent.innerHTML= strHTML
    return true
  }


  contentSetfromData()
  {
    this.contentSet ( templateTabData( 'tplList' , this.#dataStore ) ) // ok
  }
  
  contentSetfromPaginateData( P)
  {
    //this.contentSet ( paginateTabData( 'tplList' , this.#dataStore ) )
    this.contentSet ( paginateTabData2( 'tplList' , this.#dataStore , P ) )
  }


  /**----------------------------------------------------------------------------------------------------------------------
   * doit renvoye rle noeud
   */
  contentGetNode()
  {
    let TabContent = this.NodeQuery("div.w3-container.w3-padding-64 > div.w3-container > div.w3-container")
    return TabContent
  }

}
//=======================================   Utilitaires  ===========================================
/*
https://www.w3schools.com/jsref/jsref_class_extends.asp

export class TabSimple extends Tab {
  constructor(i , d , n , o, type) {
    super( i , d , n , o) //super(brand);  //Tab.constructor( i , d , n , o)
    this.type = type;//ajout extends
  }
    //ajout extends methode nouvelle 
    // classe etendue Tab doit posséder methode present
    //  present() { return 'I have a ' + this.n; }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}
*/

/**----------------------------------------------------------------------------------------------------------------------
 * 
 * @param {*} T  : Alert , Information , Success , Warning
 */
function makeClassInfoTab( T )
{
 let strClassInfoTab= "w3-panel "
  switch( T )
  {
    case "Alert":
      strClassInfoTab += "w3-red" ;
      break;
    case "Information":
      strClassInfoTab += "w3-blue" ;
      break;
    case "Success":
      strClassInfoTab += "w3-green" ;
      break;
    case "Warning":
      strClassInfoTab += "w3-yellow" ;
      break;
    default: 
      T="Alert";
      strClassInfoTab += "w3-red" ;
      break;                      
  }

  return strClassInfoTab

}

/**----------------------------------------------------------------------------------------------------------------------
 *  construit la structure depuis une chaine
 * @param {*} T : Alert , Information , Success , Warning
 * @param {*} M 
 * @returns 
 */
function buildTab( T, M )
{
  let colNode 
  let titleNode

  switch( T )
  {
    case "Alert":       colNode = "w3-red" ;    titleNode = "Alert" ;       break;
    case "Information": colNode = "w3-blue" ;   titleNode = "Information" ; break;
    case "Success":     colNode = "w3-green" ;  titleNode = "Success" ;     break;
    case "Warning":     colNode = "w3-yellow" ; titleNode = "Warning" ;     break;
    default: break;                      
  }

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
}


/**-------------------------------------------------------------------------------------------------------------------------  
 *  Utilisation : class Tab methode MakefromNode
 * @param {*} T : Alert , Information , Success , Warning
 * @param {*} M 
 * @returns 
 */
  function buildTabNode(T, M)
{
const ndTab = document.createElement("div"); ndTab.classList ="w3-container" //constante 1

const ndBarTab = document.createElement("div") ; ndBarTab.classList = "w3-bar w3-black" //constante 2 //-><div class="w3-bar w3-black">Barre</div>
ndBarTab.innerHTML="w3-bar"

let classInfoTab = makeClassInfoTab(T)

const ndInfoTab = document.createElement("div") ; ndInfoTab.classList = classInfoTab // -> <div class="w3-panel w3-color">  

const ndH3InfoTab = document.createElement("h3") ; ndH3InfoTab.innerText = T // ->-> <h3>T</h3>
const ndtextInfoTab = document.createElement("p") ; ndtextInfoTab.innerText = M // ->-> //<p>M</p>

const ndContentTab = document.createElement("div") ; ndContentTab.classList ="w3-container" // -><div class="w3-container">


ndInfoTab.appendChild(ndH3InfoTab)
ndInfoTab.appendChild(ndtextInfoTab)

ndTab.appendChild(ndBarTab)
ndTab.appendChild(ndInfoTab)
ndTab.appendChild(ndContentTab)

return ndTab

}


/**----------------------------------------------------------------------------------------------------------------------
 * 
 */
function templateTabData ( strTemplate = 'strTemplate' , arrayTodosDatas )
{
let strResult ='<h2>Liste data</h2>'
strResult += `<p>nb records : ${arrayTodosDatas.length}</p>`

if (Array.isArray( arrayTodosDatas ) ) {
  arrayTodosDatas.forEach(
    function( arrayTodosData ) {
      strResult += '<p>'
      for (const [key, value] of Object.entries( arrayTodosData ) ) {
        strResult += `${key}: ${value}` //userId: 1 , id: 1 , title: delectus aut autem ,completed: false
      }
      strResult += '</p>'
    }
  )
}

return strResult
}

function paginateTabData ( strTemplate = 'strTemplate' , arrayTodosDatas )
{
  const RMAX = 8;
  let NP = Math.ceil(arrayTodosDatas.length / RMAX )
  const CP = 1;
  let IMAX = 0

  let strResult ='<h2>Liste data</h2>'
  strResult += `<p>nb records : ${arrayTodosDatas.length}</p>`
  strResult += `<p>Page : ${CP+1} / ${NP} ; avec  ${RMAX} enregistrements par page</p>`

  if (Array.isArray( arrayTodosDatas ) ) {
  //  IMAX = ( CP + 1 ) * RMAX  // CP = 0+1 => 1 x 8  ;IMAX => 8  de  0 - 7
    
    IMAX = ( CP + 1 ) * RMAX  // CP = 1+1 => 2 x 8  ; IMAX => 16 
    if( IMAX > arrayTodosDatas.length ) { IMAX = arrayTodosDatas.length }

    for(let i =  CP * RMAX ; i < (IMAX) ; i++) {

        strResult += '<p>'
        for (const [key, value] of Object.entries( arrayTodosDatas[i] ) ) {
          
          strResult += `r :  ${i}  =>  ${key}: ${value}` //userId: 1 , id: 1 , title: delectus aut autem ,completed: false
        }
        strResult += '</p>'
    }
  }
  return strResult
}

function paginateTabData2 ( strTemplate = 'strTemplate' , arrayTodosDatas  , CP)
{
  const RMAX = 8;
  let NP = Math.ceil(arrayTodosDatas.length / RMAX ) // NP =2 pages de 0 à 1 NP-1
  let IMAX = 0
  if( CP < 0 ) {CP = 0}
  if (CP > ( NP - 1) ) {CP = NP -1}

  let strResult ='<h2>Liste data</h2>'
  strResult += `<p>nb records : ${arrayTodosDatas.length}</p>`
  strResult += `<p>Page : ${CP+1} / ${NP} ; avec  ${RMAX} enregistrements par page</p>`

  if (Array.isArray( arrayTodosDatas ) ) {
    IMAX = ( CP + 1 ) * RMAX 
    if( IMAX > arrayTodosDatas.length ) { IMAX = arrayTodosDatas.length }

    for(let i =  CP * RMAX ; i < (IMAX) ; i++) {

        strResult += '<p>'
        for (const [key, value] of Object.entries( arrayTodosDatas[i] ) ) {
          
          strResult += `r :  ${i}  =>  ${key}: ${value}` //userId: 1 , id: 1 , title: delectus aut autem ,completed: false
        }
        strResult += '</p>'
    }

    //lien de pagination
    /*
    <div class="w3-bar">
      <a href="#" class="w3-button">1</a>
    </div>
    */


    let strPagination ='<div class="w3-bar">'
    
    let strAnchor = `<a href="#" class="w3-button" onclick="console.log( 'alert' , ${CP+1} )">&lt;</a>` //
    //let strAnchor = `<a href="#" onclick="console.log( 'alert${CP+1}' )">&lt;</a>` //ok
    //let strAnchor = `<a href="#" onclick="console.log( 'alert' )">&lt;</a>` //ok
    
    //let strAnchor = '<a href=# onclick=console.log( "alert' + 0 +'" )>&lt;</a>' //no
    //let strAnchor = '<a href=# onclick=console.log(' + 0 +  ')>&lt;</a>' //ok
    //let strAnchor = `<a href=# onclick=console.log( ${0} )>&lt;</a>` NO
    strPagination += strAnchor
    strAnchor = `<a href="#" class="w3-button" onclick=console.log(`+ 1 +`)>&gt;</a>` //ok
    strPagination += strAnchor
    strPagination +='</div>' 
    //retour
    strResult += strPagination
  }
  return strResult
}
//=======================================   class PageManager ===========================================

/**----------------------------------------------------------------------------------------------------------------------
 * on cree id et nom automatiquement => check exist or not ??
 * generation d'une liste pour a 
 */
export class PageManager {
    
    #Overlay = null
    #Root = null
    #Sidebar = null
    #Topbar = null
    
    //onglets
    #currentTab = 0
    #collTabElement = null
    #collTab = null

    #dataTab = null

    #currentSection = 0
    #initMainElementsFounded = false
    /**----------------------------------------------------------------------------------------------------------------------
     * 
     * @param {*} overlayId 
     * @param {*} rootId 
     * @param {*} sidebarId 
     * @param {*} topbarId 
     */
    constructor( overlayId , rootId , sidebarId , topbarId)
    {
      this.#Overlay = document.getElementById(overlayId)
      this.#Root = document.getElementById(rootId)
      this.#Sidebar = document.getElementById(sidebarId)
      this.#Topbar = document.getElementById(topbarId)

      const a = (this.#Overlay != null) ? true : false
      const b = (this.#Root != null) ? true : false
      const c = (this.#Sidebar != null) ? true : false
      const d = (this.#Topbar != null) ? true : false
      
      this.#initMainElementsFounded = a && b && c && d       //verifier presence elements principaux ihm

      this.#currentTab = 0
      
      //debugger //this.#collTabElement = Array.from(this.#Root.getElementsByClassName(tabClass))

      let i = 0
      let objTab

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

      this.#currentSection = 0
      this.initFailSafe() // creation des elements sans déranger existant

    }
    /**-----------------------------------------------------------------------------------------------------------------------
     * recupere les donnees appelée par le constructeur
     */
    initFailSafe()
    {
      
      this.#collTab[8].MakefromNode("Titre Onglet 8 xhr") //ok

      let t8 = this.#collTab[8] //ref onglet 8 ??
      let PMref = this //ref PageManager  necessaire pour la fonction 
      // attention a la syntaxe { load: function(event) { PMref.UpdateData( t8 , event.target  ) } }  
      // effectue une requete  GET sur URL en passant le callback , les callbacks est une méthode de PageManager
 
      window.xhr_getRequest( 
        'GET' ,
        "https://jsonplaceholder.typicode.com/todos?_limit=13" ,
        {
          load: function(event) { PMref.UpdateData( t8 , event.target  ) } // this.UpdateData( t8 , event.target  )  // erreur
        }  
      )


    }

    /**-----------------------------------------------------------------------------------------------------------------------
     * callback , reponse en retour de requete
     * @param {*} el objet Tab
     * @param {*} evtXhr  event.target
     */
    UpdateData( el ,  evtXhr)
    {
      // console.log('PageManager li292 => retour cb -------------------------')
      // console.log(el)      // console.log(evtXhr)      //console.log(ptrReq.responseText);      //var data = JSON.parse(this.responseText)
      try 
      {
        let data = JSON.parse(evtXhr.responseText);
        console.log("DATA JSON :", data);
        el.StoreData(data) // stocke le sdonnées dans l'objet tab concerné reference el
      }
      catch (e) 
      {
      console.error("Erreur JSON :", e);
      }
    }


    /**-----------------------------------------------------------------------------------------------------------------------
     * les fonctions d'ajout sont à implémentr dans d'autres méthodes
     * @param {*} index 
     */
    showTab(index) {

      for (let i =  0 ; i < this.#collTab.length; i++) 
      {
        this.#collTab[i].obj.classList.toggle("w3-hide", i !== index)
        //TODO deplacer hide show dans tab
        //if (i !== index)  { this.#collTab[i].Hide() }

      }
      this.#currentTab = index;

      if ( index === 8 )
      {
        let TabTemp = this.#collTab[index]
        TabTemp.contentSet('<h1>PageManager.showTab</h1><p>TabTemp.contentSet</p>')
        // let a = TabTemp.contentGet() ; console.log(a) // OK a documenter
        //a = TabTemp.infoGet() ; console.log(a) // ok retouren un objet a documenter
        

        debugger
        
        TabTemp.contentSetfromData() // oK , NO => retourne liste complete sans pagination

        TabTemp.contentSetfromPaginateData(0) // Ok
        //Tab  infoSet(T,M) avec // - T = Alert , Information , Success , Warning // - M = message text html light
        TabTemp.infoSet('Information', 'Tab::infoSet(T,M) , it s works' )
      }

    }


}  