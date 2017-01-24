---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU GET PRINT NAME 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU GET PRINT NAME{:/}
 tag | {::nomarkdown}GETPNAME{:/}
 routine | [TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This Remote Procedure receives a pointer to the TIU DOCUMENT DEFINITIONFILE (#8925.1) and returns a string containing the Print Name of thecorresponding Document Definition.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUTYPE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is a pointer to the TIU DOCUMENT DEFINITION FILE (#8925.1).{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | GETPNAME^[TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html)
 Method comment | Get Print Name of a Document
 Input parameters | {::nomarkdown}TIUTYPE{:/}
 Code | {::nomarkdown}  S TIUY=$$PNAME^TIULC1(TIUTYPE){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:11 am</p>{:/}