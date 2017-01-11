---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF BATCH DELETE 

 property | value 
--- | --- 
 label | DSIF BATCH DELETE
 tag | DELBATCH
 routine | [DSIFBAT1](http://code.osehra.org/dox/Routine_DSIFBAT1_source.html)
 return value type | SINGLE VALUE
 description | Used to delete an existing Batch for Fee Basis Return values:1^Batch [#] deleted-1^error message as below:  ;;Total dollars>0 ;;Invoice count>0 ;;Payment lien count>0 ;;Rejects pending flag is 'YES' ;;Batch has existing invoices

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| BATCH NUMBER | LITERAL | 99 | true | Pass in batch IEN | 