---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDPS5 ISVTP 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS5 ISVTP{:/}
 tag | {::nomarkdown}ISVTP{:/}
 routine | [ORWDPS5](http://code.osehra.org/dox/Routine_ORWDPS5_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | ISVTP^[ORWDPS5](http://code.osehra.org/dox/Routine_ORWDPS5_source.html)
 Method comment | True: is verbal or telephoned or policy order
 Input parameters | {::nomarkdown}ODIEN{:/}
 Code | ```  S ORY=0
 Q:'$D(^OR(100,+ODIEN,0))
 N VERB,TEL,POL,LSTACT,NATR
 S (VERB,TEL,POL,LSTACT)=0,NATR=""
 S VERB=$O(^ORD(100.02,"B","VERBAL",0))
 S TEL=$O(^ORD(100.02,"B","TELEPHONED",0))
 S POL=$O(^ORD(100.02,"B","POLICY",0))
 S LSTACT=$O(^OR(100,+ODIEN,8,"?"),-1)
 S NATR=$P(^OR(100,+ODIEN,8,LSTACT,0),U,12)
 I (NATR=VERB)!(NATR=TEL)!(NATR=POL) S ORY=1
```




 Generated on January 14th 2017, 7:26:36 am