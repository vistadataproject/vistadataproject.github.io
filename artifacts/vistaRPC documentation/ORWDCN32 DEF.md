---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDCN32 DEF 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDCN32 DEF{:/}
 tag | {::nomarkdown}DEF{:/}
 routine | [ORWDCN32](http://code.osehra.org/dox/Routine_ORWDCN32_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Load dialog data (lists & defaults) for a consult order. (32-BIT){:/}


### Method description

 property | value 
 --- | --- 
 Method comment | load consult info
 Input Parameters | {::nomarkdown}WHY{:/}
 Lines | ```
 N ILST,NAM,IEN,X
 S ILST=0
 S LST($$NXT)="~ShortList" D SHORT
 I WHY="C" D
 . S LST($$NXT)="~Inpt Cslt Urgencies" D INCURG
 I WHY="P" D
 . S LST($$NXT)="~Inpt Proc Urgencies" D INPURG
 S LST($$NXT)="~Outpt Urgencies" D OUTURG
 S LST($$NXT)="~Inpt Place" D INPLACE
 S LST($$NXT)="~Outpt Place" D OUTPLACE
 S LST($$NXT)="~Clin Ind Date" D CID```




 Generated on January 13th 2017, 6:55:29 am