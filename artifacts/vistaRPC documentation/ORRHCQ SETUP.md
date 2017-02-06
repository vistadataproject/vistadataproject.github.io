---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORRHCQ SETUP 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORRHCQ SETUP{:/}
 tag | {::nomarkdown}SETUP{:/}
 routine | [ORRHCQ](http://code.osehra.org/dox/Routine_ORRHCQ_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Sets up in ^TMP(\ORRHCQ\,$J) the parameters and constraints that willbe used for the query.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}QRY{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This contains a list of name-value pairs that will used by the queryroutines.  The name-value pairs identify the search items and anyconstraints (time ranges, etc.) that should be placed on the query.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 7:02:04 am</p>{:/}