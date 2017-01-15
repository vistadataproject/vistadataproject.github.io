---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG ABSJB 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAG ABSJB{:/}
 tag | {::nomarkdown}ABSJB{:/}
 routine | [MAGGTU71](http://code.osehra.org/dox/Routine_MAGGTU71_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Sets queue entry to create abstract and/or copy to jukebox.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MAGIEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Pointer to image file{:/} | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}200{:/} | {::nomarkdown}true{:/} | {::nomarkdown}$P(1) IEN.  Set an Abstract Queue for the IEN.           - Abstract will be created.$p(2) IEN. Set a JukeBox Queue for the IEN.           - Image will be copied from Jukebox.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}