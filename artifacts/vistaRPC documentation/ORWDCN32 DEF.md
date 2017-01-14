---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDCN32 DEF 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDCN32 DEF{:/}
 tag | {::nomarkdown}DEF{:/}
 routine | [ORWDCN32](http://code.osehra.org/dox/Routine_ORWDCN32_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Load dialog data (lists & defaults) for a consult order. (32-BIT){:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | DEF^[ORWDCN32](http://code.osehra.org/dox/Routine_ORWDCN32_source.html)
 Method comment | load consult info
 Input parameters | {::nomarkdown}WHY{:/}
 Code | ```  N ILST,NAM,IEN,X
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




 Generated on January 14th 2017, 7:26:35 am