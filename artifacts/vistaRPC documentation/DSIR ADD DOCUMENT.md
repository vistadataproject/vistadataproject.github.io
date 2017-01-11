---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIR ADD DOCUMENT 

 property | value 
--- | --- 
 label | DSIR ADD DOCUMENT
 tag | NEWITEM
 routine | [DSIROI0](http://code.osehra.org/dox/Routine_DSIROI0_source.html)
 return value type | ARRAY
 description | This RPC is used to create an entry in file 19620.1 DSIR RELEASED DOCUMENT

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DATA ARRAY | LIST |  | true | Input: Array of    (1): Pointer to VEJD ROI INSTANCE (19620) file    (2): Internal Set of Codes value for document type    (3): Document IEN (If applicable)    (4): Internal Set of Codes value for document media    (5): Caption    (6): Document length    (7): Date/time of document    (8): Creator of Document: Needs to be a pointer to the NEW PERSON file    (9): Include in Billing (0 - No, 1 - Yes)   (10): Hospital Location | 