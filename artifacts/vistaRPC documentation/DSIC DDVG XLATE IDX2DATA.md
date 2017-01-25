---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIC DDVG XLATE IDX2DATA 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIC DDVG XLATE IDX2DATA{:/}
 tag | {::nomarkdown}XLATE1{:/}
 routine | [DSICDDR4](http://code.osehra.org/dox/Routine_DSICDDR4_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This will return the external format for an internal Fileman field value{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FILE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the number of the file (or subfile) for which the external format of the the field is desired.{:/} | 
| {::nomarkdown}FIELD{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the field number for the file (or subfile){:/} | 
| {::nomarkdown}VALUE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}250{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the internal Fileman format for the data stored at FILE,FIELD.  This does not require a record number.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 12:25:50 am</p>{:/}