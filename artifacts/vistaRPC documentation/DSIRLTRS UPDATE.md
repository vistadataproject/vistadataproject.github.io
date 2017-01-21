---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIRLTRS UPDATE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIRLTRS UPDATE{:/}
 tag | {::nomarkdown}UPDATE{:/}
 routine | [DSIRLTRS](http://code.osehra.org/dox/Routine_DSIRLTRS_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC will add/update letters in file 19620.16 (DSIR LOCAL LETTERS).{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal Entry Number of the Letter or Null if new.{:/} | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}245{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Array that contains the Letter Data       Main Record => M ^ Name ^ National Letter Pointer ^ SignatureBlock (C,F,S) ^ ID Clerk by Name (0 = No, 1 = Yes) ^ Address to Patient (0= No, 1 = Yes)         Paragraph Header => PH ^ Name ^ Read Only (0 = No, 1 = Yes) [Thisnode occurs multiple times for each M entry]         Paragraph Text => Text [This node occurs multiple times for eachPH entry]{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:53 am</p>{:/}