---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDLR32 MAXDAYS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDLR32 MAXDAYS{:/}
 tag | {::nomarkdown}MAXDAYS{:/}
 routine | [ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the maximum number of days for a continuous lab order.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | MAXDAYS^[ORWDLR33](http://code.osehra.org/dox/Routine_ORWDLR33_source.html)
 Method comment | Return max number of days for a continuing order
 Input parameters | {::nomarkdown}LOC<br>SCHED{:/}
 Code | {::nomarkdown}  N TMP1,TMP2<br> K ^TMP($J,"ORWDLR33 MAXDAYS")<br> S TMP1=$$GET^XPAR("ALL^LOC.`"_+LOC,"LR MAX DAYS CONTINUOUS",1,"Q")<br> I +TMP1=0 S Y="-1" Q<br> I +$G(SCHED)>0 D ZERO^PSS51P1(SCHED,,,,"ORWDLR33 MAXDAYS") S TMP2=$G(^TMP($J,"ORWDLR33 MAXDAYS",SCHED,2.5)) K ^TMP($J,"ORWDLR33 MAXDAYS")<br> E  S TMP2=0<br> I +TMP1=0,+TMP2>0 S Y=TMP2 Q<br> I +TMP2=0,+TMP1>0 S Y=TMP1 Q<br> S Y=$S(+TMP1>+TMP2:+TMP2,+TMP2>+TMP1:+TMP1,+TMP1=+TMP2:+TMP1,1:0)<br> K ^TMP($J,"ORWDLR33 MAXDAYS"){:/}


### CPRS

[Orders/rODLab.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODLab.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:50 am</p>{:/}