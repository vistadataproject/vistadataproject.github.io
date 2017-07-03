---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWRP WINPRINT DEFAULT
# ORWRP WINPRINT DEFAULT

Returns whether the Windows printer is set as the default for the user. 

Property | Value
--- | ---
Label | WINDFLT
Routine | [ORWRP](http://code.osehra.org/dox/Routine_ORWRP_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [WINDFLT^ORWRP](http://code.osehra.org/dox/Routine_ORWRP_source.html)
Method Comment | Windows printer as default?
Code | {::nomarkdown}<pre><code> S ORY=+$$GET^XPAR("ALL","ORWDP WINPRINT DEFAULT")</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReports.pas">rReports.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}