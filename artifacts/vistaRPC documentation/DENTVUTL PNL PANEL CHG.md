---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTVUTL PNL PANEL CHG 

 property | value 
--- | --- 
 label | DENTVUTL PNL PANEL CHG
 tag | PNL
 routine | [DENTVUTL](http://code.osehra.org/dox/Routine_DENTVUTL_source.html)
 return value type | ARRAY
 description | Returns a list of patients with the provider matching the lookup value.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PROV | LITERAL | 15 | true | The lookup value entered by the user to find all patients with the entered provider in the format p1^p2.  P1 is provider ID and p2 is provider type (P or S). | 




Generated on January 11th 2017, 6:34:23 am