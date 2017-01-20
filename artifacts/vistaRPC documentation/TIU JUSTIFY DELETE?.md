---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU JUSTIFY DELETE? 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU JUSTIFY DELETE?{:/}
 tag | {::nomarkdown}NEEDJUST{:/}
 routine | [TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}BOOLEAN RPC that evaluates wheter a justification is required for deletion (e.g., deletion is authorized, but the document has been signed, etc.).{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the record number (IEN) of the document in file 8925.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | NEEDJUST^[TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
 Method comment | Is justification required for deletion?
 Input parameters | {::nomarkdown}TIUDA{:/}
 Code | {::nomarkdown}  N TIUD0 S TIUD0=$G(^TIU(8925,+TIUDA,0)),TIUY=0<br> I +$P(TIUD0,U,5)'<6 S TIUY=1{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 7:40:08 am</p>{:/}