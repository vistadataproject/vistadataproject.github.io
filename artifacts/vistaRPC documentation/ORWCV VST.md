---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWCV VST 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWCV VST{:/}
 tag | {::nomarkdown}VST1{:/}
 routine | [ORWCV](http://code.osehra.org/dox/Routine_ORWCV_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC returns a list of appointments and admissions for a patient basedon parameters that define the beginning and ending range for CPRS GUI.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | VST1^[ORWCV](http://code.osehra.org/dox/Routine_ORWCV_source.html)
 Input parameters | {::nomarkdown}DFN<br/>BEG<br/>END<br/>SKIP{:/}
 Code | ```  N ERR,ERRMSG
 S ERR=0 ; kludge to return errors
 Q:'$G(DFN)
 D VST(.ORVISIT,DFN,.BEG,.END,$G(SKIP),.ERR,.ERRMSG)
 I ERR K ORVISIT S ORVISIT(1)=ERRMSG```




 Generated on January 14th 2017, 7:26:35 am