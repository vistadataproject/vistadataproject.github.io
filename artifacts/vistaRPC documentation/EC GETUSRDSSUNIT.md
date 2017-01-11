---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; EC GETUSRDSSUNIT 

 property | value 
--- | --- 
 label | EC GETUSRDSSUNIT
 tag | USRUNT
 routine | [ECUERPC](http://code.osehra.org/dox/Routine_ECUERPC_source.html)
 return value type | GLOBAL ARRAY
 description | Returns an array of DSS units for which the user has access.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ECARY | LITERAL |  | true | The input variable ECARY contains a value from the location or New Person file.   1. ECL   - Location IEN, #4(if define gives User's DSS units for a location)   2. ECDUZ - New Person IEN, #200 (if define gives list of DSS Units available              to user) | 




 Generated on January 11th 2017, 7:15:04 am