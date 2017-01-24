---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG4 CP GET REQUESTS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAG4 CP GET REQUESTS{:/}
 tag | {::nomarkdown}LIST{:/}
 routine | [MAGGSCP](http://code.osehra.org/dox/Routine_MAGGSCP_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Return a list of Clinical Procedure Requests for a Patient.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MAGDFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}DFN of Patient{:/} | 
| {::nomarkdown}PROC{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown} IEN from file 702.01 if just ome procedure desired, but it defaults to all.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:12 am</p>{:/}