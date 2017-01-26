---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ACKQAUD1 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ACKQAUD1{:/}
 tag | {::nomarkdown}START{:/}
 routine | [ACKQAG01](http://code.osehra.org/dox/Routine_ACKQAG01_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC gets the audiogram data for the selected entryin the Audiometric Exam Data file 509850.9 and returnsit to the calling program in the array ACKQARR()This is for the Audiometric Display only.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The internal number in the PATIENT file (#2).{:/} | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Internal number in the AUDIOMETRIC EXAM DATA file (#509850.9).{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:14 am</p>{:/}