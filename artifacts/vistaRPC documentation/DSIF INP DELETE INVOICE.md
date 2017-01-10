---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF INP DELETE INVOICE 

 property | value 
--- | --- 
 label | DSIF INP DELETE INVOICE
 tag | DELINV
 routine | [DSIFEP](http://code.osehra.org/dox/Routine_DSIFEP_source.html)
 return value type | SINGLE VALUE
 description | This RPC is a copy of FBCHDIN logic removing the user interaction.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | IEN | LITERAL | 99 | true | Internal Entry Number for FEE BASIS INVOICE File #162.5 | 
| vs:Input_Parameter-8994_02 | BAT | LITERAL | 99 | true | Internal Entry Number for FEE BASIS BATCH File #161.7 | 