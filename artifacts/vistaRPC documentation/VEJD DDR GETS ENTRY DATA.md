---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; VEJD DDR GETS ENTRY DATA 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}VEJD DDR GETS ENTRY DATA{:/}
 tag | {::nomarkdown}GET{:/}
 routine | [VEJDDDR0](http://code.osehra.org/dox/Routine_VEJDDDR0_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}VEJDFILE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the number of the file in which you wish to search.{:/} | 
| {::nomarkdown}VEJDIENS{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the IENS for the search.  See the instructions on constructing anIENS in the FileMan Programmer's Manual{:/} | 
| {::nomarkdown}VEJDFELD{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is an ^ (or \;\) delimited list of field numbers to return from theentry identified in VEJDIENS{:/} | 
| {::nomarkdown}VEJDFLAG{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is a string containing up to 3 characters that will modify howFileMan presents the results of this operation:        E: Return data in external format       I: Return data in internal format               Mutually exclusive.        N: Do NOT return null values (do NOT use this, Jay.  It will screwup how I put the entries in the return array for you).       R: Resolves field numbers to field names.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:09 am</p>{:/}