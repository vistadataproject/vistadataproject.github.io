---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; EC GETVISITINFO 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}EC GETVISITINFO{:/}
 tag | {::nomarkdown}VISINFO{:/}
 routine | [ECUERPC2](http://code.osehra.org/dox/Routine_ECUERPC2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This broker call returns specific EC patient visit data (location, DSS Unit,patient ien, etc) based on a Visit Number.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ECARY{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The value ECARY contains the Visit Number IEN (ECVSN), found in file (#9000010).{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:55 am</p>{:/}