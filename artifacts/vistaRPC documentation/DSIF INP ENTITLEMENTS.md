---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF INP ENTITLEMENTS 

 property | value 
--- | --- 
 label | DSIF INP ENTITLEMENTS
 tag | ENTS
 routine | [DSIFNOT3](http://code.osehra.org/dox/Routine_DSIFNOT3_source.html)
 return value type | SINGLE VALUE
 description | This RPC enters the Legal and Medical Entitlements in prep for the creation of the 7078.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL | 99 | true | Patient File Pointer (File #2, Required) | 
| vs:Input_Parameter-8994_02 | IEN | LITERAL | 99 | true | Internal Entry Number for File 162.2 FEE NOTIFICATION/REQUEST (Required) | 
| vs:Input_Parameter-8994_02 | LEME | LITERAL | 3 | true | Legal, Medical Indicators (Multi-Piece Legal Entitlement;Medical Entitlement 1=Yes, 0=No) If Legal is 0 Medical is forced to be 0 and Suspense code should be entered. If Legal is 1 Medical can be 0 or 1 | 
| vs:Input_Parameter-8994_02 | SUSP | LITERAL | 99 | true | Suspense Code (Pointer to file 161.27, Required if Legal or Medical is 0) | 
| vs:Input_Parameter-8994_02 | SDESC | LIST | 80 | true | Suspense Description (WP Array MUST START WITH 1. Only used if Suspense Code = 4 [Other]) To delete the existing description, (only if the user wants it deleted) pass SUSD(1)=\@\ | 