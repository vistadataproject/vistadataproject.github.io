---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIR GET ADDRESSES 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIR GET ADDRESSES{:/}
 tag | {::nomarkdown}GTADDLST{:/}
 routine | [DSIROI6](http://code.osehra.org/dox/Routine_DSIROI6_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC gets all address know by the RELEASE OF INFORMATION - DSSI for a given patient or requestor.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT REQUESTOR{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}RQSTR - Pointer to Patient or Requestor  examples:    \3;DSIR(19620.96,\    \41;DSIR(19620.12,\    \441;DPT(\{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}