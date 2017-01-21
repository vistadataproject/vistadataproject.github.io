---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DVBA MVI GET CORRESPONDING IDS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DVBA MVI GET CORRESPONDING IDS{:/}
 tag | {::nomarkdown}GETIDS{:/}
 routine | [DVBAMVI2](http://code.osehra.org/dox/Routine_DVBAMVI2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}The remote procedure passes the Integration Control Number ID to the MVI GET CORRESPONDING IDS web service and returns the list of VAMC treatingfacilities for the selected identifier.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}SOURCE ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}250{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the Integration Control Number (ICN) used to identify the patientthat is selected from the MVI SEARCH PERSON web service results.Format:  \1008523099V750710^NI^200M^USVHA^\{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:25:14 am</p>{:/}