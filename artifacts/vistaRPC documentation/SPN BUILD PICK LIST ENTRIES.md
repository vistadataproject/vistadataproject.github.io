---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; SPN BUILD PICK LIST ENTRIES 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}SPN BUILD PICK LIST ENTRIES{:/}
 tag | {::nomarkdown}COL{:/}
 routine | [SPNRPCQ](http://code.osehra.org/dox/Routine_SPNRPCQ_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Supports the use of filters by providing a list of locally valid entries in the site's Vista files for Lab tests, Drug names, and Prosthetic device names.  This local \fetch\ can then be used to supply locally valid records from which to choose when running the SPN FILTER call.  This RPC is necessary because each site's file entries are named and numbered differently.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TYPE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The value for this parameter must be either CLINIC, PROS, NDC, or LAB.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:57 am</p>{:/}