---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWU PARAM
# ORWU PARAM

Simple call to return a parameter value.  The call assumes the currentuser, 'defaultable' entities, and one instance.

Property | Value
--- | ---
Label | PARAM
Routine | [ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [PARAM^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
Method Comment | return a parameter value for a user
Input Parameters | APARAM
First Comment | {::nomarkdown}<pre><code> call assumes current user, default entities, single instance</code></pre>{:/}
Code | {::nomarkdown}<pre><code> S VAL=$$GET^XPAR("ALL",APARAM,1,"I")</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}