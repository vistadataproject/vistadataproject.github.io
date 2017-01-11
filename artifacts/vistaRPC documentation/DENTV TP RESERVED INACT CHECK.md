---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTV TP RESERVED INACT CHECK 

 property | value 
--- | --- 
 label | DENTV TP RESERVED INACT CHECK
 tag | CHKINA
 routine | [DENTVTP7](http://code.osehra.org/dox/Routine_DENTVTP7_source.html)
 return value type | SINGLE VALUE
 description | This RPC will perform a check on the IEN inputted and return whether or not the transaction found has been inactivated (for view only) or left alone. The check will inactivate a reserved transaction if it is more than 8 days old.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DENTIEN | LITERAL |  | true | This input value must be the IEN for the record contained in the DENTAL TP RESERVE (#228.7) file. | 