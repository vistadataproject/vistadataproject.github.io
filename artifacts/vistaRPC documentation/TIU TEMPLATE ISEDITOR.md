---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU TEMPLATE ISEDITOR 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU TEMPLATE ISEDITOR{:/}
 tag | {::nomarkdown}ISEDITOR{:/}
 routine | [TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ROOT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}USER{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | ISEDITOR^[TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
 Method comment | Returns TRUE if user is a Template Editor
 Input parameters | {::nomarkdown}ROOT, USER{:/}
 Code | {::nomarkdown}  N CLASS,TIUERR<br> S CLASS=$P($G(^TIU(8927,ROOT,0)),U,7)<br> I 'CLASS S TIUY="^NO CLASS OWNER DEFINED"<br> E  D<br> .S TIUY=$$ISA^USRLM(USER,CLASS,.TIUERR)<br> .I 'TIUY,$D(TIUERR) S TIUY=U_TIUERR{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Templates/rTemplates.pas">Templates/rTemplates.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:09 am</p>{:/}