---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; TIU FIELD IMPORT
# TIU FIELD IMPORT

Imports Template Fields from XML format

Property | Value
--- | ---
Label | IMPORT
Routine | [TIUSRVF](http://code.osehra.org/dox/Routine_TIUSRVF_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TIUXML | LIST |  |  | Template Fields in XML format



### MUMPS Method Description

Property | Value
--- | ---
Method | [IMPORT^TIUSRVF](http://code.osehra.org/dox/Routine_TIUSRVF_source.html)
Method Comment | Call layer for IMPORT2
Input Parameters | XMLTMP
First Comment | {::nomarkdown}<pre><code>compatibility and extend the IMPORT function to optionally <br/>specify saving the template field.</code></pre>{:/}
Code | {::nomarkdown}<pre><code> D IMPORT2(.REPORT,"XMLTMP",1)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}N/A{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}