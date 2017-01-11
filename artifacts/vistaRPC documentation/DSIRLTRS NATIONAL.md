---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIRLTRS NATIONAL 

 property | value 
--- | --- 
 label | DSIRLTRS NATIONAL
 tag | NATIONAL
 routine | [DSIRLTRS](http://code.osehra.org/dox/Routine_DSIRLTRS_source.html)
 return value type | SINGLE VALUE
 description | This RPC is a wrapper around DSIRLTRS UPDATE with the exception that it will update the national letters in file 19620.15 (DSIR NATIONAL LETTERS).  This RPC should not be used at the site but is for DSS Inc. to apply updates to the national letters as requested/instructed by the VA Privacy Office.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| IFN | LITERAL | 99 | true | Internal Entry Number of the Letter or Null if new. | 
| DATA1 | LIST | 245 | true | Array that contains the Letter Data   Main Record => M ^ Name ^ National/Local Flag (0 = Local, 1 = National)^ Signature Block (C,F,S) ^ ID Clerk by Name (0 = No, 1 = Yes) ^ Addressto Patient (0 = No, 1 = Yes)   Paragraph Header => PH ^ Name ^ Read Only (0 = No, 1 = Yes) [This nodeoccurs multiple times for each M entry]   Paragraph Text => Text [This node occurs multiple times for each PHentry] | 




 ###### Generated on January 11th 2017, 6:39:43 am