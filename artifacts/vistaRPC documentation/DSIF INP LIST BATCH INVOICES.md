---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF INP LIST BATCH INVOICES 

 property | value 
--- | --- 
 label | DSIF INP LIST BATCH INVOICES
 tag | LSTINV
 routine | [DSIFEP](http://code.osehra.org/dox/Routine_DSIFEP_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC will return the IEN's to the FEE BASIS INVOICE File #162.5.  These a derived from the \AC\ index for a given Batch IEN.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| IEN | LITERAL | 99 | true | Internal Entry Number of FEE BASIS BATCH File #161.7 | 