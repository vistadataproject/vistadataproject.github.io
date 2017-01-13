---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQPL CLIN SRCH 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQPL CLIN SRCH{:/}
 tag | {::nomarkdown}CLINSRCH{:/}
 routine | [ORQQPL1](http://code.osehra.org/dox/Routine_ORQQPL1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns list of clinics for problem list. Should be replaced by CLIN^ORQPT{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Get LIST OF CLINICS
 Input Parameters | {::nomarkdown}X{:/}
 Lines | ```
 N I,NAME,IEN
 S I=1,IEN=0,NAME=""
 F  S NAME=$O(^SC("B",NAME)) Q:NAME=""  S IEN=$O(^(NAME,0)) D
 . I $P(^SC(IEN,0),"^",3)="C" S Y(I)=IEN_"^"_NAME,I=I+1```
 Leading comment lines | {::nomarkdown}Note: This comes from CLIN^ORQPTQ2, where it was commented out in place of<br/>a call to ^XPAR. I would have just used CLIN^ORQPTQ2, but it didn't work - at<br/>least on SLC OEX directory.<br/>X has no purpose other than to satisfy apparent rpc and tcallv requirement for args{:/}




 Generated on January 13th 2017, 6:55:28 am