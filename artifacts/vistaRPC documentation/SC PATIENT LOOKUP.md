---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; SC PATIENT LOOKUP 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}SC PATIENT LOOKUP{:/}
 tag | {::nomarkdown}FINDP{:/}
 routine | [SCUTBK11](http://code.osehra.org/dox/Routine_SCUTBK11_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Patient lookup.  This is intended as a temporary RPC until a VA orFileMan component is available.  Does a Multiple index lookup onthe PATIENT file (#2).  This does not invoke DPTLK.  Given lookupvalue, this returns a list of the form DFN^patient name^DOB^PID. Only the first 500 records that match the value are returned.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}LIST ATTRIBUTES{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}512{:/} | {::nomarkdown}true{:/} |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:13 am</p>{:/}