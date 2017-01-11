---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF CNSLTS UNHIDE CONSULT 

 property | value 
--- | --- 
 label | DSIF CNSLTS UNHIDE CONSULT
 tag | UNHIDE
 routine | [DSIFCNS](http://code.osehra.org/dox/Routine_DSIFCNS_source.html)
 return value type | SINGLE VALUE
 description | This RPC will unhide a Consult hidden in the FBCS Consult Tracking (#19655) file.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DSIFIEN | LITERAL |  | true | The IEN of the Consult you wish to unhide. | 