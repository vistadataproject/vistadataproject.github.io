---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; VEJD DDR FINDER 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}VEJD DDR FINDER{:/}
 tag | {::nomarkdown}FIND{:/}
 routine | [VEJDDDR0](http://code.osehra.org/dox/Routine_VEJDDDR0_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}VEJDFILE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the number of the file in which you wish to search.{:/} | 
| {::nomarkdown}VEJDIENS{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the IENS through which you wish to search for the value VEJDVAL.If you are searching the top level of a file, this should be null.  Seethe FileMan Programmers manual for instructions on constructing IENSstrings.{:/} | 
| {::nomarkdown}VEJDFELD{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is an ^ (or \;\) delimited list of fields that you wish returned fromeach entry that matches the lookup conditions that you have specified.{:/} | 
| {::nomarkdown}VEJDNUM{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the maximum number of entries to be returned.  Defaults to allentries matching the lookup value (VEJDVAL).{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}