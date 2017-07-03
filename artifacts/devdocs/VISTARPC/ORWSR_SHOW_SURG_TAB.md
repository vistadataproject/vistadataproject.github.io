---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWSR SHOW SURG TAB
# ORWSR SHOW SURG TAB

Check for presence of SR*3.0*100 (Surgery Electronic Signature) patch, andalso for parameter value.  If both TRUE, surgery tab will be displayed inCPRS.

Property | Value
--- | ---
Label | SHOWSURG
Routine | [ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [SHOWSURG^ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html)
Method Comment | is Surgery ES patch installed?
Code | {::nomarkdown}<pre><code> S ORY=$$PATCH^XPDUTL("SR*3.0*100")<br/> Q:+ORY=0<br/> S ORY=$$GET^XPAR("ALL","ORWOR SHOW SURGERY TAB",1)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rSurgery.pas">rSurgery.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}