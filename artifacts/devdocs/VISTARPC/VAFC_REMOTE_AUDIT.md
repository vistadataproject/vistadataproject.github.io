---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; VAFC REMOTE AUDIT
# VAFC REMOTE AUDIT

This Remote Procedure Call will allow users to pull an audit reportfrom a remote site.

Property | Value
--- | ---
Label | AUDIT
Routine | [VAFCRPC](http://code.osehra.org/dox/Routine_VAFCRPC_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
VALUE | LITERAL | 16 | true | The VALUE can come in as &#x27;I.ICN&#x27;, &#x27;S.SSN&#x27;, &#x27;D.DFN&#x27;or &#x27;P.NAME&#x27;
SSN | LITERAL | 9 | true | 
SDT | LITERAL | 30 | true | 
EDT | LITERAL | 30 | true | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}