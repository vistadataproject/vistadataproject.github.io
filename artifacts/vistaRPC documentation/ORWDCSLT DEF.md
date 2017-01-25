---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDCSLT DEF 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDCSLT DEF{:/}
 tag | {::nomarkdown}DEF{:/}
 routine | [ORWDCSLT](http://code.osehra.org/dox/Routine_ORWDCSLT_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Load dialog data (lists & defaults) for a consult order. (16-BIT){:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | DEF^[ORWDCSLT](http://code.osehra.org/dox/Routine_ORWDCSLT_source.html)
 Method comment | load consult info    
 Code | {::nomarkdown}  N ILST,NAM,IEN,X<br> S ILST=0<br> S LST($$NXT)="~Services" D SRVC<br> S LST($$NXT)="~Inpt Urgencies" D INURG<br> S LST($$NXT)="~Outpt Urgencies" D OUTURG<br> S LST($$NXT)="~Inpt Place" D INPLACE<br> S LST($$NXT)="~Outpt Place" D OUTPLACE{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="">NOT OSEHRA CPRS</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:54 am</p>{:/}