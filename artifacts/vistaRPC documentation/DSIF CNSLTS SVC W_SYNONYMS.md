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

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DSIFROOT |  |  |  |  | 
| vs:Input_Parameter-8994_02 | DSIFSTRT | LITERAL |  | true | This is the Service IEN you wish to start building the return list from. | 
| vs:Input_Parameter-8994_02 | DSIFWHY | LITERAL |  |  | This is whether you want to return the list for display only, or for use in ordering or forwarding a request. | 
| vs:Input_Parameter-8994_02 | DSIFSYN | LITERAL | 1 |  | This is a boolean inputon whether you want the return to include synonyms: 1 = Yes, 0 No. | 
| vs:Input_Parameter-8994_02 | DSIFOIEN | LITERAL |  |  | This is the Consult IEN, and is optional. | 