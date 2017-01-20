---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGTP GET ACTIVE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGTP GET ACTIVE{:/}
 tag | {::nomarkdown}GETAC{:/}
 routine | [MAGTP004](http://code.osehra.org/dox/Routine_MAGTP004_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Get list of all unreleased (FLAG=0) or released (FLAG=1) reports,filter by back days for unreleased reports.Filter by Station Number if consultations are present for a case.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FLAG{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}FLAG = 0: Unreleased / 1: Released{:/} | 
| {::nomarkdown}DAYS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Show verified reports up to DAYS (# of days) ago{:/} | 
| {::nomarkdown}STAT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}5{:/} | {::nomarkdown}true{:/} | {::nomarkdown}If non null, display the case if it has aconsultation for an interpreting station equal to the input.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 7:40:09 am</p>{:/}