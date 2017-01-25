---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OOPS LIST CAS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}OOPS LIST CAS{:/}
 tag | {::nomarkdown}LISTCA{:/}
 routine | [OOPSGUIC](http://code.osehra.org/dox/Routine_OOPSGUIC_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This broker call returns a listing of all the valid CA's (either 1 or 2) thatcan be selected by this user to create a new Request for Compensation (CA-7)claim.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}INPUT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}60{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter passes in 3 pieces of information:  the name or SSN to be usedin building the selection list, the file number to be used for looking up, andthe calling menu.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:55 am</p>{:/}