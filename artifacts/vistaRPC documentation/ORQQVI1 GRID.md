---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQVI1 GRID 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQVI1 GRID{:/}
 tag | {::nomarkdown}GRID{:/}
 routine | [ORQQVI1](http://code.osehra.org/dox/Routine_ORQQVI1_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | GRID^[ORQQVI1](http://code.osehra.org/dox/Routine_ORQQVI1_source.html)
 Method comment | from Remote Procedure file
 Input parameters | {::nomarkdown}DFN<br>DATE1<br>DATE2<br>RTIMES<br>TESTS{:/}
 Code | {::nomarkdown}  N CNT,NUM,TEMPDATE<br> I DATE1<DATE2 S TEMPDATE=DATE1,DATE1=DATE2,DATE2=TEMPDATE<br> K ^TMP("ORQQVX",$J,"INPUT"),^("OUTPUT")<br> S ROOT=$NA(^TMP("ORQQVX",$J,"OUTPUT"))<br> S ^TMP("ORQQVX",$J,"INPUT",1)=DFN_U_DATE1_U_DATE2_U_RTIMES<br> S CNT=1,NUM=0 F  S NUM=$O(TESTS(NUM)) Q:NUM<1  D<br> .S CNT=CNT+1<br> .S ^TMP("ORQQVX",$J,"INPUT",CNT)=TESTS(NUM)<br> D GRIDDATA{:/}


### CPRS

[NOT OSEHRA CPRS]()

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}