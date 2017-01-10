---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF CNSLTS ADDCMT 

 property | value 
--- | --- 
 label | DSIF CNSLTS ADDCMT
 tag | ADDCMT
 routine | [DSIFCNS1](http://code.osehra.org/dox/Routine_DSIFCNS1_source.html)
 return value type | SINGLE VALUE
 description | This RPC allows for the adding of a Comment to a Consult. Cloned from ORQQCN ADDCMT

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DSIFIEN | LITERAL |  | true | This is the Consult IEN in which a comment needs to be added to. | 
| vs:Input_Parameter-8994_02 | DSIFCOM | LIST |  | true | This is the array of comments that need to be added to the Consult. | 
| vs:Input_Parameter-8994_02 | DSIFALRT | LITERAL | 1 |  | This is the indiciation that alerts should be sent to someone. 1 means yes. | 
| vs:Input_Parameter-8994_02 | DSIFALTO | LITERAL |  |  | Contains pointers to NEW PERSON FILE (200) for those to receive alert for this addition of a comment. | 
| vs:Input_Parameter-8994_02 | DSIFORDT | LITERAL |  |  | This is the date of the Comment is added to the Consult. If not passed in, defaults to NOW^XLFDT. | 