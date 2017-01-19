---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU GET DOCUMENT TITLE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU GET DOCUMENT TITLE{:/}
 tag | {::nomarkdown}GETTITLE{:/}
 routine | [TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This remote procedure returns the pointer to the TIU DOCUMENT DEFINITIONFILE that corresponds to the TITLE of the document identified in the TIUDAparameter.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the internal entry number (IEN) of the document in the TIUDOCUMENT FILE (#8925).{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | GETTITLE^[TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
 Method comment | Get the title from a TIU Document Record
 Input parameters | {::nomarkdown}TIUDA{:/}
 Code | {::nomarkdown}  S TIUY=+$G(^TIU(8925,+TIUDA,0)){:/}


### CPRS

[rTIU.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:50 am</p>{:/}