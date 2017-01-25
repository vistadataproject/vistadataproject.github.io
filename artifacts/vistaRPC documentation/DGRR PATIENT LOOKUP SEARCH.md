---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DGRR PATIENT LOOKUP SEARCH 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DGRR PATIENT LOOKUP SEARCH{:/}
 tag | {::nomarkdown}SEARCH{:/}
 routine | [DGRRLU](http://code.osehra.org/dox/Routine_DGRRLU_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This rpc is set to return an xml document via VistaLink that containsthe display data for a gui patient lookup.   {:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PARAM{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}999{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Input PARAM(\SEARCH TYPE\) = type of search requestedInput PARAM(\SEARCH VALUE\) = value to search onInput PARAM(\JOB\) = a unique job # used to check for cancelled jobs{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 12:25:50 am</p>{:/}