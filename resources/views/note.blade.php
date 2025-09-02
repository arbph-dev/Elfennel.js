@extends('layouts.pure30')

@section('title', 'Note')

@section('description')
    <p class="w3-xlarge">Reporter les notes de dévellopements dans la section1 , onglet : 
        <a href="#" class="w3-bar-item w3-button w3-hide-small w3-hover-white" onclick="ihmTabShow( 1 )">Tab-1</a>
    </p>
@endsection

@section('section1')
    <h2>2025-08-25 : Reprise note</h2>
@endsection


@section('section2')
    <h1>section2 - mermaid</h1>
@endsection




@section('section3')
		<section class="cp_page_section">
          <!-- Bloc Eval -->
          <div id="CODEVAL_1" class="cp_codeval">

              <div id="CODEVAL_1_TITRE" class="titre">Eval 1</div>

              <div id="CODEVAL_1_SCRIPTCODE" class="scriptcode">
                  <textarea rows="20" cols="40" placeholder="Entrez votre code JavaScript ici...">const u=12&#13;&#10;const r=20&#13;&#10;const i=u/r&#13;&#10;const z = 'Courant '+ i +' A'&#13;&#10;z&#13;&#10;</textarea>
                 <!--  <button id="executeButton1" name="executeButton1">Exécuter</button> -->
                  <button id="executeButton" name="executeButton" onclick="evaluateCode(1)">Exécuter</button>
              </div>

              <div id="CODEVAL_1_RESULT" class="result">

              </div>

          </div>
		</section>
@endsection

@section('section4')
    <h1>section4 - mermaid</h1>
@endsection   


@section('section5')
            <hr>
            <div id="CALLOUT_2" class="cp_callout">
               
                <div id="CALLOUT_2_TITRE" class="titre">
                <span>Limite des CWS +</span>
                </div>

                <div id="CALLOUT_2_CONTENT" class="content">
                Les missiles hypersoniques posent un défi considérable. À des vitesses supérieures à Mach 5, les CWS conventionnels, qui sont conçus pour traiter des menaces plus lentes et proches, sont moins susceptibles de réussir l'interception. Même avec des canons à grande cadence de tir, la rapidité de ces missiles dépasse généralement les capacités des CWS actuels, car le temps d'engagement est extrêmement limité.<br/>
                Le missile parcourt environ 17 mètres entre deux tirs du CWS à Mach 5.
                Le CWS effectuera 60 tirs pendant le temps où le missile parcourt 1 km soit 0,6 seconde.
                </div>

            </div>

@endsection


@section('section6')
    <h1>section6 - mermaid</h1>
@endsection



@section('section7')
    <h1>section7 - threejs</h1>
@endsection


@section('section8')

@endsection


@section('section9')
    <h2>Tab-9, section 0</h2>
@endsection

@section('section10')
    <h2>Tab-10, section 0</h2>
@endsection


@section('section11')
    <h2>Tab-11, section 0</h2>
@endsection