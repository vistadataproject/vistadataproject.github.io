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

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL | 99 | true | Patient File Pointer (File #2, Required) | 
| IEN | LITERAL | 99 | true | Internal Entry Number for File 162.2 FEE NOTIFICATION/REQUEST (Required) | 
| LEME | LITERAL | 3 | true | Legal, Medical Indicators (Multi-Piece Legal Entitlement;Medical Entitlement 1=Yes, 0=No) If Legal is 0 Medical is forced to be 0 and Suspense code should be entered. If Legal is 1 Medical can be 0 or 1 | 
| SUSP | LITERAL | 99 | true | Suspense Code (Pointer to file 161.27, Required if Legal or Medical is 0) | 
| SDESC | LIST | 80 | true | Suspense Description (WP Array MUST START WITH 1. Only used if Suspense Code = 4 [Other]) To delete the existing description, (only if the user wants it deleted) pass SUSD(1)=\@\ | 




 Generated on January 11th 2017, 7:15:04 am