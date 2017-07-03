---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORQQPX SAVELVL
# ORQQPX SAVELVL

Saves Parameter Level settings.

Property | Value
--- | ---
Label | SAVELVL
Routine | [ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
LVL | LITERAL |  |  | Parameter Level
CLASS | LITERAL |  |  | Optional User Class IEN if LVL is CLASS
DATA | LIST |  |  | Data.



### MUMPS Method Description

Property | Value
--- | ---
Method | [SAVELVL^ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
Method Comment | Save cover sheet reminders at a specified level
Input Parameters | LVL, CLASS, DATA
Code | {::nomarkdown}<pre><code> N ORERR,PARAM,I<br/> I LVL="CLASS" D  I 1<br/> .S PARAM="ORQQPX COVER SHEET REM CLASSES"<br/> .S LVL="SYS"<br/> .D DEL^XPAR(LVL,PARAM,"`"_CLASS,.ORERR)<br/> .D EN^XPAR(LVL,PARAM,"`"_CLASS,.DATA,.ORERR)<br/> E  D<br/> .S PARAM="ORQQPX COVER SHEET REMINDERS"<br/> .D NDEL^XPAR(LVL,PARAM,.ORERR)<br/> .S I=0<br/> .F  S I=$O(DATA(I)) Q:'I  D<br/> ..D EN^XPAR(LVL,PARAM,$P(DATA(I),U,1),$P(DATA(I),U,2),.ORERR)<br/> S ORY=1</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReminders.pas">rReminders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}