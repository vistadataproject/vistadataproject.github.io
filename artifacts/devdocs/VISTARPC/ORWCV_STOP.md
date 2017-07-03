---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWCV STOP
# ORWCV STOP

RPC to stop retrieval of cover sheet information for CPRS GUI.

Property | Value
--- | ---
Label | STOP
Routine | [ORWCV](http://code.osehra.org/dox/Routine_ORWCV_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [STOP^ORWCV](http://code.osehra.org/dox/Routine_ORWCV_source.html)
Method Comment | stop cover sheet data retrieval
Input Parameters | DFN, IP, HWND
Code | {::nomarkdown}<pre><code> S NODE="ORWCV "_IP_"-"_HWND_"-"_DFN,ILST=0,DONE=0<br/> S ^XTMP(NODE,"STOP")=1,OK=1<br/> L +^XTMP(NODE):$S($G(DILOCKTM)>0:DILOCKTM,1:5)<br/> I $G(^XTMP(NODE,"DONE")) K ^XTMP(NODE)<br/> L -^XTMP(NODE)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCover.pas">rCover.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}