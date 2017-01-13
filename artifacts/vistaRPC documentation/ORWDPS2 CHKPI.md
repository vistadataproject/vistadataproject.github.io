---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS2 CHKPI 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS2 CHKPI{:/}
 tag | {::nomarkdown}CHKPI{:/}
 routine | [ORWDPS2](http://code.osehra.org/dox/Routine_ORWDPS2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | return pre-existing patient instruct
 Input Parameters | {::nomarkdown}ODIFN{:/}
 Lines | ```
 N IDNUM,IDPI
 S (IDNUM,IDPI)=0,VAL=""
 I '$D(^OR(100,ODIFN,4.5,"ID","PI")) S VAL="" Q
 F  S IDNUM=$O(^OR(100,ODIFN,4.5,"ID","PI",IDNUM)) Q:'IDNUM  D
 . F  S IDPI=$O(^OR(100,ODIFN,4.5,IDNUM,2,IDPI)) Q:'IDPI  D
 .. S VAL=VAL_^OR(100,ODIFN,4.5,IDNUM,2,IDPI,0)
 K IDNUM,IDPI```




 Generated on January 13th 2017, 6:55:29 am