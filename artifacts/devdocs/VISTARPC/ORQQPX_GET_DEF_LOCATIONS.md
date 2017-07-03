---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORQQPX GET DEF LOCATIONS
# ORQQPX GET DEF LOCATIONS

Returns the contents of the ORQQPX DEFAULT LOCATIONS parameter.

Property | Value
--- | ---
Label | GETDEFOL
Routine | [ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
LOC | LITERAL |  |  | Current Location.



### MUMPS Method Description

Property | Value
--- | ---
Method | [GETDEFOL^ORQQPX](http://code.osehra.org/dox/Routine_ORQQPX_source.html)
Method Comment | Return Default Outside Locations
Code | {::nomarkdown}<pre><code> N SRV,ORERR<br/> S SRV=$$GET1^DIQ(200,DUZ,29,"I")<br/> D GETLST^XPAR(.ORDEFLOC,"USR^SRV.`"_+$G(SRV)_"^DIV^SYS^PKG","ORQQPX DEFAULT LOCATIONS","Q",.ORERR)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReminders.pas">rReminders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}