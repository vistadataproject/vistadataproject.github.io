---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPT SELECT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPT SELECT{:/}
 tag | {::nomarkdown}SELECT{:/}
 routine | [ORWPT](http://code.osehra.org/dox/Routine_ORWPT_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}RPC to return key information on a patient as follows: 1    2   3   4    5      6    7    8       9       10      11   12 13NAME^SEX^DOB^SSN^LOCIEN^LOCNM^RMBD^CWAD^SENSITIVE^ADMITTED^CONV^SC^SC%^ 14  15  16  17ICN^AGE^TS^TSSVC{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Selects patient & returns key information
 Leading comment lines | {::nomarkdown}1    2   3   4    5      6    7    8       9       10      11  12<br/>NAME^SEX^DOB^SSN^LOCIEN^LOCNM^RMBD^CWAD^SENSITIVE^ADMITTED^CONV^SC^<br/>13  14  15  16  17<br/>SC%^ICN^AGE^TS^TSSVC<br/>for CCOW (RV - 2/27/03)  name="-1", location=error message{:/}




 Generated on January 13th 2017, 6:44:47 am