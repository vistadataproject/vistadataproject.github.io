---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQCN ADMIN COMPLETE 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN ADMIN COMPLETE{:/}
 tag | {::nomarkdown}ADMCOMPL{:/}
 routine | [ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Admin users
 Input Parameters | {::nomarkdown}ORIEN<br/>ORFL<br/>ORCOM<br/>ORRESP<br/>ORALRT<br/>ORALTO<br/>ORDATE{:/}
 Lines | ```
 S Y=$$SFILE^GMRCGUIB(ORIEN,10,ORFL,ORRESP,DUZ,.ORCOM,ORALRT,ORALTO,ORDATE) ; "10"=Admin Complete```
 Leading comment lines | {::nomarkdown}Administrative complete action{:/}




 Generated on January 13th 2017, 6:55:29 am