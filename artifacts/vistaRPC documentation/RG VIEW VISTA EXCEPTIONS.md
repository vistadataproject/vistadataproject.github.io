---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; RG VIEW VISTA EXCEPTIONS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}RG VIEW VISTA EXCEPTIONS{:/}
 tag | {::nomarkdown}EN{:/}
 routine | [RGRPC](http://code.osehra.org/dox/Routine_RGRPC_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC will allow the MPI IMDQ staff to view VistA exceptions for a given patient logged during a specific date range.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ICN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Integration Control Number for patient exceptions are being requested for.  If ICN is not passed, then SSN or DFN must be.{:/} | 
| {::nomarkdown}SSN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}9{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Social Security Number for patient exceptions are being requested for.  If SSN is not passed, then ICN or DFN must be.{:/} | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}32000{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal Entry Number for patient, in the PATIENT (#2) file, exceptionsare being requested for  If DFN is not passed, then ICN or SSN must be.{:/} | 
| {::nomarkdown}BRANGE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Beginning Date Range for exceptions to be in.{:/} | 
| {::nomarkdown}ERANGE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Ending Date Range for Exceptions to have been logged in.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:53 am</p>{:/}