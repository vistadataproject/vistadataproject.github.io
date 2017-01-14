---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWCV STOP 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWCV STOP{:/}
 tag | {::nomarkdown}STOP{:/}
 routine | [ORWCV](http://code.osehra.org/dox/Routine_ORWCV_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}RPC to stop retrieval of cover sheet information for CPRS GUI.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | stop cover sheet data retrieval
 Input Parameters | {::nomarkdown}DFN<br/>IP<br/>HWND{:/}
 Lines | {::nomarkdown} S NODE="ORWCV "_IP_"-"_HWND_"-"_DFN,ILST=0,DONE=0<br/> S ^XTMP(NODE,"STOP")=1,OK=1<br/> L +^XTMP(NODE):$S($G(DILOCKTM)>0:DILOCKTM,1:5)<br/> I $G(^XTMP(NODE,"DONE")) K ^XTMP(NODE)<br/> L -^XTMP(NODE){:/}




 Generated on January 13th 2017, 7:15:27 am