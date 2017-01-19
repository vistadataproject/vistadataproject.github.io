---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; XUS DIVISION GET 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}XUS DIVISION GET{:/}
 tag | {::nomarkdown}DIVGET{:/}
 routine | [XUSRB2](http://code.osehra.org/dox/Routine_XUSRB2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC will return a list of divisions of a user.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}If passed this will be the user to get the division info on.{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | DIVGET^[XUSRB2](http://code.osehra.org/dox/Routine_XUSRB2_source.html)
 Method comment | Get Division data
 First comment | {::nomarkdown}<pre>IEN is userid (DUZ or username) for future use.</pre>{:/}
 Input parameters | {::nomarkdown}IEN{:/}
 Code | {::nomarkdown}  N %,XUDIV<br> S XUDIV=0,%=$$CHKDIV^XUS1(.XUDIV) ;Get users div.<br> I (%>0)&($P(%,U,2)'>0) D UPDIV(+%) ;Set users default div.<br> S RET(0)=XUDIV ;RET(0) is number of divisions.<br> I XUDIV S %=0 D  S RET(0)=XUDIV<br> . ;RET(%) is divison array eg. ien;station name;station#<br> . F  S %=$O(XUDIV(%)) Q:(%'>0)  S RET(%)=XUDIV(%){:/}


### CPRS

[Executable Only]()


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:50 am</p>{:/}