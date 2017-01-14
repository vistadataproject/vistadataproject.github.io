---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGV GET PAT INFO 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGV GET PAT INFO{:/}
 tag | {::nomarkdown}GETPATI{:/}
 routine | [MAGVRS08](http://code.osehra.org/dox/Routine_MAGVRS08_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC returns information for VA patients given an internal entry number on the IMAGING PATIENT REFERENCE File (#2005.6).{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATREFIEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the internal entry number of the patient reference on the IMAGING PATIENT REFERENCE File (#2005.6).{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}