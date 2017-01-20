---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; IBD RECEIVE FORM DATA 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}IBD RECEIVE FORM DATA{:/}
 tag | {::nomarkdown}RECV{:/}
 routine | [IBDFBK2](http://code.osehra.org/dox/Routine_IBDFBK2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC is to be used by the AICS workstation software only.  It acceptsdata in the format returned by the scanning software and converts thedata in the format expected by PCE and passes the data to PCE.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FORMDATA{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}245{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the input data.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}