

Le code brut est visible dans le fichier [pure30.blade.php](./resources/views/layouts/pure30.blade.php)



- body
	- **header** class **w3-top w3-row w3-theme-d4** id **Topbar**
		- **div** class **w3-theme-l1 w3-left**  id **Topbar_Logo**
  		- **div** class **w3-theme w3-left** id **Topbar_Menu**
     		- **a** class **w3-bar-item w3-button w3-hide-small w3-hover-white**
		- **div** class **w3-theme-d1 w3-right** id **Topbar_Sys**
  			- **a** class **w3-bar-item w3-button w3-hover-white w3-theme-l1 w3-hide-large**
	- **nav** class  **w3-sidebar w3-bar-block w3-collapse w3-large w3-theme-l5 w3-animate-left** id **Sidebar**
		- **a** class **w3-right w3-xlarge w3-padding-large w3-hover-black w3-hide-large**
			- **i** fa fa remove
   		- **h4** class **w3-bar-item**
		- **a** class **w3-bar-item w3-button w3-hover-black**
	- **div** class **w3-overlay** id **Overlay**
	- **div** class **w3-main** id **Root**
		- **div**   class **w3-auto w3-padding-64**
		- **div**   class **w3-auto w3-padding-64 w3-hide**
	- **footer**   class **w3-bottom w3-container w3-theme-l2** id **myFooter**
		- **div** class **w3-center**
			- **div** class **w3-bar**
				- **a** class **w3-button w3-black**
			- **h4**
			- **p**



```html
 <body>
    <header class="w3-top w3-row w3-theme-d4" id="Topbar" name="Topbar">
        <div class="w3-theme-l1 w3-left" id="Topbar_Logo" name="Topbar_Logo">
        <div class="w3-theme w3-left" id="Topbar_Menu" name="Topbar_Menu">
          <a href="#" class="w3-bar-item w3-button w3-hide-small w3-hover-white" onclick="ihmTabShow( 0 )">Tab-0</a>
        <div class="w3-theme-d1 w3-right" id="Topbar_Sys" name="Topbar_Sys">
          <a class="w3-bar-item w3-button w3-hover-white w3-theme-l1" href="javascript:void(0)" onclick="ihmNavSidebarOpen()" >
            <i class="fa fa-bars"></i>

  <nav class="w3-sidebar w3-bar-block w3-collapse w3-large w3-theme-l5 w3-animate-left" id="Sidebar" name="Sidebar">
    <a href="javascript:void(0)" onclick="ihmNavSidebarClose()" class="w3-right w3-xlarge w3-padding-large w3-hover-black w3-hide-large" title="Close Menu">
    <h4 class="w3-bar-item"><b>Menu</b></h4>
    <a class="w3-bar-item w3-button w3-hover-black" href="#" onclick="ihmTabShow( 0 )">Link</a>
    <a href="#" class="w3-bar-item w3-button w3-hide-small w3-hover-white" onclick="ihmTabShow( 12 )">Tab-12</a>    

  <div class="w3-overlay" onclick="ihmNavSidebarClose()" style="cursor:pointer" title="close side menu" id="Overlay" name="Overlay"></div>

  <div class="w3-main" style="margin-left:250px" id="Root" name="Root">

    <div class="w3-container w3-padding-64" >
    <div class="w3-container w3-padding-64 w3-hide">
    <div class="w3-container w3-padding-64 w3-hide">@yield('section2', '<h2>Section 2</h2>')</div>
    <div class="w3-container w3-padding-64 w3-hide" >
    <div class="w3-container w3-padding-64 w3-hide" >
    <div class="w3-container w3-padding-64 w3-hide" >
    <div class="w3-container w3-padding-64 w3-hide" >
    <div class="w3-container w3-padding-64 w3-hide" >
    <div class="w3-container w3-padding-64 w3-hide" >
    <div class="w3-container w3-padding-64 w3-hide" >
      <div class="w3-container">    

        <div class="w3-bar w3-black">
          <a href="#" class="w3-bar-item w3-button" onclick="ihmSectiontabShow( this, 0)">section 0</a>

        <div class="w3-panel w3-blue">
          <h3>Information!</h3>
          <p>Blue often indicates a neutral informative change or action.</p>

        <div class="w3-content w3-display-container">
          <section class="w3-display-topleft">
          <section class="w3-display-topleft w3-hide">
          <section class="w3-display-topleft w3-hide">
          <section class="w3-display-topleft w3-hide" style="width:800px;">
              <div id="dragSource" style="position:relative;height:300px;" class="w3-display-topleft w3-content">
                <div id="tab9_section3_src_id1" class="w3-panel w3-card-4 w3-green w3-center w3-quarter" draggable="true"><p>div 1</p></div>
              <input id="section9-bt1" name="section9-bt1" type="button" value="clearDragTarget('dragTarget')"/>
              <input id="section9-bt1" name="section9-bt1" type="button" value="GetDragTarget('dragTarget')"/>
              <div id="dragTarget" class="w3-teal w3-bar" style="height:64px">
          </section>

    <div class="w3-container w3-padding-64 w3-hide" >
      <div class="w3-container">    
        <div class="w3-bar w3-black">
          <a href="#" class="w3-bar-item w3-button" onclick="ihmSectiontabShow( this, 0)">section 0</a>
          <a href="#" class="w3-bar-item w3-button" onclick="ihmSectiontabShow( this, 1)">section 1</a>
          <a href="#" class="w3-bar-item w3-button" onclick="ihmSectiontabShow( this, 2)">section 2</a>
          <a href="#" class="w3-bar-item w3-button" onclick="ihmSetInfotab('Success','Un nouveau message, Success ;)')">Info->Alert</a>

        <div class="w3-panel w3-red">
          <h3>Alert!</h3>
          <p>Red often indicates trouble or error.</p>

        <div class="w3-content w3-display-container">
          <section class="w3-display-topleft">
          <section class="w3-display-topleft w3-hide">
          <section class="w3-display-topleft w3-hide">

    <div class="w3-container w3-padding-64 w3-hide" >
      <div class="w3-container">    
        <div class="w3-bar w3-black">
          <a href="#" class="w3-bar-item w3-button" onclick="ihmSectiontabShow( this, 0)">section 0</a>
        <div class="w3-panel w3-red">
          <h3>Alert!</h3>
          <p>Red often indicates trouble or error.</p>
        </div>  

        <div class="w3-content w3-display-container">

          <section class="w3-display-topleft">
          <section class="w3-display-topleft w3-hide">
          <section class="w3-panel w3-hide">
            <h2>essai</h2>
              <div id="dragSource11" style="position:relative;height:300px;" class="w3-display-topleft w3-content">
                <div id="tab11_section3_src_id1" class="w3-panel w3-card-4 w3-green w3-center w3-quarter" draggable="true"><p>div 1</p></div>
              <input id="section11-bt1" name="section11-bt1" type="button" value="clearDragTarget('dragTarget')"/>
              <input id="section11-bt2" name="section11-bt2" type="button" value="GetDragTarget('dragTarget')"/>

              <div id="dragTarget11" class="w3-row" style="height:64px">
                  <div class="w3-theme-l1 w3-col s4 m4 l4">---</div>


    <div class="w3-container w3-padding-64 w3-hide" >
      <div class="w3-container">    
        <div class="w3-bar w3-black">
          <a href="#" class="w3-bar-item w3-button" onclick="ihmSectiontabShow( this, 0)">section 0</a>
        <div class="w3-panel w3-red">
          <h3>Alert!</h3>
          <p>Red often indicates trouble or error.</p>

        <div class="w3-content w3-display-container">
          <section class="w3-display-topleft">
          <section class="w3-display-topleft w3-hide">
          <section class="w3-panel w3-hide">
              <div id="dragSource12" style="position:relative;height:300px;" class="w3-display-topleft w3-content">
                <div id="tab12_section3_src_id1" class="w3-panel w3-card-4 w3-green w3-center w3-quarter" draggable="true"><p>div 1</p></div>
              <input id="section12-bt1" name="section12-bt1" type="button" value="clearDragTarget('dragTarget')"/>
              <input id="section12-bt2" name="section12-bt2" type="button" value="GetDragTarget('dragTarget')"/>
              <div id="dragTarget12" class="w3-row" style="height:64px">
                  <div class="w3-theme-l1 w3-col s4 m4 l4">---</div>
    
    <footer id="myFooter" class="w3-bottom w3-container w3-theme-l2">
      <div class="w3-center">
        <div class="w3-bar">
          <a class="w3-button w3-black" href="#" onclick="ihmTabShow( 0 )">0</a>
        <h4>Footer</h4>
        <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
</body>


```












