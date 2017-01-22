---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIRLTRS NATIONAL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIRLTRS NATIONAL{:/}
 tag | {::nomarkdown}NATIONAL{:/}
 routine | [DSIRLTRS](http://code.osehra.org/dox/Routine_DSIRLTRS_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC is a wrapper around DSIRLTRS UPDATE with the exception that it will update the national letters in file 19620.15 (DSIR NATIONAL LETTERS).  This RPC should not be used at the site but is for DSS Inc. to apply updates to the national letters as requested/instructed by the VA Privacy Office.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal Entry Number of the Letter or Null if new.{:/} | 
| {::nomarkdown}DATA1{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}245{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Array that contains the Letter Data   Main Record => M ^ Name ^ National/Local Flag (0 = Local, 1 = National)^ Signature Block (C,F,S) ^ ID Clerk by Name (0 = No, 1 = Yes) ^ Addressto Patient (0 = No, 1 = Yes)   Paragraph Header => PH ^ Name ^ Read Only (0 = No, 1 = Yes) [This nodeoccurs multiple times for each M entry]   Paragraph Text => Text [This node occurs multiple times for each PHentry]{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:03 am</p>{:/}