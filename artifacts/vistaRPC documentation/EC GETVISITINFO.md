---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; EC GETVISITINFO 

 property | value 
--- | --- 
 label | EC GETVISITINFO
 tag | VISINFO
 routine | [ECUERPC2](http://code.osehra.org/dox/Routine_ECUERPC2_source.html)
 return value type | SINGLE VALUE
 description | This broker call returns specific EC patient visit data (location, DSS Unit,patient ien, etc) based on a Visit Number.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ECARY | LITERAL |  | true | The value ECARY contains the Visit Number IEN (ECVSN), found in file (#9000010). | 




 Generated on January 11th 2017, 7:15:04 am