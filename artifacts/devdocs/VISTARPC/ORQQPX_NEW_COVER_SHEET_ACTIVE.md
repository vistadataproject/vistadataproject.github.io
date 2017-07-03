---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORQQPX NEW COVER SHEET ACTIVE
# ORQQPX NEW COVER SHEET ACTIVE

Returns TRUE if the new cover sheet parameters are to be used.

Property | Value
--- | ---
Label | NEWCVOK
Routine | [ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [NEWCVOK^ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
Method Comment | Returns status of 
Code | {::nomarkdown}<pre><code> N SRV,ORERR,ORTMP<br/> S ORY=0,SRV=$$GET1^DIQ(200,DUZ,29,"I")<br/> D GETLST^XPAR(.ORTMP,"USR^SRV.`"_+$G(SRV)_"^DIV^SYS^PKG","ORQQPX NEW REMINDER PARAMS","Q",.ORERR)<br/> I +ORTMP S ORY=$P($G(ORTMP(1)),U,2)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReminders.pas">rReminders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}