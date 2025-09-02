<!DOCTYPE html>
<html lang="fr">
  <head>
    <!-- *********************   HEAD   **************************** -->
    <title>@yield('title', 'resources/views/layouts/pure30.blade.php')</title>
    
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="https://www.w3schools.com/w3css/5/w3.css">
    <!-- <link rel="stylesheet" href="https://www.w3schools.com/lib/w3-theme-black.css"> -->
    <!--   <link rel="stylesheet" href="https://www.w3schools.com/lib/w3-theme-blue-grey.css"> -->
    <link rel="stylesheet" href="https://www.w3schools.com/lib/w3-theme-indigo.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
   	<link rel="stylesheet" href="{{ asset('public/build/assets/GpPluginLeaflet/GpPluginLeaflet.css') }}"/><!-- Extension Géoplateforme pour Leaflet   -->



    <script type="importmap">
      {
        "imports": {
        "three": "https://unpkg.com/three@0.160.0/build/three.module.js",
        "three/examples/jsm/controls/OrbitControls": "https://unpkg.com/three@0.160.0/examples/jsm/controls/OrbitControls.js",
        "entity": "https://elfennel.fr/public/build/assets/modules/entity.js"
        }
      }
    </script>
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
    <script src="https://unpkg.com/leaflet-tilelayer-wmts@1.0.0/dist/leaflet-tilelayer-wmts.js"></script>    
  	<script src="{{ asset('public/build/assets/GpPluginLeaflet/GpPluginLeaflet.js') }}"></script><!-- Extension Géoplateforme pour Leaflet   -->

    <style>
      html,body,h1,h2,h3,h4,h5,h6 {font-family: "Roboto", sans-serif;}

      .w3-sidebar { bottom: 0; height: inherit; top: 43px; width: 250px;  z-index: 3; }

      /*    COMPOSANT codeval -----------------------------------------------------------------------------------------------------------------------------------------------------------  */        
      .cp_codeval { border: 1px solid #ccc;  border-radius: 5px; margin: 1rem 0; overflow: hidden; }
      
      .cp_codeval .result { display: none; padding: 10px; }
      
      .cp_codeval .titre { background-color: #f1f1f1; cursor: pointer; padding: 10px; }
      
      .cp_codeval .scriptcode { display: none; padding: 10px; }
      
      .cp_codeval .scriptcode textarea { height: 200px; width: 100%; overflow-y: auto; } /* Ajoute une barre de défilement si le texte dépasse la hauteur définie */

      /*    COMPOSANT callout -----------------------------------------------------------------------------------------------------------------------------------------------------------  */        

    .cp_callout {
        border: 1px solid #ccc;
        margin: 1rem 0;
        padding: 0;
        border-radius: 5px;
        overflow: hidden;
    }
    .cp_callout .titre {
        background-color: #f1f1f1;
        padding: 10px;
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .cp_callout .content {
        display: none;
        padding: 10px;
        background-color: #fff;
        margin-top: 10px; /* Espace entre les autres éléments de la page */
        max-height: 150px; /* Hauteur maximale du conteneur pour éviter que le contenu ne déborde */
        overflow-y: auto; /* Ajoute une barre de défilement si le texte dépasse la hauteur définie */
    }

 
    #leaflet_Info {
        padding: 5px;
        width: 100%;
        height: 20px;
        font-family: monospace;
    }

    #leaflet_Map {
      padding: 5px;
      width: 100%;
      height: 90vh;
      box-shadow: 0 0 10px #999;
    }


    #threejs_main { display: block; }
   
 
    #Topbar{ border: 2px solid green; }    /* pour le dev  */
    </style>
    <script src="{{ asset('public/build/assets/pure30_note.js') }}" type="module"></script>
    <!-- ====================================   
    LAYOUT : 2025-08-29
      NAVBAR
        remplacment tag DIV par HEADER   gestion classe => reduction 
    =================================================== -->


  </head>

  <body>
  <!-- ====================================   Navbar 

  ===================================================  -->
    <header class="w3-top w3-row w3-theme-d4" id="Topbar" name="Topbar">
        <div class="w3-theme-l1 w3-left" id="Topbar_Logo" name="Topbar_Logo">
          <object data="{{ asset('public/img/Clock.svg') }}" type="image/svg+xml" width="40">&#9200;</object>           
        </div>
        <div class="w3-theme w3-left" id="Topbar_Menu" name="Topbar_Menu">
          <a href="#" class="w3-bar-item w3-button w3-hide-small w3-hover-white" onclick="ihmTabShow( 0 )">Tab-0</a>
          <a href="#" class="w3-bar-item w3-button w3-hide-small w3-hover-white" onclick="ihmTabShow( 1 )">Tab-1</a>
          <a href="#" class="w3-bar-item w3-button w3-hide-small w3-hover-white" onclick="ihmTabShow( 2 )">Tab-2</a>
          <a href="#" class="w3-bar-item w3-button w3-hide-small w3-hover-white" onclick="ihmTabShow( 3 )">Tab-3</a>
          <a href="#" class="w3-bar-item w3-button w3-hide-small w3-hover-white" onclick="ihmTabShow( 4 )">Tab-4</a>
          <a href="#" class="w3-bar-item w3-button w3-hide-small w3-hover-white" onclick="ihmTabShow( 5 )">Tab-5</a>
          <a href="#" class="w3-bar-item w3-button w3-hide-small w3-hover-white" onclick="ihmTabShow( 6 )">Tab-6</a>
          <a href="#" class="w3-bar-item w3-button w3-hide-small w3-hover-white" onclick="ihmTabShow( 7 )">Tab-7</a>
          <a href="#" class="w3-bar-item w3-button w3-hide-small w3-hover-white" onclick="ihmTabShow( 8 )">Tab-8</a>
          <a href="#" class="w3-bar-item w3-button w3-hide-small w3-hover-white" onclick="ihmTabShow( 9 )">Tab-9</a>
          <a href="#" class="w3-bar-item w3-button w3-hide-small w3-hover-white" onclick="ihmTabShow( 10 )">Tab-10</a>
          <a href="#" class="w3-bar-item w3-button w3-hide-small w3-hover-white" onclick="ihmTabShow( 11 )">Tab-11</a>
          <a href="#" class="w3-bar-item w3-button w3-hide-small w3-hover-white" onclick="ihmTabShow( 12 )">Tab-12</a>
        </div>
        <div class="w3-theme-d1 w3-right" id="Topbar_Sys" name="Topbar_Sys">
          <!-- TOPROD => class=" ... w3-hide-large ...."  w3-hide-large pour maquer sur pc mais affichée pour essai -->
          <a class="w3-bar-item w3-button w3-hover-white w3-theme-l1" href="javascript:void(0)" onclick="ihmNavSidebarOpen()" >
            <i class="fa fa-bars"></i>
          </a>
        </div>

    </header>  

  <!-- ====================================   Sidebar pour les mobiles  =================================================== -->
  <nav class="w3-sidebar w3-bar-block w3-collapse w3-large w3-theme-l5 w3-animate-left" id="Sidebar" name="Sidebar">
    <a href="javascript:void(0)" onclick="ihmNavSidebarClose()" class="w3-right w3-xlarge w3-padding-large w3-hover-black w3-hide-large" title="Close Menu">
      <i class="fa fa-remove"></i><!-- bouton close sur mobile,tablet -->
    </a>
    
    <h4 class="w3-bar-item"><b>Menu</b></h4>
    
    <a class="w3-bar-item w3-button w3-hover-black" href="#" onclick="ihmTabShow( 0 )">Link</a>
    <a class="w3-bar-item w3-button w3-hover-black" href="#" onclick="ihmTabShow( 1 )">Link</a>
    <a class="w3-bar-item w3-button w3-hover-black" href="#" onclick="ihmTabShow( 2 )">Link</a>
    <a class="w3-bar-item w3-button w3-hover-black" href="#" onclick="ihmTabShow( 3 )">Link</a>
    <a class="w3-bar-item w3-button w3-hover-black" href="#" onclick="ihmTabShow( 4 )">Link</a>
    <a class="w3-bar-item w3-button w3-hover-black" href="#" onclick="ihmTabShow( 5 )">Link</a>  
    <a class="w3-bar-item w3-button w3-hover-black" href="#" onclick="ihmTabShow( 6 )">Link</a>
    <a class="w3-bar-item w3-button w3-hover-black" href="#" onclick="ihmTabShow( 7 )">Link</a>
    <a class="w3-bar-item w3-button w3-hover-black" href="#" onclick="ihmTabShow( 8 )">Link</a>
    <a class="w3-bar-item w3-button w3-hover-black" href="#" onclick="ihmTabShow( 9 )">Link</a>
    <a class="w3-bar-item w3-button w3-hover-black" href="#" onclick="ihmTabShow( 10 )">Link</a>
    <a class="w3-bar-item w3-button w3-hover-black" href="#" onclick="ihmTabShow( 11 )">Link</a>
    <a href="#" class="w3-bar-item w3-button w3-hide-small w3-hover-white" onclick="ihmTabShow( 12 )">Tab-12</a>    
  </nav>

  <!-- ====================================   Overlay pour les mobiles  =================================================== -->
  <!-- Overlay effect when opening sidebar on small screens -->
  <div class="w3-overlay" onclick="ihmNavSidebarClose()" style="cursor:pointer" title="close side menu" id="Overlay" name="Overlay"></div>

  <!-- ==================================== main container ====================================  -->
  <div class="w3-main" style="margin-left:250px" id="Root" name="Root">
  <!-- ==================================== onglet ==================================== -->

    <!-- ==================================== div.main div[0] ==================================== -->       
    <div class="w3-container w3-padding-64" >
      @yield('description', 'Site')
    </div>

    <!-- ==================================== div.main div[1] ==================================== -->       
    <div class="w3-container w3-padding-64 w3-hide">
      @yield('section1', '<h2>Section 1</h2>')
    </div>

    <!-- ==================================== div.main div[2] ==================================== -->       
    <div class="w3-container w3-padding-64 w3-hide">
      @yield('section2', '<h2>Section 2</h2>')
    </div>

    <!-- ==================================== div.main div[3] ==================================== -->       
    <div class="w3-container w3-padding-64 w3-hide" >
      @yield('section3', '<h2>Section 3</h2>')
    </div>

    <!-- ==================================== div.main div[4] ==================================== -->       
    <div class="w3-container w3-padding-64 w3-hide" >
      @yield('section4', '<h2>Section 4</h2>')
    </div>

    <!-- ==================================== div.main div[5] ==================================== -->           
    <div class="w3-container w3-padding-64 w3-hide" >
      @yield('section5', '<h2>Section 5</h2>')
    </div>

    <!-- ==================================== div.main div[6] ==================================== -->       
    <div class="w3-container w3-padding-64 w3-hide" >
      @yield('section6', '<h2>Section 6</h2>')
    </div>

    <!-- ==================================== div.main div[7] ==================================== -->       
    <div class="w3-container w3-padding-64 w3-hide" >
      @yield('section7', '<h2>Section 7</h2>')
    </div>

    <!-- ==================================== div.main div[8] ==================================== -->       
    <div class="w3-container w3-padding-64 w3-hide" >

    </div>

    <!-- ==================================== div.main div[9] ==================================== -->       
    <div class="w3-container w3-padding-64 w3-hide" >

      <div class="w3-container">    
        <div class="w3-bar w3-black">
          <a href="#" class="w3-bar-item w3-button" onclick="ihmSectiontabShow( this, 0)">section 0</a>
          <a href="#" class="w3-bar-item w3-button" onclick="ihmSectiontabShow( this, 1)">Tokyo</a>
          <a href="#" class="w3-bar-item w3-button" onclick="ihmSectiontabShow( this, 2)">London</a>
          <a href="#" class="w3-bar-item w3-button" onclick="ihmSectiontabShow( this, 3)">essai</a>
        </div> 

        <div class="w3-panel w3-blue">
          <h3>Information!</h3>
          <p>Blue often indicates a neutral informative change or action.</p>
        </div>  

        <div class="w3-content w3-display-container">

          <section class="w3-display-topleft">
            @yield('section9', '<h2>Tab-9, section 0</h2>')
          </section>

          <section class="w3-display-topleft w3-hide">
            <h2>Tokyo</h2>
            <p>Tokyo is the center of the Greater Tokyo Area, and the most populous metropolitan area in the world.</p>
          </section>

          <section class="w3-display-topleft w3-hide">
            <h2>London</h2>
            <p>London is the center of the Greater London Area, beatles you know.</p>
          </section>

          <!-- ==================================== div.main div[9] section[3] ==================================== -->
          <section class="w3-display-topleft w3-hide" style="width:800px;">
            <h2>essai</h2>

              <div id="dragSource" style="position:relative;height:300px;" class="w3-display-topleft w3-content">
                <div id="tab9_section3_src_id1" class="w3-panel w3-card-4 w3-green w3-center w3-quarter" draggable="true"><p>div 1</p></div>
                <div id="tab9_section3_src_id2" class="w3-panel w3-card-4 w3-red w3-center w3-quarter" draggable="true"><p>div 2</p></div>
                <div id="tab9_section3_src_id3" class="w3-panel w3-card-4 w3-blue w3-center w3-quarter" draggable="true"><p>div 3</p></div>
                <div id="tab9_section3_src_id4" class="w3-panel w3-card-4 w3-dark-grey w3-center w3-quarter" draggable="true"><p>div 4</p></div>
                <div id="tab9_section3_src_id5" class="w3-panel w3-card-4 w3-black w3-center w3-quarter" draggable="true"><p>div 5</p></div>
                <div id="tab9_section3_src_id6" class="w3-panel w3-card-4 w3-purple w3-center w3-quarter" draggable="true"><p>div 6</p></div>                 
              </div>

              <input id="section9-bt1" name="section9-bt1" type="button" value="clearDragTarget('dragTarget')"/>
              <input id="section9-bt1" name="section9-bt1" type="button" value="GetDragTarget('dragTarget')"/>

              <div id="dragTarget" class="w3-teal w3-bar" style="height:64px">
                dragTarget
              </div>  

          </section>

        </div>

      </div>

    </div>

    <!-- ==================================== div.main div[10] ==================================== -->
    <div class="w3-container w3-padding-64 w3-hide" >
      <div class="w3-container">    
        <div class="w3-bar w3-black">
          <a href="#" class="w3-bar-item w3-button" onclick="ihmSectiontabShow( this, 0)">section 0</a>
          <a href="#" class="w3-bar-item w3-button" onclick="ihmSectiontabShow( this, 1)">section 1</a>
          <a href="#" class="w3-bar-item w3-button" onclick="ihmSectiontabShow( this, 2)">section 2</a>
          <a href="#" class="w3-bar-item w3-button" onclick="ihmSetInfotab('Success','Un nouveau message, Success ;)')">Info->Alert</a>
          
        </div> 
        <!-- INFO  -->
        <div class="w3-panel w3-red">
          <h3>Alert!</h3>
          <p>Red often indicates trouble or error.</p>
        </div>  

        <!-- SECTIONS  -->
        <div class="w3-content w3-display-container">
          <!-- TAB 10 - SECTION 0  -->
          <section class="w3-display-topleft">
            @yield('section10', '<h2>Tab-10, section 0</h2>')
          </section>
          <!-- TAB 10 - SECTION 1  -->
          <section class="w3-display-topleft w3-hide">
            <h2>Paris</h2>
            <p>Paris est la capitale de la France.</p>
          </section>
          <!-- TAB 10 - SECTION 2  -->
          <section class="w3-display-topleft w3-hide">
            <h2>Brest</h2>
            <p>Brest est un port stratégique ouvert sur l'atlantique</p>
          </section>

        </div>

      </div>      
      




    </div>

    <!-- ==================================== div.main div[11] ==================================== -->
    <div class="w3-container w3-padding-64 w3-hide" >
      <div class="w3-container">    
        <div class="w3-bar w3-black">
          <a href="#" class="w3-bar-item w3-button" onclick="ihmSectiontabShow( this, 0)">section 0</a>
          <a href="#" class="w3-bar-item w3-button" onclick="ihmSectiontabShow( this, 1)">section 1</a>
          <a href="#" class="w3-bar-item w3-button" onclick="ihmSectiontabShow( this, 2)">section 2</a>
          <a href="#" class="w3-bar-item w3-button" onclick="ihmSetInfotab('Alert','Un nouveau message, Alert ;)')">Info->Alert</a>
          <a href="#" class="w3-bar-item w3-button" onclick="ihmSetInfotab('Information','Un nouveau message, Information ;)')">Info->Information</a>
          <a href="#" class="w3-bar-item w3-button" onclick="ihmSetInfotab('Success','Un nouveau message, Success ;)')">Info->Success</a>
          <a href="#" class="w3-bar-item w3-button" onclick="ihmSetInfotab('Warning','Un nouveau message, Warning ;)')">Info->Warning</a>
        </div> 
        <!-- INFO  -->
        <div class="w3-panel w3-red">
          <h3>Alert!</h3>
          <p>Red often indicates trouble or error.</p>
        </div>  

        <!-- SECTIONS  -->
        <div class="w3-content w3-display-container">
          <!-- TAB 10 - SECTION 0  -->
          <section class="w3-display-topleft">
            @yield('section11', '<h2>Tab-11, section 0</h2>')
          </section>
          <!-- TAB 10 - SECTION 1  -->
          <section class="w3-display-topleft w3-hide">
            <h2>tab11 - section 1</h2>
            <p>contenu section 11.1</p>
          </section>
          <!-- TAB 10 - SECTION 2  -->
          <section class="w3-panel w3-hide">
            <h2>essai</h2>

              <div id="dragSource11" style="position:relative;height:300px;" class="w3-display-topleft w3-content">
                <div id="tab11_section3_src_id1" class="w3-panel w3-card-4 w3-green w3-center w3-quarter" draggable="true"><p>div 1</p></div>
                <div id="tab11_section3_src_id2" class="w3-panel w3-card-4 w3-red w3-center w3-quarter" draggable="true"><p>div 2</p></div>
                <div id="tab11_section3_src_id3" class="w3-panel w3-card-4 w3-blue w3-center w3-quarter" draggable="true"><p>div 3</p></div>
                <div id="tab11_section3_src_id4" class="w3-panel w3-card-4 w3-dark-grey w3-center w3-quarter" draggable="true"><p>div 4</p></div>
                <div id="tab11_section3_src_id5" class="w3-panel w3-card-4 w3-black w3-center w3-quarter" draggable="true"><p>div 5</p></div>
                <div id="tab9_section3_src_id6" class="w3-panel w3-card-4 w3-purple w3-center w3-quarter" draggable="true"><p>div 6</p></div>                 
              </div>

              <input id="section11-bt1" name="section11-bt1" type="button" value="clearDragTarget('dragTarget')"/>
              <input id="section11-bt2" name="section11-bt2" type="button" value="GetDragTarget('dragTarget')"/>

              <div id="dragTarget11" class="w3-row" style="height:64px">
                <!-- 3 col -->
                  <div class="w3-theme-l1 w3-col s4 m4 l4">---</div>
                  <div class="w3-theme w3-col s4 m4 l4">---</div>
                  <div class="w3-theme-d1 w3-col s4 m4 l4">---</div>
              </div>  
          </section>

        </div>

      </div>      

    </div>      

    <!-- ==================================== div.main div[12] ==================================== -->
    <div class="w3-container w3-padding-64 w3-hide" >
      <div class="w3-container">    
        <div class="w3-bar w3-black">
          <a href="#" class="w3-bar-item w3-button" onclick="ihmSectiontabShow( this, 0)">section 0</a>
          <a href="#" class="w3-bar-item w3-button" onclick="ihmSectiontabShow( this, 1)">section 1</a>
          <a href="#" class="w3-bar-item w3-button" onclick="ihmSectiontabShow( this, 2)">section 2</a>
          <a href="#" class="w3-bar-item w3-button" onclick="ihmSetInfotab('Alert','Un nouveau message, Alert ;)')">Info->Alert</a>
          <a href="#" class="w3-bar-item w3-button" onclick="ihmSetInfotab('Information','Un nouveau message, Information ;)')">Info->Information</a>
          <a href="#" class="w3-bar-item w3-button" onclick="ihmSetInfotab('Success','Un nouveau message, Success ;)')">Info->Success</a>
          <a href="#" class="w3-bar-item w3-button" onclick="ihmSetInfotab('Warning','Un nouveau message, Warning ;)')">Info->Warning</a>
        </div> 
        <!-- INFO  -->
        <div class="w3-panel w3-red">
          <h3>Alert!</h3>
          <p>Red often indicates trouble or error.</p>
        </div>  

        <!-- SECTIONS  -->
        <div class="w3-content w3-display-container">

          <!-- TAB 12 - SECTION 0  -->
          <section class="w3-display-topleft">
            @yield('section12', '<h2>Tab-12, section 0</h2>')
          </section>
          
          <!-- TAB 12 - SECTION 1  -->
          <section class="w3-display-topleft w3-hide">
            <h2>tab12 - section 1</h2>
            <p>contenu section 12.1</p>
          </section>

          <!-- TAB 12 - SECTION 2  -->
          <section class="w3-panel w3-hide">
            <h2>essai</h2>

              <div id="dragSource12" style="position:relative;height:300px;" class="w3-display-topleft w3-content">
                <div id="tab12_section3_src_id1" class="w3-panel w3-card-4 w3-green w3-center w3-quarter" draggable="true"><p>div 1</p></div>
                <div id="tab12_section3_src_id2" class="w3-panel w3-card-4 w3-red w3-center w3-quarter" draggable="true"><p>div 2</p></div>
                <div id="tab12_section3_src_id3" class="w3-panel w3-card-4 w3-blue w3-center w3-quarter" draggable="true"><p>div 3</p></div>
                <div id="tab12_section3_src_id4" class="w3-panel w3-card-4 w3-dark-grey w3-center w3-quarter" draggable="true"><p>div 4</p></div>
                <div id="tab12_section3_src_id5" class="w3-panel w3-card-4 w3-black w3-center w3-quarter" draggable="true"><p>div 5</p></div>
                <div id="tab12_section3_src_id6" class="w3-panel w3-card-4 w3-purple w3-center w3-quarter" draggable="true"><p>div 6</p></div>                 
              </div>

              <input id="section12-bt1" name="section12-bt1" type="button" value="clearDragTarget('dragTarget')"/>
              <input id="section12-bt2" name="section12-bt2" type="button" value="GetDragTarget('dragTarget')"/>

              <div id="dragTarget12" class="w3-row" style="height:64px">
                <!-- 3 col -->
                  <div class="w3-theme-l1 w3-col s4 m4 l4">---</div>
                  <div class="w3-theme w3-col s4 m4 l4">---</div>
                  <div class="w3-theme-d1 w3-col s4 m4 l4">---</div>
              </div>  
          </section>

        </div>

      </div>      

    </div>     

    
    <footer id="myFooter" class="w3-bottom w3-container w3-theme-l2">
      <!-- ==================================== Pagination ==================================== -->
      <div class="w3-center">
        <div class="w3-bar">
          <a class="w3-button w3-black" href="#" onclick="ihmTabShow( 0 )">0</a>
          <a class="w3-button w3-hover-black" href="#" onclick="ihmTabShow( 1 )">1</a>
          <a class="w3-button w3-hover-black" href="#" onclick="ihmTabShow( 2 )">2</a>
          <a class="w3-button w3-hover-black" href="#" onclick="ihmTabShow( 3 )">3</a>
          <a class="w3-button w3-hover-black" href="#" onclick="ihmTabShow( 4 )">4</a>
          <a class="w3-button w3-hover-black" href="#" onclick="ihmTabShow( 5 )">5</a>
          <a class="w3-button w3-hover-black" href="#" onclick="ihmTabShow( 6 )">6</a>
          <a class="w3-button w3-hover-black" href="#" onclick="ihmTabShow( 7 )">7</a>
          <a class="w3-button w3-hover-black" href="#" onclick="ihmTabShow( 8 )">8</a>
          <a class="w3-button w3-hover-black" href="#" onclick="ihmTabShow( 9 )">9</a>
          <a class="w3-button w3-hover-black" href="#" onclick="ihmTabShow( 10 )">10</a>
          <a class="w3-button w3-hover-black" href="#" onclick="ihmTabShow( 11 )">11</a>
          <a class="w3-button w3-hover-black" href="#" onclick="ihmTabShow( 12 )">12</a>
        </div>
      </div>

        <h4>Footer</h4>
        <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>

    </footer>

    <!-- ==================================== END MAIN ==================================== -->
  </div>
    <!-- ==================================== footer ==================================== 
       <footer id="myFooter" style="position: relative;top: 492px;">
        w3-stretch
      <div class="w3-container">
      </div>

    -->



</body>
</html>




