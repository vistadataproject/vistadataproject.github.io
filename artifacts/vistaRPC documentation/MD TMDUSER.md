---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MD TMDUSER 

 property | value 
--- | --- 
 label | MD TMDUSER
 tag | RPC
 routine | [MDRPCOU](http://code.osehra.org/dox/Routine_MDRPCOU_source.html)
 return value type | GLOBAL ARRAY
 description | Manages the VistA interface to the TMDUser object. Available options:  SIGNON     Connects session to the server and attempts signon.  ESIG       Verifies passed e-sig.  CHKVER     Verifies client version is compatible with server.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| OPTION | LITERAL | 30 | true | See RPC description. | 
| DATA | LITERAL | 250 | true | Required data for selected option. | 




Generated on January 11th 2017, 6:34:23 am