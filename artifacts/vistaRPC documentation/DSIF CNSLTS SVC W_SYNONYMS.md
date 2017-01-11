---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF CNSLTS SVC W_SYNONYMS 

 property | value 
--- | --- 
 label | DSIF CNSLTS SVC W_SYNONYMS
 tag | SVCSYN
 routine | [DSIFCNS1](http://code.osehra.org/dox/Routine_DSIFCNS1_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC returns a list of Services with synonyms. Cloned from ORQQCN SVC W/SYNONYMS.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DSIFROOT |  |  |  |  | 
| DSIFSTRT | LITERAL |  | true | This is the Service IEN you wish to start building the return list from. | 
| DSIFWHY | LITERAL |  |  | This is whether you want to return the list for display only, or for use in ordering or forwarding a request. | 
| DSIFSYN | LITERAL | 1 |  | This is a boolean inputon whether you want the return to include synonyms: 1 = Yes, 0 No. | 
| DSIFOIEN | LITERAL |  |  | This is the Consult IEN, and is optional. | 




 ###### Generated on January 11th 2017, 6:39:43 am