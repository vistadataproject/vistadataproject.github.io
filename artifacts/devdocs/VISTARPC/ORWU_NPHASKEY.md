---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWU NPHASKEY
# ORWU NPHASKEY

Returns a 1 if a specified user holds a specified key, otherwise returns0.

Property | Value
--- | ---
Label | NPHASKEY
Routine | [ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [NPHASKEY^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
Method Comment | returns TRUE if the person has the security key
Input Parameters | NP, KEY
Code | {::nomarkdown}<pre><code> S VAL=''$D(^XUSEC(KEY,NP))</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}