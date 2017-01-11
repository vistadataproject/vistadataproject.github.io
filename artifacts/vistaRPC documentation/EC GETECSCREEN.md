---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; EC GETECSCREEN 

 property | value 
--- | --- 
 label | EC GETECSCREEN
 tag | ECSCN
 routine | [ECUMRPC](http://code.osehra.org/dox/Routine_ECUMRPC_source.html)
 return value type | GLOBAL ARRAY
 description | Returns a list active, inactive or both of Event Code Screens from EC EVENT CODE SCREENS FILE #720.3.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ECARY | LITERAL |  |  | Input variable ECARY can contains the following elements separated by up-arrow.  STAT   - Active and/or inactive Event Code Screens           A-ctive (default), I-nactive, B-oth  LOCIEN - Location IEN (optional)  DSSIEN - DSS IEN (optional)If no parameter is passed, a status of active is assumed and all locations.If a LOCIEN is passed, then only the event codes screens with that location IEN is returned. Similarily, if a DSSIEN is passed, event code screens with for that DSS Unit is returned. | 




Generated on January 11th 2017, 6:34:23 am