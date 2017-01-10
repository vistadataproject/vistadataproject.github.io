---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF INP ADD ROC 

 property | value 
--- | --- 
 label | DSIF INP ADD ROC
 tag | ADD
 routine | [DSIFROC](http://code.osehra.org/dox/Routine_DSIFROC_source.html)
 return value type | SINGLE VALUE
 description | This RPC duplicates the logic of the FBCH ADD ROC input template for file 161.5.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | IEN | LITERAL | 99 | true | Internal Entry Number of Contact/Fee Notification (Required - Pointer to file 162.2/161.5) | 
| vs:Input_Parameter-8994_02 | DTOCT | LITERAL | 12 | true | Date & Time of Contact (Required - FileMan Date/Time) | 
| vs:Input_Parameter-8994_02 | NARR | LIST | 999 | true | Narrative (Optional - Word Processing Array) | 