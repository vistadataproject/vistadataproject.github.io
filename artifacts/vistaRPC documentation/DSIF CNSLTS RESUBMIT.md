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

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DSIFCIEN | LITERAL |  | true | This is the Consult IEN to which needs to be resubmitted. | 
| vs:Input_Parameter-8994_02 | DSIFEDIT | LIST |  | true | This is the array of comments associated with the resubmit request. | 