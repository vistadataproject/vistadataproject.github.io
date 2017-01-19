---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; RMIM CONSULT LIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}RMIM CONSULT LIST{:/}
 tag | {::nomarkdown}CON{:/}
 routine | [RMIMV](http://code.osehra.org/dox/Routine_RMIMV_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns a list of consult requests for a patient within optional date rangeand optional service.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient DFN from File #2 (Patient File.){:/} | 
| {::nomarkdown}START DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  | {::nomarkdown}Optional start date to begin the search.{:/} | 
| {::nomarkdown}STOP DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  | {::nomarkdown}Optional stop date to end the search.{:/} | 
| {::nomarkdown}SERVICE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  | {::nomarkdown}Optional consulting service from the Request Service file (#123.5).{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:51 am</p>{:/}