<!DOCTYPE html>
<html lang="fr">
  <head>
    <title>@yield('title', 'resources/views/layouts/pure30.blade.php')</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
      html,body,h1,h2,h3,h4,h5,h6 {font-family: "Roboto", sans-serif;}
      .w3-sidebar { bottom: 0; height: inherit; top: 43px; width: 250px; z-index: 3; }
      #Topbar { border: 2px solid green; } /* pour le dev */
    </style>
    <script src="{{ asset('public/build/assets/pure30_note.js') }}" type="module"></script>
  </head>

  <body>
    <!-- ================= HEADER ================= -->
    <header class="w3-top w3-row w3-theme-d4" id="Topbar">
      <div class="w3-theme-l1 w3-left" id="Topbar_Logo">
        <object data="{{ asset('public/img/Clock.svg') }}" type="image/svg+xml" width="40">&#9200;</object>
      </div>
      <div class="w3-theme w3-left" id="Topbar_Menu">
        Topbar_Menu
      </div>
      <div class="w3-theme-d1 w3-right" id="Topbar_Sys">
        <a class="w3-bar-item w3-button w3-hover-white w3-theme-l1"
           href="javascript:void(0)" onclick="ihmNavSidebarOpen()">
          <i class="fa fa-bars"></i>
        </a>
      </div>
    </header>

    <!-- ================= SIDEBAR (mobile) ================= -->
    <nav class="w3-sidebar w3-bar-block w3-collapse w3-large w3-theme-l5 w3-animate-left" id="Sidebar">
      <a href="javascript:void(0)" onclick="ihmNavSidebarClose()" 
         class="w3-right w3-xlarge w3-padding-large w3-hover-black w3-hide-large" 
         title="Close Menu">
        <i class="fa fa-remove"></i>
      </a>
      <h4 class="w3-bar-item"><b>Menu</b></h4>
    </nav>

    <!-- ================= OVERLAY (mobile) ================= -->
    <div class="w3-overlay" onclick="ihmNavSidebarClose()" 
         style="cursor:pointer" title="close side menu" id="Overlay"></div>

    <!-- ================= MAIN ================= -->
    <main class="w3-main" style="margin-left:250px">
      
      <article class="w3-container w3-padding-64">
        <div class="w3-container">
          
          <!-- Onglets -->
          <nav class="w3-bar w3-black">
            <a class="w3-bar-item w3-button">Onglet 1</a>
            <a class="w3-bar-item w3-button">Onglet 2</a>
          </nav>

          <!-- Panneau info -->
          <aside class="w3-panel w3-red">
            <h3>Alert!</h3>
            <p>Red often indicates trouble or error.</p>
          </aside>

          <!-- Sections -->
          <section class="w3-content w3-display-container">
            <div class="w3-display-topleft">
              <h2>tab12 - section 0</h2>
            </div>
            <div class="w3-display-topleft w3-hide">
              <h2>tab12 - section 1</h2>
            </div>
            <div class="w3-panel w3-hide">
              <h2>tab12 - section 2</h2>
            </div>
          </section>

        </div>
      </article>

      <!-- ================= FOOTER ================= -->
      <footer class="w3-bottom w3-container w3-theme-l2" id="myFooter">
        <div class="w3-center">
          <div class="w3-bar">myFooter</div>
        </div>
        <h4>Footer</h4>
        <p>Powered by 
          <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a>
        </p>
      </footer>

    </main>

  </body>

</html>
