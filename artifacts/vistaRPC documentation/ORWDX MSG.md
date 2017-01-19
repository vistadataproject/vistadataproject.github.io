---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDX MSG 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDX MSG{:/}
 tag | {::nomarkdown}MSG{:/}
 routine | [ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Return message text for an orderable item.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | MSG^[ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
 Method comment | Msg text for orderable item
 Input parameters | {::nomarkdown}IEN{:/}
 Code | {::nomarkdown}  N I<br> S I=0 F  S I=$O(^ORD(101.43,IEN,8,I)) Q:I'>0  S LST(I)=^(I,0){:/}


### CPRS

[Orders/rODBase.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas")

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}