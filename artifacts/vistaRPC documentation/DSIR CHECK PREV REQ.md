---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIR CHECK PREV REQ 

 property | value 
--- | --- 
 label | DSIR CHECK PREV REQ
 tag | CHECKCUR
 routine | [DSIROI3](http://code.osehra.org/dox/Routine_DSIROI3_source.html)
 return value type | ARRAY
 description | This RPC checks for previous request for the current patient and requestor. It then returns an array of entries in file 19620 ROI INSTANCE.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PATIENT | LITERAL | 999 | true | This is the DFN of the patient. | 
| REQUESTOR | LITERAL | 999 | true | This is the IEN of the requestor in file 19620.12 DSIR NEW REQUESTOR. | 




Generated on January 11th 2017, 6:34:23 am