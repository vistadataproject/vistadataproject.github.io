---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWCV VST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWCV VST{:/}
 tag | {::nomarkdown}VST1{:/}
 routine | [ORWCV](http://code.osehra.org/dox/Routine_ORWCV_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC returns a list of appointments and admissions for a patient basedon parameters that define the beginning and ending range for CPRS GUI.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | VST1^[ORWCV](http://code.osehra.org/dox/Routine_ORWCV_source.html)
 Input parameters | {::nomarkdown}DFN<br>BEG<br>END<br>SKIP{:/}
 Code | {::nomarkdown}  N ERR,ERRMSG<br> S ERR=0 ; kludge to return errors<br> Q:'$G(DFN)<br> D VST(.ORVISIT,DFN,.BEG,.END,$G(SKIP),.ERR,.ERRMSG)<br> I ERR K ORVISIT S ORVISIT(1)=ERRMSG{:/}


### CPRS

[rCore.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas")
[rCover.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCover.pas")

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}