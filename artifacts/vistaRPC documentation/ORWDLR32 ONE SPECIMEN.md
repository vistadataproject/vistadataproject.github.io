---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDLR32 ONE SPECIMEN 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDLR32 ONE SPECIMEN{:/}
 tag | {::nomarkdown}ONESPEC{:/}
 routine | [ORWDLR32](http://code.osehra.org/dox/Routine_ORWDLR32_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns IEN^NAME of requested a TOPOGRAPHY FIELD (file #61) entry.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return one specimen
 Input Parameters | {::nomarkdown}IEN{:/}
 Lines | ```
 Q:(+$G(IEN)=0)!('$D(^LAB(61,IEN,0)))
 S LST=IEN_U_$P(^LAB(61,IEN,0),U,1)```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}SPECIMEN IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}32{:/} | {::nomarkdown}true{:/} |  | 




 Generated on January 13th 2017, 6:55:29 am