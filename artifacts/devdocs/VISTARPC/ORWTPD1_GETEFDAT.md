---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWTPD1 GETEFDAT
# ORWTPD1 GETEFDAT



Property | Value
--- | ---
Label | GETEFDAT
Routine | [ORWTPD1](http://code.osehra.org/dox/Routine_ORWTPD1_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [GETEFDAT^ORWTPD1](http://code.osehra.org/dox/Routine_ORWTPD1_source.html)
Method Comment | Get non-user level Encounter appointment date range params.
Code | {::nomarkdown}<pre><code> N ORSTART,ORSTOP<br/> S INFO=""<br/> S ORSTART=$$GET^XPAR("DIV^SYS^PKG","ORQQEAPT ENC APPT START",1,"I")<br/> I 'ORSTART S ORSTART=60<br/> S ORSTOP=$$GET^XPAR("DIV^SYS^PKG","ORQQEAPT ENC APPT STOP",1,"I")<br/> I 'ORSTOP S ORSTOP=0<br/> S INFO=ORSTART_U_ORSTOP</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Options/rOptions.pas">Options/rOptions.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}