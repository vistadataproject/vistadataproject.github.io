---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQCN URGENCIES 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN URGENCIES{:/}
 tag | {::nomarkdown}URG{:/}
 routine | [ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of applicable urgencies from PROTOCOL file 101,given a ConsultIEN and type.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | new urgency from 101.42


### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}Consult ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal file number of consult in file 123.{:/} | 
| {::nomarkdown}Request type{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Consult or procedure.  Pointer to PROTOCOL file 101.  Value iseither 'GMRCOR CONSULT' or 'GMRCOR REQUEST'.{:/} | 




 Generated on January 13th 2017, 6:15:57 am