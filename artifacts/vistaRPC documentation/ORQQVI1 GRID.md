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

 Property | Value 
 --- | --- 
 Method | GRID^[ORQQVI1](http://code.osehra.org/dox/Routine_ORQQVI1_source.html)
 Method comment | from Remote Procedure file
 Input parameters | {::nomarkdown}DFN, DATE1, DATE2, RTIMES, TESTS{:/}
 Code | {::nomarkdown}  N CNT,NUM,TEMPDATE<br> I DATE1<DATE2 S TEMPDATE=DATE1,DATE1=DATE2,DATE2=TEMPDATE<br> K ^TMP("ORQQVX",$J,"INPUT"),^("OUTPUT")<br> S ROOT=$NA(^TMP("ORQQVX",$J,"OUTPUT"))<br> S ^TMP("ORQQVX",$J,"INPUT",1)=DFN_U_DATE1_U_DATE2_U_RTIMES<br> S CNT=1,NUM=0 F  S NUM=$O(TESTS(NUM)) Q:NUM<1  D<br> .S CNT=CNT+1<br> .S ^TMP("ORQQVX",$J,"INPUT",CNT)=TESTS(NUM)<br> D GRIDDATA{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="">NOT OSEHRA CPRS</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:14 am</p>{:/}