---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ANRV CREATE OUTCOME 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ANRV CREATE OUTCOME{:/}
 tag | {::nomarkdown}MKREC{:/}
 routine | [ANRVOB](http://code.osehra.org/dox/Routine_ANRVOB_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Creates new Outcome Record.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}RESULTS{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Results passed back to calling application{:/} | 
| {::nomarkdown}PTDFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patients internal entry number.{:/} | 
| {::nomarkdown}STATUS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Whether Inpatient or Outpatient.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:14 am</p>{:/}