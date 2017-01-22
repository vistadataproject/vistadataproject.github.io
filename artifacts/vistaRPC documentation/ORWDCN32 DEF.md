---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDCN32 DEF 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDCN32 DEF{:/}
 tag | {::nomarkdown}DEF{:/}
 routine | [ORWDCN32](http://code.osehra.org/dox/Routine_ORWDCN32_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Load dialog data (lists & defaults) for a consult order. (32-BIT){:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | DEF^[ORWDCN32](http://code.osehra.org/dox/Routine_ORWDCN32_source.html)
 Method comment | load consult info
 Input parameters | {::nomarkdown}WHY{:/}
 Code | {::nomarkdown}  N ILST,NAM,IEN,X<br> S ILST=0<br> S LST($$NXT)="~ShortList" D SHORT<br> I WHY="C" D<br> . S LST($$NXT)="~Inpt Cslt Urgencies" D INCURG<br> I WHY="P" D<br> . S LST($$NXT)="~Inpt Proc Urgencies" D INPURG<br> S LST($$NXT)="~Outpt Urgencies" D OUTURG<br> S LST($$NXT)="~Inpt Place" D INPLACE<br> S LST($$NXT)="~Outpt Place" D OUTPLACE<br> S LST($$NXT)="~Clin Ind Date" D CID{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:11 am</p>{:/}