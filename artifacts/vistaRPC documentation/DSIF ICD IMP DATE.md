---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIF ICD IMP DATE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIF ICD IMP DATE{:/}
 tag | {::nomarkdown}IMPDATE{:/}
 routine | [DSIFICD](http://code.osehra.org/dox/Routine_DSIFICD_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC will retrieve the ICD code system implementation date.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DSIFSYS{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the coding system abbreviation from VistA. This parameter is required.     Input:     DSIFSYS   Coding System               1 OR \ICD\ = ICD-9-CM              2 OR \ICP\ = ICD-9-PCS             30 OR \10D\ = ICD-10-CM             31 OR \10P\ = ICD-10-PCS{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:54 am</p>{:/}