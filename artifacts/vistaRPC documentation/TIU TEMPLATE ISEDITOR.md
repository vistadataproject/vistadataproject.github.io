---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU TEMPLATE ISEDITOR 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU TEMPLATE ISEDITOR{:/}
 tag | {::nomarkdown}ISEDITOR{:/}
 routine | [TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Returns TRUE if user is a Template Editor
 Input Parameters | {::nomarkdown}ROOT<br/>USER{:/}
 Lines | {::nomarkdown} N CLASS,TIUERR<br/> S CLASS=$P($G(^TIU(8927,ROOT,0)),U,7)<br/> I 'CLASS S TIUY="^NO CLASS OWNER DEFINED"<br/> E  D<br/> .S TIUY=$$ISA^USRLM(USER,CLASS,.TIUERR)<br/> .I 'TIUY,$D(TIUERR) S TIUY=U_TIUERR{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ROOT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}USER{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 




 Generated on January 13th 2017, 7:15:27 am