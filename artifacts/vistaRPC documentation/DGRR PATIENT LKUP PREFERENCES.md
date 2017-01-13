---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DGRR PATIENT LKUP PREFERENCES 

 property | value 
--- | --- 
 label | {::nomarkdown}DGRR PATIENT LKUP PREFERENCES{:/}
 tag | {::nomarkdown}START{:/}
 routine | [DGRRLU4](http://code.osehra.org/dox/Routine_DGRRLU4_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This remote procedure call returns an xml document containing the divisionor package preferences.  {:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PARAM{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}PARAM(\stationNumber\) = station number for institution.  If not defined, RPC will return the package default values.{:/} | 




 Generated on January 13th 2017, 5:52:13 am