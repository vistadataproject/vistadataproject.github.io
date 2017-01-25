---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWTIU GET LISTBOX ITEM 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWTIU GET LISTBOX ITEM{:/}
 tag | {::nomarkdown}GTLSTITM{:/}
 routine | [ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Given a TIU document IEN, return the information required to construct alistbox item for that single document.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}Documemnt IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}32{:/} | {::nomarkdown}true{:/} |  | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | GTLSTITM^[ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html)
 Method comment | Return single listbox item for document
 Input parameters | {::nomarkdown}ORTIUDA{:/}
 Code | {::nomarkdown}  Q:+$G(ORTIUDA)=0<br> S ORY=ORTIUDA_U_$$RESOLVE^TIUSRVLO(ORTIUDA){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 12:25:50 am</p>{:/}