---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DVBAB VERSION 

 property | value 
--- | --- 
 label | DVBAB VERSION
 tag | VERSION
 routine | [DVBAB1](http://code.osehra.org/dox/Routine_DVBAB1_source.html)
 return value type | SINGLE VALUE
 description | Used to ensure GUI and VISTA are on the same version of CAPRI.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DVBGUIV | LITERAL |  |  | Version # of CAPRI GUI.  Sets a variable DVBABVx so that the error trap will display what version of the client software the user was utilizing. | 