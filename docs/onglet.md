Les onglets sont associés à la classe **Tab** du module **PageManager**

La structure est détaillé là : 

## zone information

Une partie est réservé aux informations

On l'exploite avec une fonction dédiée : **Tab::infoSet**
```js
TabTemp.infoSet('Information', 'Tab::infoSet(T,M) , it s works' )
```

On gere 4 types d'informations a passer en chaine  dans le paramètre  **T** :
- Alert
- Information
- Success
- Warning

Un message est ransmis avec la variable **M**

