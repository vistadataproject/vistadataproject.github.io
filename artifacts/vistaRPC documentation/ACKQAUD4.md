---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ACKQAUD4 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ACKQAUD4{:/}
 tag | {::nomarkdown}DFNCT{:/}
 routine | [ACKQAG05](http://code.osehra.org/dox/Routine_ACKQAG05_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns an array with ARR(0)=# of audiograms for DFN ^ DFN nameEach numbered line after 0 has the IEN of the entry:arr(ct)=IEN{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Pointer to the PATIENT file (#2).{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:53 am</p>{:/}