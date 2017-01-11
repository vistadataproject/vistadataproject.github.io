---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; EC GETECSCATS 

 property | value 
--- | --- 
 label | EC GETECSCATS
 tag | CAT
 routine | [ECUERPC](http://code.osehra.org/dox/Routine_ECUERPC_source.html)
 return value type | GLOBAL ARRAY
 description | Returns an array of categories for an Event Code screen based on a specificlocation and DSS unit.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ECARY | LITERAL |  | true | Input variable ECARY contains the following values separated by up-arrow.  1. ECL  - Location IEN  2. ECD  - DSS Unit IEN | 