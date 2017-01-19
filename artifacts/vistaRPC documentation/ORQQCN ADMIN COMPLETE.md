---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQCN ADMIN COMPLETE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN ADMIN COMPLETE{:/}
 tag | {::nomarkdown}ADMCOMPL{:/}
 routine | [ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | ADMCOMPL^[ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 Method comment | Admin users
 First comment | {::nomarkdown}<pre> Administrative complete action</pre>{:/}
 Input parameters | {::nomarkdown}ORIEN<br>ORFL<br>ORCOM<br>ORRESP<br>ORALRT<br>ORALTO<br>ORDATE{:/}
 Code | {::nomarkdown}  S Y=$$SFILE^GMRCGUIB(ORIEN,10,ORFL,ORRESP,DUZ,.ORCOM,ORALRT,ORALTO,ORDATE) ; "10"=Admin Complete{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}