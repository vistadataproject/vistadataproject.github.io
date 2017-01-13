---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDLR32 MAXDAYS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDLR32 MAXDAYS{:/}
 tag | {::nomarkdown}MAXDAYS{:/}
 routine | [ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the maximum number of days for a continuous lab order.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return max number of days for a continuing order
 Input Parameters | {::nomarkdown}LOC<br/>SCHED{:/}
 Lines | ```
 N TMP1,TMP2
 K ^TMP($J,"ORWDLR33 MAXDAYS")
 S TMP1=$$GET^XPAR("ALL^LOC.`"_+LOC,"LR MAX DAYS CONTINUOUS",1,"Q")
 I +TMP1=0 S Y="-1" Q
 I +$G(SCHED)>0 D ZERO^PSS51P1(SCHED,,,,"ORWDLR33 MAXDAYS") S TMP2=$G(^TMP($J,"ORWDLR33 MAXDAYS",SCHED,2.5)) K ^TMP($J,"ORWDLR33 MAXDAYS")
 E  S TMP2=0
 I +TMP1=0,+TMP2>0 S Y=TMP2 Q
 I +TMP2=0,+TMP1>0 S Y=TMP1 Q
 S Y=$S(+TMP1>+TMP2:+TMP2,+TMP2>+TMP1:+TMP1,+TMP1=+TMP2:+TMP1,1:0)
 K ^TMP($J,"ORWDLR33 MAXDAYS")```




 Generated on January 13th 2017, 6:55:29 am