---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DENTV TP GET TOOTH NOTES 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DENTV TP GET TOOTH NOTES{:/}
 tag | {::nomarkdown}GET{:/}
 routine | [DENTVTP6](http://code.osehra.org/dox/Routine_DENTVTP6_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This returns all the tooth notes for all dates for a patient.  The data will be sorted by tooth number and then by reverse date.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is a pointer to the PATIENT file.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:25:14 am</p>{:/}