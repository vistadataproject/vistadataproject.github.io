---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGV GET IMAGE FILE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGV GET IMAGE FILE{:/}
 tag | {::nomarkdown}GETFILE{:/}
 routine | [MAGVRS31](http://code.osehra.org/dox/Routine_MAGVRS31_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns image attributes given the IEN of the IMAGE INSTANCE FILE (#2005.65).{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FILEIEN{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}The IEN of the IMAGE INSTANCE FILE (#2005.65) entry to be retrieved.{:/} | 
| {::nomarkdown}SOPIEN{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}The IEN of the parent IMAGE SOP INSTANCE file (#2005.64) entry.{:/} | 
| {::nomarkdown}OVERRIDE{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}If the OVERRIDE flag is set to 1 the RPC will not check the validity of thePARENT IEN.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:57 am</p>{:/}