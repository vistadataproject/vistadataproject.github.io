---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORAM3 COMPENT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORAM3 COMPENT{:/}
 tag | {::nomarkdown}COMPENT{:/}
 routine | [ORAM3](http://code.osehra.org/dox/Routine_ORAM3_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Enters complication note into the Anticoagulation Flowsheet file (#103).Can also be entered as part of a complete visit entry.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 
| {::nomarkdown}DUZ{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 
| {::nomarkdown}CCODE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}CODE TO NOTE IF COMPLICATION IS MAJOR, MINOR OR BOTH{:/} | 
| {::nomarkdown}CTEXT{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Carroted ('^') string of complication types/comments{:/} | 
| {::nomarkdown}CDATE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}'ENGLISH' DATE OF THE COMPLICATION;This is the date for the flow sheet to put the, probably historic, entry in the proper order in the flow sheet.  DATE/TIME stamp is in the file, but not visible in the flow sheet.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 7:02:05 am</p>{:/}