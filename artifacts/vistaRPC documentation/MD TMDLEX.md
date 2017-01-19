---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MD TMDLEX 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MD TMDLEX{:/}
 tag | {::nomarkdown}LEX{:/}
 routine | [MDRPCW1](http://code.osehra.org/dox/Routine_MDRPCW1_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC will return a list of CPT or ICD for a search typed in.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MDSRCH{:/} | {::nomarkdown}REFERENCE{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the text typed in for the look-up.{:/} | 
| {::nomarkdown}MDAPP{:/} | {::nomarkdown}REFERENCE{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the application indicator.  It is either \CPT\ or \ICD\.{:/} | 
| {::nomarkdown}STUDY{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is a required field to obtain the Patient Study # which will be used to check the PCE visit date.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:12 am</p>{:/}