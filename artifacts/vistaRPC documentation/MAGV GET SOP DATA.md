---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGV GET SOP DATA 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGV GET SOP DATA{:/}
 tag | {::nomarkdown}GETSOP{:/}
 routine | [MAGVRS24](http://code.osehra.org/dox/Routine_MAGVRS24_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns SOP attributes given the IEN on the IMAGE SOP DATAFile (#2005.64).{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}SOPIEN{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}The internal entry number of the study in the IMAGE SOP INSTANCE File (#2005.64).{:/} | 
| {::nomarkdown}SERIEN{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}The internal entry number of the study in the IMAGE SERIES File (#2005.63).{:/} | 
| {::nomarkdown}OVERRIDE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This parameter overrides parent IEN checking.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}