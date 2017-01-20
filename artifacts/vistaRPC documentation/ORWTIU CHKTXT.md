---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWTIU CHKTXT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWTIU CHKTXT{:/}
 tag | {::nomarkdown}CHKTXT{:/}
 routine | [ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Check for existence of text in TIU(8925,TIUDA, either in \TEXT\ or \TEMP\ nodes, before allowing signature.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORTIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Pointer to file 8925.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | CHKTXT^[ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html)
 Method comment | Checks for presence of text before signature
 Input parameters | {::nomarkdown}ORTIUDA{:/}
 Code | {::nomarkdown}  S ORY='$$EMPTYDOC^TIULF(ORTIUDA)  ;DBIA #4426<br>{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}