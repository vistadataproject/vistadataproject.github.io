---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWTIU GET SAVED CP FIELDS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWTIU GET SAVED CP FIELDS{:/}
 tag | {::nomarkdown}GETCP{:/}
 routine | [ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Given a TIU document of the clinical procedures class, return the author, title, cosigner, procedure summary code, date/time of procedure, and reference date, as stored on the server.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Checks required CP fields before signature


### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}32{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Pointer to file 8925 for the document.{:/} | 




 Generated on January 13th 2017, 6:15:57 am