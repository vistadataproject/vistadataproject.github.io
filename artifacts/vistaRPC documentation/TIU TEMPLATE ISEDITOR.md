---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; TIU TEMPLATE ISEDITOR 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}TIU TEMPLATE ISEDITOR{:/}
 tag | {::nomarkdown}ISEDITOR{:/}
 routine | [TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ROOT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}USER{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | ISEDITOR^[TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
 Method comment | Returns TRUE if user is a Template Editor
 Input parameters | {::nomarkdown}ROOT<br/>USER{:/}
 Code | ```  N CLASS,TIUERR
 S CLASS=$P($G(^TIU(8927,ROOT,0)),U,7)
 I 'CLASS S TIUY="^NO CLASS OWNER DEFINED"
 E  D
 .S TIUY=$$ISA^USRLM(USER,CLASS,.TIUERR)
 .I 'TIUY,$D(TIUERR) S TIUY=U_TIUERR```




 Generated on January 14th 2017, 7:26:35 am