---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; TIU IDENTIFY CLINPROC CLASS
# TIU IDENTIFY CLINPROC CLASS

This RPC gets the CLINICAL PROCEDURES TIU Document Definitionfile (#8925.1) IEN.

Property | Value
--- | ---
Label | CPCLASS
Routine | [TIUCP](http://code.osehra.org/dox/Routine_TIUCP_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [CPCLASS^TIUCP](http://code.osehra.org/dox/Routine_TIUCP_source.html)
Method Comment | RPC that gets the CLINICAL PROCEDURES TIU Document
First Comment | {::nomarkdown}<pre><code>Definition file (#8925.1) IEN<br/> Input  -- None<br/> Output -- Y        TIU Document Definition file (#8925.1) IEN</code></pre>{:/}
Code | {::nomarkdown}<pre><code> S Y=$$CLASS</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Consults/rConsults.pas">Consults/rConsults.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}