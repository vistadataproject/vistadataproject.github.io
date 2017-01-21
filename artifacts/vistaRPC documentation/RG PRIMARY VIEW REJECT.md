---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; RG PRIMARY VIEW REJECT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}RG PRIMARY VIEW REJECT{:/}
 tag | {::nomarkdown}PVREJ{:/}
 routine | [MPIRPC](http://code.osehra.org/dox/Routine_MPIRPC_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This remote procedure call will return the Primary View Reject report for a particular station, ICN, and date range.  The date range will be from the date of the exception to the current date.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}SITE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the requesting site's station number.{:/} | 
| {::nomarkdown}ICN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the Integration Control Number of the patient for whom data is requested.{:/} | 
| {::nomarkdown}EXCEPTION DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}25{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The date/time of the exception will be used as the begin date for the report data extraction.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:10 am</p>{:/}