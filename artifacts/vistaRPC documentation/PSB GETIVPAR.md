---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; PSB GETIVPAR 

 property | value 
--- | --- 
 label | PSB GETIVPAR
 tag | GETPAR
 routine | [PSBPARIV](http://code.osehra.org/dox/Routine_PSBPARIV_source.html)
 return value type | GLOBAL ARRAY
 description | Returns the IV parameters by IV type, as defined for a ward in file 53.66.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PSBWARD | LITERAL | 10 | true | The IEN of the ward from file 53.66 or the word 'ALL'. | 
| vs:Input_Parameter-8994_02 | PSBIVPT | LITERAL | 1 | true | The IV type - 'A' for Additive              'P' for Piggyback              'H' for Hyperal              'C' for Chemo              'S' for Syringe | 
| vs:Input_Parameter-8994_02 | PSBDIV | LITERAL | 1 | true | ^1=IEN of division as in the Ward Location file (File #42) | 