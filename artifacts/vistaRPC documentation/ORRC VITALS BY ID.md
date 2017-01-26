---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORRC VITALS BY ID 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORRC VITALS BY ID{:/}
 tag | {::nomarkdown}DETAIL{:/}
 routine | [ORRCVIT](http://code.osehra.org/dox/Routine_ORRCVIT_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This call returns the details of the measurement sets requested in thelist of ID's passed in.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}VITALS{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the list of measurement set identifiers, as VIT:ID where ID isPatient#_\;\_Date.Time as returned by the patient list RPCs.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 8:30:45 pm</p>{:/}