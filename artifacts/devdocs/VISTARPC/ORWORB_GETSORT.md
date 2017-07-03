---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWORB GETSORT
# ORWORB GETSORT

Returns the method for sorting GUI alert display.

Property | Value
--- | ---
Label | GETSORT
Routine | [ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [GETSORT^ORWORB](http://code.osehra.org/dox/Routine_ORWORB_source.html)
Method Comment | return notification sort method^direction for user/division/system/pkg
Code | {::nomarkdown}<pre><code> S ORY=$$GET^XPAR("ALL","ORB SORT METHOD",1,"I")_U_$$GET^XPAR("ALL","ORB SORT DIRECTION",1,"I")</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}