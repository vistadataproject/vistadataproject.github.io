---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIV PATIENT INSURANCE DATA 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIV PATIENT INSURANCE DATA{:/}
 tag | {::nomarkdown}INSUR{:/}
 routine | [DSIVIC3](http://code.osehra.org/dox/Routine_DSIVIC3_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Wraps $$INSUR^IBBAPI to return insurance data for patient.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient internal entry number.{:/} | 
| {::nomarkdown}FMDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}14{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Date insured (default is today).{:/} | 
| {::nomarkdown}FILTER{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}8{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Status codes specifying results to be included or excluded.{:/} | 
| {::nomarkdown}FIELDS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}80{:/} | {::nomarkdown}true{:/} | {::nomarkdown}List of fields to be returned (default is all).{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:56 am</p>{:/}