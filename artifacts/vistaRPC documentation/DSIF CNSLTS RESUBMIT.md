---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF CNSLTS RESUBMIT 

 property | value 
--- | --- 
 label | DSIF CNSLTS RESUBMIT
 tag | RESUB
 routine | [DSIFCNS1](http://code.osehra.org/dox/Routine_DSIFCNS1_source.html)
 return value type | SINGLE VALUE
 description | This RPC allows for a consult to be resubmitted. Cloned from ORQQCN RESUBMIT

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DSIFCIEN | LITERAL |  | true | This is the Consult IEN to which needs to be resubmitted. | 
| DSIFEDIT | LIST |  | true | This is the array of comments associated with the resubmit request. | 




Generated on January 11th 2017, 6:34:23 am