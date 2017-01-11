---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; PSB CHECK SERVER 

 property | value 
--- | --- 
 label | PSB CHECK SERVER
 tag | CHECK
 routine | [PSBUTL](http://code.osehra.org/dox/Routine_PSBUTL_source.html)
 return value type | ARRAY
 description | Returns -1 or 1 when checking for patches and build on the server.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PSBWHAT | LIST |  | true | B = Returns Build Version for packages by NamespaceP = Returns if Patch is installed | 
| PSBDATA | LIST |  | true | Build/Package namespace (i.e. PSB) or Patch Number | 




 Generated on January 11th 2017, 7:15:04 am