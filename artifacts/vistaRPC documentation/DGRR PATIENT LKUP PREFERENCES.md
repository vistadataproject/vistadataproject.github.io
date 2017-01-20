---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DGRR PATIENT LKUP PREFERENCES 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DGRR PATIENT LKUP PREFERENCES{:/}
 tag | {::nomarkdown}START{:/}
 routine | [DGRRLU4](http://code.osehra.org/dox/Routine_DGRRLU4_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This remote procedure call returns an xml document containing the divisionor package preferences.  {:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PARAM{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}PARAM(\stationNumber\) = station number for institution.  If not defined, RPC will return the package default values.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}