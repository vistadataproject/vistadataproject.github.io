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

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| IEN | LITERAL | 99 | true | Internal Entry Number of Contact/Fee Notification (Required - Pointer to file 162.2/161.5) | 
| DTOCT | LITERAL | 12 | true | Date & Time of Contact (Required - FileMan Date/Time) | 
| NARR | LIST | 999 | true | Narrative (Optional - Word Processing Array) | 




Generated on January 11th 2017, 6:34:23 am