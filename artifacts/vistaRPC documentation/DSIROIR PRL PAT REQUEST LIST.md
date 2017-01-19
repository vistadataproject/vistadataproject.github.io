---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIROIR PRL PAT REQUEST LIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIROIR PRL PAT REQUEST LIST{:/}
 tag | {::nomarkdown}PRL{:/}
 routine | [DSIROIR](http://code.osehra.org/dox/Routine_DSIROIR_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC returns a list of all internal entry numbers from file 19620 for a specified patient.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}STDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the FileMan date the report should stop counting.  If null the report will count all records from the start date thru the current date.{:/} | 
| {::nomarkdown}ENDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The last date to searc for a request IEN for the selected patient.{:/} | 
| {::nomarkdown}PAT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}DFN of the selected patient.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}