---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIROI1 PURGELBL PURGE LABELS 

 property | value 
--- | --- 
 label | DSIROI1 PURGELBL PURGE LABELS
 tag | PURGELBL
 routine | [DSIROI1](http://code.osehra.org/dox/Routine_DSIROI1_source.html)
 return value type | SINGLE VALUE
 description | Purges all labels queued for a specific clerk.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| CIEN | LITERAL | 20 | true | This is the IEN of file 200 for the requesting clerk. | 