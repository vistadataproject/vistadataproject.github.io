---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGV INACTIVATE SOP 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGV INACTIVATE SOP{:/}
 tag | {::nomarkdown}INSOP{:/}
 routine | [MAGVRS24](http://code.osehra.org/dox/Routine_MAGVRS24_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC inactivates a SOP INSTANCE entry in the IMAGE SOP INSTANCE file (#2005.64).{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}SOPIEN{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}The IEN of the SOP entry to be inactivated.{:/} | 
| {::nomarkdown}SERIEN{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}The IEN of the related series IEN.{:/} | 
| {::nomarkdown}OVERRIDE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}If set to 1 this flag prevents the checking of the parent procedurereference prior to inactivation.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}