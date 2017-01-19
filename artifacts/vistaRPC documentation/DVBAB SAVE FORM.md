---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DVBAB SAVE FORM 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DVBAB SAVE FORM{:/}
 tag | {::nomarkdown}SAVE{:/}
 routine | [DVBABFRM](http://code.osehra.org/dox/Routine_DVBABFRM_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Set DVBIEN to the internal entry number of the form Set DVBLINES to the lines to be saved Set DVBLINEN to the starting line # in the global.  This allows for formsto be sent in chunks.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DVBIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}DVBLINES{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}DVBLINECOUNT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}DVBLINEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}