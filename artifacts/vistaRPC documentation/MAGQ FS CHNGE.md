---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGQ FS CHNGE 

 property | value 
--- | --- 
 label | MAGQ FS CHNGE
 tag | CHGSERV
 routine | [MAGQBUT](http://code.osehra.org/dox/Routine_MAGQBUT_source.html)
 return value type | SINGLE VALUE
 description | Finds the available network file server with the most space, changes the current write space pointer and returns the IEN.The candidate list requires the following criteria:ONLINEtype: MAGpath does not contain: \:\NON-ROUTER

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| null |  |  |  | No input parameter required. | 
| NOTIFY | LITERAL | 2 | true | A message will be sent to the G.MAG_SERVER mail group if this value is set to '1' and if the share space does not meet the lower limit as establishedby the PERCENT SERVER RESERVE (#11) in the SITE PARAMETER FILE (#2006.1). | 
| BP OS | LITERAL | 99 | true | This is the Microsoft Windows operating system name and version. | 
| BPWS | LITERAL | 99 | true | This is the Background Processor network computer name. | 




 Generated on January 11th 2017, 7:15:04 am