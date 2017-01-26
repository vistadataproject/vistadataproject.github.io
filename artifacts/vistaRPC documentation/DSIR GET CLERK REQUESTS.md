---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIR GET CLERK REQUESTS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIR GET CLERK REQUESTS{:/}
 tag | {::nomarkdown}GETTODAY{:/}
 routine | [DSIROI](http://code.osehra.org/dox/Routine_DSIROI_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC returns all open/pending requests for a given clerk.  This is used to populate the today screen.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}CLERK{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The IEN for file 2 which points at the desired ROI clerk.{:/} | 
| {::nomarkdown}BILLING{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}BILLING - The billing system is on (1) or off(0){:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 8:30:46 pm</p>{:/}