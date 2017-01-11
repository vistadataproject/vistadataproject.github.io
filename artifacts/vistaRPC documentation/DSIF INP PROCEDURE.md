---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF INP PROCEDURE 

 property | value 
--- | --- 
 label | DSIF INP PROCEDURE
 tag | PROCLK
 routine | [DSIFINP1](http://code.osehra.org/dox/Routine_DSIFINP1_source.html)
 return value type | SINGLE VALUE
 description | Pass in procedure number of IEN of procedure (File #80.1) for a description and IEN 

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| CODE | LITERAL | 10 | true | The procedure code (external format) you wish to lookup (file #80.1). | 
| DATE | LITERAL | 12 | true | The date you wish to check the code against code set versioning. | 