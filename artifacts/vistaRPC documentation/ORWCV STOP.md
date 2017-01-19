---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWCV STOP 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWCV STOP{:/}
 tag | {::nomarkdown}STOP{:/}
 routine | [ORWCV](http://code.osehra.org/dox/Routine_ORWCV_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}RPC to stop retrieval of cover sheet information for CPRS GUI.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | STOP^[ORWCV](http://code.osehra.org/dox/Routine_ORWCV_source.html)
 Method comment | stop cover sheet data retrieval
 Input parameters | {::nomarkdown}DFN<br>IP<br>HWND{:/}
 Code | {::nomarkdown}  S NODE="ORWCV "_IP_"-"_HWND_"-"_DFN,ILST=0,DONE=0<br> S ^XTMP(NODE,"STOP")=1,OK=1<br> L +^XTMP(NODE):$S($G(DILOCKTM)>0:DILOCKTM,1:5)<br> I $G(^XTMP(NODE,"DONE")) K ^XTMP(NODE)<br> L -^XTMP(NODE){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}