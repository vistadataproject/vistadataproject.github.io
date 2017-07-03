---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDXVB3 COLLTIM
# ORWDXVB3 COLLTIM

This RPC checks the value of the parameter OR VBECS REMOVE COLL TIMEto determine if a default collection time should be presented on theVBECS order dialog.

Property | Value
--- | ---
Label | COLLTIM
Routine | [ORWDXVB3](http://code.osehra.org/dox/Routine_ORWDXVB3_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [COLLTIM^ORWDXVB3](http://code.osehra.org/dox/Routine_ORWDXVB3_source.html)
Method Comment | Get Collection Time Default Parameter Value
Code | {::nomarkdown}<pre><code> S OROOT=+$$GET^XPAR("ALL","OR VBECS REMOVE COLL TIME",1,"I")</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODLab.pas">Orders/rODLab.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}