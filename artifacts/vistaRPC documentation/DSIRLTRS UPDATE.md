---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIRLTRS UPDATE 

 property | value 
--- | --- 
 label | DSIRLTRS UPDATE
 tag | UPDATE
 routine | [DSIRLTRS](http://code.osehra.org/dox/Routine_DSIRLTRS_source.html)
 return value type | SINGLE VALUE
 description | This RPC will add/update letters in file 19620.16 (DSIR LOCAL LETTERS).

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| IEN | LITERAL | 99 | true | Internal Entry Number of the Letter or Null if new. | 
| DATA | LIST | 245 | true | Array that contains the Letter Data       Main Record => M ^ Name ^ National Letter Pointer ^ SignatureBlock (C,F,S) ^ ID Clerk by Name (0 = No, 1 = Yes) ^ Address to Patient (0= No, 1 = Yes)         Paragraph Header => PH ^ Name ^ Read Only (0 = No, 1 = Yes) [Thisnode occurs multiple times for each M entry]         Paragraph Text => Text [This node occurs multiple times for eachPH entry] | 




 ###### Generated on January 11th 2017, 6:39:43 am