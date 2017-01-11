---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIRLTRS LISTLTRS 

 property | value 
--- | --- 
 label | DSIRLTRS LISTLTRS
 tag | LISTLTRS
 routine | [DSIRLTRS](http://code.osehra.org/dox/Routine_DSIRLTRS_source.html)
 return value type | ARRAY
 description | This RPC will return an alphabetically sorted array containing the IEN(Internal Entry Numbers) and names of the letters contianed in either file19620.15 (DSIR NATIONAL LETTERS) or file 19620.16 (DSIR LOCAL LETTERS) asspecified in the input parameter.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| LOCAL | LITERAL | 1 | true | File indicator (0 - National [Default], 1 - Local) (Optional) | 




 ###### Generated on January 11th 2017, 6:39:43 am