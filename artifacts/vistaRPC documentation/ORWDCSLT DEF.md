---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDCSLT DEF 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDCSLT DEF{:/}
 tag | {::nomarkdown}DEF{:/}
 routine | [ORWDCSLT](http://code.osehra.org/dox/Routine_ORWDCSLT_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Load dialog data (lists & defaults) for a consult order. (16-BIT){:/}


### Method description

 property | value 
 --- | --- 
 Method comment | load consult info    
 Lines | ```
 N ILST,NAM,IEN,X
 S ILST=0
 S LST($$NXT)="~Services" D SRVC
 S LST($$NXT)="~Inpt Urgencies" D INURG
 S LST($$NXT)="~Outpt Urgencies" D OUTURG
 S LST($$NXT)="~Inpt Place" D INPLACE
 S LST($$NXT)="~Outpt Place" D OUTPLACE```




 Generated on January 13th 2017, 6:55:28 am