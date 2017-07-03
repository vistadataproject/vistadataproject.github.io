---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORQQPX NEW REMINDERS ACTIVE
# ORQQPX NEW REMINDERS ACTIVE

Return 1 if Interactive Reminders are active, otherwise return 0.

Property | Value
--- | ---
Label | NEWACTIV
Routine | [ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [NEWACTIV^ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
Method Comment | Return true if Interactive Reminders are active
Code | {::nomarkdown}<pre><code> S ORY=0<br/> I $T(APPL^PXRMRPCA)'="",+$G(DUZ) D<br/> . N SRV<br/> . ;S SRV=$P($G(^VA(200,DUZ,5)),U)<br/> . S SRV=$$GET1^DIQ(200,DUZ,29,"I")<br/> . S ORY=$$GET^XPAR(DUZ_";VA(200,^SRV.`"_+$G(SRV)_"^DIV^SYS","PXRM GUI REMINDERS ACTIVE",1,"Q")<br/> . I +ORY S ORY=1<br/> . E  S ORY=0</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReminders.pas">rReminders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}