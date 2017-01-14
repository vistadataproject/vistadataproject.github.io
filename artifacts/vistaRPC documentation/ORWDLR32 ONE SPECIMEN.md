---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDLR32 ONE SPECIMEN 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDLR32 ONE SPECIMEN{:/}
 tag | {::nomarkdown}ONESPEC{:/}
 routine | [ORWDLR32](http://code.osehra.org/dox/Routine_ORWDLR32_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns IEN^NAME of requested a TOPOGRAPHY FIELD (file #61) entry.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}SPECIMEN IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}32{:/} | {::nomarkdown}true{:/} |  | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | ONESPEC^[ORWDLR32](http://code.osehra.org/dox/Routine_ORWDLR32_source.html)
 Method comment | return one specimen
 Input parameters | {::nomarkdown}IEN{:/}
 Code | ```  Q:(+$G(IEN)=0)!('$D(^LAB(61,IEN,0)))
 S LST=IEN_U_$P(^LAB(61,IEN,0),U,1)```




 Generated on January 14th 2017, 7:26:35 am