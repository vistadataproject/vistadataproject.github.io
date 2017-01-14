---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDCSLT DEF 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDCSLT DEF{:/}
 tag | {::nomarkdown}DEF{:/}
 routine | [ORWDCSLT](http://code.osehra.org/dox/Routine_ORWDCSLT_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Load dialog data (lists & defaults) for a consult order. (16-BIT){:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | DEF^[ORWDCSLT](http://code.osehra.org/dox/Routine_ORWDCSLT_source.html)
 Method comment | load consult info    
 Code | ```  N ILST,NAM,IEN,X
 S ILST=0
 S LST($$NXT)="~Services" D SRVC
 S LST($$NXT)="~Inpt Urgencies" D INURG
 S LST($$NXT)="~Outpt Urgencies" D OUTURG
 S LST($$NXT)="~Inpt Place" D INPLACE
 S LST($$NXT)="~Outpt Place" D OUTPLACE```




 Generated on January 14th 2017, 7:26:35 am