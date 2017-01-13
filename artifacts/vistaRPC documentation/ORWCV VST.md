---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWCV VST 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWCV VST{:/}
 tag | {::nomarkdown}VST1{:/}
 routine | [ORWCV](http://code.osehra.org/dox/Routine_ORWCV_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC returns a list of appointments and admissions for a patient basedon parameters that define the beginning and ending range for CPRS GUI.{:/}


### Method description

 property | value 
 --- | --- 
 Input Parameters | {::nomarkdown}DFN<br/>BEG<br/>END<br/>SKIP{:/}
 Lines | ```
 N ERR,ERRMSG
 S ERR=0 ; kludge to return errors
 Q:'$G(DFN)
 D VST(.ORVISIT,DFN,.BEG,.END,$G(SKIP),.ERR,.ERRMSG)
 I ERR K ORVISIT S ORVISIT(1)=ERRMSG```




 Generated on January 13th 2017, 6:55:29 am