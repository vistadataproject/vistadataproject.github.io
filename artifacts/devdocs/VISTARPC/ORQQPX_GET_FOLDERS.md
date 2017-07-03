---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORQQPX GET FOLDERS
# ORQQPX GET FOLDERS

Returns the value of the ORQQPX REMINDER FOLDERS parameter for thecurrent user.

Property | Value
--- | ---
Label | GETFLDRS
Routine | [ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [GETFLDRS^ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
Method Comment | Return Visible Reminder Folders
First Comment | {::nomarkdown}<pre><code> Codes: D=Due, A=Applicable, N=Not Applicable, E=Evaluated, O=Other</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N SRV,ORERR,ORTMP<br/> S SRV=$$GET1^DIQ(200,DUZ,29,"I")<br/> D GETLST^XPAR(.ORTMP,"USR^SRV.`"_+$G(SRV)_"^DIV^SYS^PKG","ORQQPX REMINDER FOLDERS","Q",.ORERR)<br/> I +ORTMP S ORFLDRS=$P($G(ORTMP(1)),U,2)<br/> E  S ORFLDRS="DAO"</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReminders.pas">rReminders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}