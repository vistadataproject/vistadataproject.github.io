---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWTIU IDNOTES INSTALLED
# ORWTIU IDNOTES INSTALLED

Returns "1" if TIU*1.0*100 is installed, "0" otherwise.  This lets theCPRS GUI enable or disable the Interdisciplinary Notes functionality untilthe server is ready.

Property | Value
--- | ---
Label | IDNOTES
Routine | [ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [IDNOTES^ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html)
Method Comment | Is ID Notes installed?
Code | {::nomarkdown}<pre><code> S ORY=$$PATCH^XPDUTL("TIU*1.0*100")</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}N/A{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}