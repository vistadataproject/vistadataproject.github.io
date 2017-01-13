---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; IBD RECEIVE FORM DATA 

 property | value 
--- | --- 
 label | {::nomarkdown}IBD RECEIVE FORM DATA{:/}
 tag | {::nomarkdown}RECV{:/}
 routine | [IBDFBK2](http://code.osehra.org/dox/Routine_IBDFBK2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC is to be used by the AICS workstation software only.  It acceptsdata in the format returned by the scanning software and converts thedata in the format expected by PCE and passes the data to PCE.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FORMDATA{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}245{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the input data.{:/} | 




 Generated on January 13th 2017, 6:44:47 am