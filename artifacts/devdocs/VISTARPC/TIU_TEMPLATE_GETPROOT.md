---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; TIU TEMPLATE GETPROOT
# TIU TEMPLATE GETPROOT



Property | Value
--- | ---
Label | GETPROOT
Routine | [TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
USER | LITERAL |  |  | 



### MUMPS Method Description

Property | Value
--- | ---
Method | [GETPROOT^TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
Method Comment | Get personal template root info only
Input Parameters | USER
Code | {::nomarkdown}<pre><code> N IDX<br/> I +$G(USER) D ADDNODE(.IDX,$O(^TIU(8927,"AROOT",USER,0)),1)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}N/A{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}