---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; PSB PUTIVPAR 

 property | value 
--- | --- 
 label | PSB PUTIVPAR
 tag | PUTPAR
 routine | [PSBPARIV](http://code.osehra.org/dox/Routine_PSBPARIV_source.html)
 return value type | GLOBAL ARRAY
 description | Sets 53.66 or parameters file w/input from 53.66 if ward is not \ALL\

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PSBWARD | LITERAL | 1 | true | ^1=Ward name^2=IEN of ward as in file 53.66 | 
| vs:Input_Parameter-8994_02 | PSBPARS | LITERAL | 1 | true | IV type - \A\ for Additive          \P\ for Piggyback          \H\ for Hyperal          \C\ for Chemo          \S\ for Syringe          \S\ for Syringe ^2-^16 Setting     1 for Warning     2 for Non-Verify     3 for Invalid | 
| vs:Input_Parameter-8994_02 | PSBDIV | LITERAL | 1 | true | ^1=IEN of division as in the Ward Location file (File #42) | 