---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQVI1 DETAIL 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQVI1 DETAIL{:/}
 tag | {::nomarkdown}DETAIL{:/}
 routine | [ORQQVI1](http://code.osehra.org/dox/Routine_ORQQVI1_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | from Remote Procedure file
 Input Parameters | {::nomarkdown}DFN<br/>DATE1<br/>DATE2<br/>RTIMES<br/>TESTS{:/}
 Lines | ```
 N CNT,NUM,TEMPDATE
 I DATE1<DATE2 S TEMPDATE=DATE1,DATE1=DATE2,DATE2=TEMPDATE
 K ^TMP("ORQQVX",$J,"INPUT"),^("OUTPUT")
 S ROOT=$NA(^TMP("ORQQVX",$J,"OUTPUT"))
 S ^TMP("ORQQVX",$J,"INPUT",1)=DFN_U_DATE1_U_DATE2_U_RTIMES
 S CNT=1,NUM=0 F  S NUM=$O(TESTS(NUM)) Q:NUM<1  D
 .S CNT=CNT+1
 .S ^TMP("ORQQVX",$J,"INPUT",CNT)=TESTS(NUM)
 D MEMODATA```




 Generated on January 13th 2017, 6:55:29 am