---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWU HASKEY
# ORWU HASKEY

Returns 1 if a user holds a security key, otherwise 0.

Property | Value
--- | ---
Label | HASKEY
Routine | [ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [HASKEY^ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
Method Comment | returns TRUE if the user possesses the security key
Input Parameters | KEY
Code | {::nomarkdown}<pre><code> S VAL=''$D(^XUSEC(KEY,DUZ))</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}