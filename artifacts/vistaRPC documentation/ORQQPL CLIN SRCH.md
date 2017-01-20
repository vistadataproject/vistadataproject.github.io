---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPL CLIN SRCH 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL CLIN SRCH{:/}
 tag | {::nomarkdown}CLINSRCH{:/}
 routine | [ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns list of clinics for problem list. Should be replaced by CLIN^ORQPT{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | CLINSRCH^[ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
 Method comment | Get LIST OF CLINICS
 First comment | {::nomarkdown}<pre> Note: This comes from CLIN^ORQPTQ2, where it was commented out in place of<br/> a call to ^XPAR. I would have just used CLIN^ORQPTQ2, but it didn't work - at<br/> least on SLC OEX directory.<br/> X has no purpose other than to satisfy apparent rpc and tcallv requirement for args</pre>{:/}
 Input parameters | {::nomarkdown}X{:/}
 Code | {::nomarkdown}  N I,NAME,IEN<br> S I=1,IEN=0,NAME=""<br> F  S NAME=$O(^SC("B",NAME)) Q:NAME=""  S IEN=$O(^(NAME,0)) D<br> . I $P(^SC(IEN,0),"^",3)="C" S Y(I)=IEN_"^"_NAME,I=I+1{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code |  [rProbs.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rProbs.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:06 am</p>{:/}