---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORVW FACLIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORVW FACLIST{:/}
 tag | {::nomarkdown}FACLIST{:/}
 routine | [ORVW](http://code.osehra.org/dox/Routine_ORVW_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Wrapper for the TFL^VAFCTFU1 routine, which returns all the treatingfacilities for a given patient DFN.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Patient DFN{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | FACLIST^[ORVW](http://code.osehra.org/dox/Routine_ORVW_source.html)
 Method comment | Return a list from the TFL^VAFCTFU1 call
 Input parameters | {::nomarkdown}ORDFN{:/}
 Code | {::nomarkdown}  D TFL^VAFCTFU1(.ORY,ORDFN)<br>{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="">NOT OSEHRA CPRS</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 8:30:45 pm</p>{:/}