---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWCH SAVEALL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWCH SAVEALL{:/}
 tag | {::nomarkdown}SAVEALL{:/}
 routine | [ORWCH](http://code.osehra.org/dox/Routine_ORWCH_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC saves the sizing related CPRS GUI chart parameters for theuser.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | SAVEALL^[ORWCH](http://code.osehra.org/dox/Routine_ORWCH_source.html)
 Method comment | save the list of sizing information
 Input parameters | {::nomarkdown}LST{:/}
 Code | {::nomarkdown}  N I,TYP,NAM,VAL,PAR,ORERR<br> S (I,OK)="" F  S I=$O(LST(I)) Q:'I  D<br> . S TYP=$P(LST(I),U),NAM=$P(LST(I),U,2),VAL=$P(LST(I),U,3)<br> . S PAR="ORWCH "_$S(TYP="B":"BOUNDS",TYP="W":"WIDTH",TYP="C":"COLUMNS")<br> . D EN^XPAR(DUZ_";VA(200,",PAR,NAM,VAL,.ORERR)<br> . I ORERR S OK=OK_LST(I)_":"_ORERR_U<br> K ^TMP("ORWCHART",$J),^TMP("ORECALL",$J),^TMP("ORWORD",$J)<br> K ^TMP("ORWDXMQ",$J){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rMisc.pas">rMisc.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:31 am</p>{:/}