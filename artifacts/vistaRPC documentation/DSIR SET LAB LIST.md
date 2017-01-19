---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIR SET LAB LIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIR SET LAB LIST{:/}
 tag | {::nomarkdown}STLABLST{:/}
 routine | [DSIROI1](http://code.osehra.org/dox/Routine_DSIROI1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This routine sets the requested labs for a given request.  NOTE: the labs are deleted every time and then added  based on the contents of DTLS.  If at any time  an entry in DTLS contains an \@\ the processing   stops.  This will allow an \@\ in the first   entry in DTLS to cause all entries to be deleted.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ROI{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}INPUT PARAMETER   ROI = REQUEST IEN{:/} | 
| {::nomarkdown}DTLS{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}61{:/} | {::nomarkdown}true{:/} | {::nomarkdown} INPUT PARAMETER    DTLS = LAB LIST DETAILS - AN ARRAY OF LAB LIST TITLES       DTLS FORMAT:  #^LAB_TITLE{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:12 am</p>{:/}