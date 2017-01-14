---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWCH SAVEALL 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWCH SAVEALL{:/}
 tag | {::nomarkdown}SAVEALL{:/}
 routine | [ORWCH](http://code.osehra.org/dox/Routine_ORWCH_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC saves the sizing related CPRS GUI chart parameters for theuser.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | SAVEALL^[ORWCH](http://code.osehra.org/dox/Routine_ORWCH_source.html)
 Method comment | save the list of sizing information
 Input parameters | {::nomarkdown}LST{:/}
 Code | ```  N I,TYP,NAM,VAL,PAR,ORERR
 S (I,OK)="" F  S I=$O(LST(I)) Q:'I  D
 . S TYP=$P(LST(I),U),NAM=$P(LST(I),U,2),VAL=$P(LST(I),U,3)
 . S PAR="ORWCH "_$S(TYP="B":"BOUNDS",TYP="W":"WIDTH",TYP="C":"COLUMNS")
 . D EN^XPAR(DUZ_";VA(200,",PAR,NAM,VAL,.ORERR)
 . I ORERR S OK=OK_LST(I)_":"_ORERR_U
 K ^TMP("ORWCHART",$J),^TMP("ORECALL",$J),^TMP("ORWORD",$J)
 K ^TMP("ORWDXMQ",$J)```




 Generated on January 14th 2017, 7:26:35 am