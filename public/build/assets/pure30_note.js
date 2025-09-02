
import * as VOX from './modules/vocxTwo.js';//2025-06-21//2025-05-30 //sent by ftp 
//2025-08-25
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as ENTITY from 'entity'
import * as XHR from './modules/reqxhr.js'

//2025-08-29
import { PageManager } from './modules/PageManager.js';

/* ----------------------------------------  IHM --------------------------------------------*/
// Variables IHM 


let ihmDivMain = null // OBJECT => Element div
let ihmTabCurrent = 0 // onglet par defaut  = 0 ??


let ihmDivTabCurrent = null // on pourrait ajouter une vraible pour conserver une reference au tabs ihmDivTabCurrent notamment pour les sections => fonctionne

// ihmGetTab(index) // ne pas affecter a window le script est a usage module 

// ihmClearTab(index) // ne pas affecte a window le script est a usage module 

// ihmDarkmodeToggle() TODO integrer dans strucutre layout // n'est pas affecte a window => a placer dans window.onload
let ihmDivInfotabCurrent = null

let ihmSectiontabCurrent = 0 // // section onglet par defaut =  0 ??
let ihmDivSectiontabCurrent = null // div section onglet
// ihmSectiontabShow( el, index )
// window.ihmSectiontabShow = ihmSectiontabShow //est assignée lors du chargment pour utilisation par a strucutre
// el est passé ave cle pointeur this sur element du menu , il permet de remonter sur le div contenant les sections
// on pourrait certainement le supprimer en utilisant ihmTabCurrent pour retrouver le parent


let ihmIsLoaded = false // Etat ihm

const DIHM = true // DEBUG IHM

// TODO renommer , tracer

// Get the Sidebar
let ihmNavSidebar // TODO rename ihmSidebar
const ihmNavSidebarId = 'Sidebar'  // // nav.w3-sidebar lien vers layout.pure30
// ihmNavSidebarOpen() //est assignée lors du chargment pour utilisation par strucutre layout.pure30
// ihmNavSidebarClose() //est assignée lors du chargment pour utilisation par strucutre layout.pure30

//let overlayBg 
let ihmDivOverlay 
const ihmDivOverlayId = 'Overlay'


/* ----------------------------------------  XHR --------------------------------------------*/
let XHRREQ
let xhrcb_ihmDivRet //  div pour retour apres traitmeent 
//var dataTodos var dataColl
//    window.xhr_getTodos = xhr_getTodos //fonction pour lire les todos depuis "https://jsonplaceholder.typicode.com/todos?_limit=13" 
//    window.xhrData_TODOS = null


/** 
 * affiche etat ihm 
 * TODO
 * - ajouter ihmNavSidebar
 * 
  */
function DebugIhm()
{
  if ( DIHM === true )
  {
  console.log("******************************************************************************")
  console.log("**************          DEBUG IHM                            *****************")
  console.log("******************************************************************************")
  console.log("Etat interface  ---------   Variables ")
  console.log(`ihmDivMain =>`);console.log(ihmDivMain)
  console.log(`ihmNavSidebar =>`);console.log(ihmNavSidebar)
  console.log(`ihmTabCurrent :  ${ihmTabCurrent}`)
  console.log(`ihmDivTabCurrent =>`);console.log(ihmDivTabCurrent)
  console.log(`ihmSectiontabCurrent :  ${ihmSectiontabCurrent}`)
  console.log(`ihmIsLoaded :  ${ihmIsLoaded}`)
  }

}

/**-----------------------------------------------------------------------------------------
 * Gestionnaire Event du document :: readystatechange
 * peut déclencher des traitements
 */
document.addEventListener("readystatechange", (event) => {

    console.log( `pure30_note.js / EventListener :: readystatechange / readystate: ${document.readyState}\n` ) ;

    switch (document.readyState) {   
        case "pure30_note.js / EventListener :: readystatechange /  script may be interactive": {   
          console.log(" Loading wait ..");
          break;
        }
        case "pure30_note.js / EventListener :: readystatechange / all ressources complete": {   
          console.log(" Loaded ..");
          break;
        }        
    }    
});

/**-----------------------------------------------------------------------------------------
 * Gestionnaire Event du document :: DOMContentLoaded
 * initilaise les variables de ihm
 */
document.addEventListener("DOMContentLoaded", (event) => {
    console.log(`pure30_note.js / EventListener :: DOMContentLoaded\n`);
});


let PM ;
/**
 *  point entrée application, est appelée par le navigateur
 * les autres events seront a gérer  
 */
window.onload = () => 
{ 
  // gestion data ,a placer en premier des pages en ont besoin
  window.xhr_getTodos = xhr_getTodos //fonction pour lire les todos depuis "https://jsonplaceholder.typicode.com/todos?_limit=13" 
  window.xhr_getRequest = xhr_getRequest

  window.xhrData_TODOS = null
  

    //gestion des onglets
    PM = new PageManager("Overlay", "Root", "Sidebar", "Topbar" )

    window.ihmTabShow = (i) => PM.showTab(i)
    //---------

    ihmDivMain = document.getElementById("Root")

    ihmNavSidebar = document.getElementById(ihmNavSidebarId) 
    window.ihmNavSidebarOpen= ihmNavSidebarOpen 
    window.ihmNavSidebarClose= ihmNavSidebarClose

    ihmDivOverlay = document.getElementById(ihmDivOverlayId) // TODO renommer , tracer
      
    window.ihmSetInfotab = ihmSetInfotab
    window.ihmSectiontabShow = ihmSectiontabShow

    window.testSV = testSV //synthese vocale
    window.Init3js = Init3js
  
    InitBlockCode()
    InitBlockCallout()
    InitBlockDragDrop(9,3) //2025-08-27

    ihmIsLoaded = true //fin du chargement
}

/* ----------------------------------------  XHR --------------------------------------------*/
/*
une requete "https://jsonplaceholder.typicode.com/todos?_limit=13" 
renvoie un tableau json de record, champ userId ,  id , title , completed 
la reponse est gere par le callback dans cette fonction this pointe sur xmlhttprequest 
=> une fonction requete une fonction callback avec ou sans mise en forme dans callback mais sauvegarde des datas impéraive


class TodoPlaceHolder
  classe de test peut servir pour mapper les data

xhrcb_getTodos()
  xhr cb callback
  
xhr_getTodos(divIdRetIhm) TODO prevoir la cb de


*/

/* TODO deplacer la classe vers xhr ?? 
 */
class TodoPlaceHolder
{
  constructor(options = {}) { Object.assign(this, options) }

  details()
  {
    //console.log(typeof org)  => [object Object] 
    console.log(Object.getOwnPropertyNames(this)); //Array(4) [ "userId", "id", "title", "completed" ]
    console.log(Object.keys(this));//Array(4) [ "userId", "id", "title", "completed" ]

    for (const [key, value] of Object.entries(this)) {
      console.log(`${key}: ${value}`); //userId: 1 , id: 1 , title: delectus aut autem ,completed: false
    }
  } 

}

function xhrcb_getTodos()
{
  let elmTab = document.getElementById(xhrcb_ihmDivRet); elmTab.innerHTML = ''

  try 
  {
      var data = JSON.parse(this.responseText)
      //dataColl = new TodoPlaceHolder(data)
      //window.xhrData_TODOS = dataColl // original
      
      window.xhrData_TODOS = data

      if (Array.isArray(data)) {

        data.forEach(function(org) {
              var p = document.createElement('p');
              p.textContent = org;
              elmTab.appendChild(p)
        });
      }

  } 
  catch(err) 
  {
      elmTab.textContent = "Erreur de parsing JSON: " + err;
  }


}

/**
 * TODO ressortir parametre sURL
 * execute une requete depuis section 8 de la vue note
 * @param {string} divIdRetIhm 
 */
function xhr_getTodos(divIdRetIhm)
{
  xhrcb_ihmDivRet = divIdRetIhm
  XHRREQ = new XHR.HttpReq()
  //XHRREQ.Request( 'GET' , "https://jsonplaceholder.typicode.com/todos?_limit=5" , true,
  XHRREQ.Request( 'GET' , "https://jsonplaceholder.typicode.com/todos?_limit=13" , true,
    { 
      load: xhrcb_getTodos,
      progress: () => console.log("xhr progress"),
      error: () => console.log("xhr error"),
      abort: () => console.log("xhr abort"),
    }
  )
}

function xhr_getRequest( M = 'GET' , U = "https://jsonplaceholder.typicode.com/todos?_limit=13" ,cbColFunctions )
{
  XHRREQ = new XHR.HttpReq()
  XHRREQ.Request( M , U , true , cbColFunctions )
}




/**-----------------------------------------------------------------------------------------------
 * @param {String} T type d'information Information, Warning, Alert, Success
 * @param {String} M Message
 * change la zone information en haut des sections d un onglet
*/
function ihmSetInfotab( T , M  )
{
  if ( ihmDivInfotabCurrent != null)
    { 
      //ihmDivInfotabCurrent.innerHTML = "Linked - tab is active" 
      ihmDivInfotabCurrent.classList.remove("w3-blue", "w3-yellow", "w3-red", "w3-green" )

      let H3Info = ihmDivInfotabCurrent.querySelector("h3")
      switch( T )
      {
        case "Alert":
          ihmDivInfotabCurrent.classList.add( "w3-red" )
          H3Info.innerHTML = "Alert"
          break;
        case "Information":
          ihmDivInfotabCurrent.classList.add( "w3-blue" )
          H3Info.innerHTML = "Information"
          break;
        case "Success":
          ihmDivInfotabCurrent.classList.add( "w3-green" )
          H3Info.innerHTML = "Success"
          break;
        case "Warning":
          ihmDivInfotabCurrent.classList.add( "w3-yellow" )
          H3Info.innerHTML = "Warning"
          break;
        default: break;                      
      }

      let MsgInfo = ihmDivInfotabCurrent.querySelector("p")
      MsgInfo.innerHTML = M

    }
}


/**-----------------------------------------------------------------------------------------------
 * Renvoie une reference au div onglet (classe w3-auto ) enfant du div main ( ihmDivMain w3-main)
 * @param {uint} index nombre entre 0 et n ( n depend du nombre de div w3-auto)
*/
function ihmGetTab( index ) //TODO renommer en ihmGetTab
{
  var xs = ihmDivMain.getElementsByClassName("w3-auto")
  if ( (index >= 0 ) && (index <= xs.length ) ) { return xs[ index ] }
}
/**-----------------------------------------------------------------------------------------------
 * Efface 
 * @param {uint} index 
 */
function ihmClearTab( index ){
  var x = ihmGetTab(index)
  if (  ( x != undefined ) && ( x != null ) ) { x.innerHTML = '' }
  
}

//-----------------------------------------------------------------------------------------------
/**
 * Affiche / masque les sections des onglets
 * @param {Object} el pointeur sur element de menu de section en haut dans les onglets
 * @param {*} index 
 */
function ihmSectiontabShow( el, index ) {
  //console.log(el)
  
  let elp = el.parentElement.parentElement

  if ( ihmDivTabCurrent === elp )
    {
      console.log("///////////////////////////Check ihmDivTabCurrent et elp => OK")
    }
  else
    {
      console.log("///////////////////////////Check ihmDivTabCurrent et elp => OK")
    }


  let x = elp.querySelectorAll("div.w3-content section")
  let i;

  for (i = 0; i < x.length; i++) {
  
    if ( ! x[i].classList.contains("w3-hide") ) { x[i].classList.add("w3-hide") }
  
    if ( ( i === index ) && ( x[i].classList.contains("w3-hide") ) ) 
      { 
        x[i].classList.remove("w3-hide") 
        ihmDivSectiontabCurrent = x[i]
        ihmSectiontabCurrent= index
      }
  }
  DebugIhm() // Etat IHM

}


/**---------------------------------------------------------------
 * TODO à inclure , Sert pour changer les style mais a revoir
 */
function ihmDarkmodeToggle() {
  let classBody = "w3-black"
  document.body.classList.toggle(classBody)

}
/**-------------------------------------------------------------------------------------------------
 * showing the sidebar, and overlay
 */
function ihmNavSidebarOpen() {
  if (ihmNavSidebar.style.display === 'block') 
    { ihmNavSidebar.style.display = 'none'; ihmDivOverlay.style.display = "none"  }
  else
    { ihmNavSidebar.style.display = 'block'; ihmDivOverlay.style.display = "block" }
}

/**-------------------------------------------------------------------------------------------------
 * Close the sidebar and hiding overlay
 */
function ihmNavSidebarClose() {
  ihmNavSidebar.style.display = "none"; ihmDivOverlay.style.display = "none"
}
// -------------------------------------------------------------------------------------------------------------------------------
/**
 * Gestion Event des blocs Drag drop
 * TODO splitter la methode ??
 * passer en debug sur overlay
 * 
 * on doit récupérer tous les elements sources dragSource
 * // affectation event dragstart aux elements dragSource
 * 
 * on doit récupérer tous les elements sources dragTarget
 * // affectation event dragover , drop aux elements dragTarget
 * 
 * TODO 
 * remplissage auto depusi xhr
 * - pagination
 * gérer tabid et sectionid
 * gérer ajout de meme source autorisé NON , OUI => compteur ?
 * 
 */
function InitBlockDragDrop(tabId , sectionId )
{

  let x
  let i

  let sectionSrc2 = document.getElementById("dragSource")
  //console.log("dd InitBlockDragDrop : sectionSrc2 " + sectionSrc2 )
  x = sectionSrc2.querySelectorAll("div.w3-panel")
  
  for (i = 0; i < x.length; i++) {
  //  console.log("x[" + i +"] " + x[i].id)
  // affectation event dragstart aux elements dragSource
    x[i].addEventListener(
      "dragstart",
      (ev) => {
        //console.log("dd : dragstart depuis " + ev.target.id)
        ev.dataTransfer.setData("text/plain", ev.target.id);// Add the target element's id to the data transfer object
        ev.dataTransfer.dropEffect = "copy";
      }
    );
  }

  let sectionTgt2 = document.getElementById("dragTarget")
  
  // affectation event dragover aux elements dragTarget
  sectionTgt2.addEventListener("dragover", (ev) => {
    //console.log("dd : dragover depuis " + ev.target.id)
    ev.preventDefault();
    //ev.dataTransfer.dropEffect = "copy";
  });
  
  // affectation event drop aux elements dragTarget
  sectionTgt2.addEventListener("drop", (ev) => {
    ev.preventDefault();
    //console.log("dd : dragover depuis " + ev.target.id)
    const data = ev.dataTransfer.getData("text/plain");
    const draggedEl = document.getElementById(data);// Get the id of the target and add the moved element to the target's DOM
    const copyEl = draggedEl.cloneNode(true);// clone complet avec ses enfants
    copyEl.id = data + "_copy_" + Date.now();// donner un nouvel id à la copie pour éviter les doublons
    ev.target.appendChild(copyEl);// clone puis ajout element
    //ev.target.appendChild(document.getElementById(data)); // deplace l'emeent

  });




}

function clearDragTarget(TgtId)
{
  console.log("dd : clearDragTarget " + TgtId )
  let sectionTgt2 = document.getElementById(TgtId)

}
// ?? 
function getDragTarget(TgtId)
{
  console.log("dd : getDragTarget " + TgtId )
  return document.getElementById(TgtId)
}



// -------------------------------------------------------------------------------------------------------------------------------
/**
 * Gestion Event des blocs Eval
 */
// -------------------------------------------------------------------------------------------------------------------------------
function InitBlockCode()
{
  document.querySelectorAll('.cp_codeval .titre').forEach(titre => {
      titre.addEventListener('click', () => {
          const parent = titre.parentElement;
          const scriptCode = parent.querySelector('.scriptcode');
          const result = parent.querySelector('.result');
          scriptCode.style.display = scriptCode.style.display === 'none' || scriptCode.style.display === '' ? 'block' : 'none';
          result.style.display = 'none';
      });
  });

}
/**
 * Evaluation code des blocs Eval
 */
window.evaluateCode = (id) => {
    const code = document.querySelector(`#CODEVAL_${id} .scriptcode textarea`).value;
    const resultDiv = document.querySelector(`#CODEVAL_${id} .result`);
    resultDiv.style.display = 'block';
    try {
        const result = eval(code);
        resultDiv.textContent = `Résultat : ${result}`;
    } catch (error) {
        resultDiv.textContent = `Erreur : ${error.message}`;
    }
}
/**
 * pour essai avec bloc code => ok 
 */
window.call = () => 
  {
    return 'calling module fonction'

  }


//---------------------------------------------------------------------------------------------------
/**
* Affecte les gestionnaires event au bloc callout
*
*/
function InitBlockCallout()
{

  document.querySelectorAll('.cp_callout .titre').forEach(titre => {

        titre.addEventListener('click', () => {

            const contentId = titre.id.replace('_TITRE', '_CONTENT');
            const contentDiv = document.getElementById(contentId);
            contentDiv.style.display = contentDiv.style.display === 'none' || contentDiv.style.display === '' ? 'block' : 'none';

        });
    });

  }

//------------------------------------------------------------------












