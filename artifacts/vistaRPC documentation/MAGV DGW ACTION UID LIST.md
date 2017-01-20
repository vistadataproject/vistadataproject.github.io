---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGV DGW ACTION UID LIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGV DGW ACTION UID LIST{:/}
 tag | {::nomarkdown}ACTUIDS{:/}
 routine | [MAGVDGWP](http://code.osehra.org/dox/Routine_MAGVDGWP_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Return list of UIDfrom DICOM UID SPECIFIC ACTION file (#2006.539){:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MAGTYPE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Type (e.g. \SOP Class\){:/} | 
| {::nomarkdown}MAGSUBT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Subtype (e.g. \Storage\){:/} | 
| {::nomarkdown}MAGACT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Action Type (e.g. \Storage SCP\){:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:32 am</p>{:/}