---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ROR REPORTS AVAILABLE
# ROR REPORTS AVAILABLE

The ROR REPORTS AVAILABLE remote procedure returns a list of reports (and their parameters) available for the registry.

Property | Value
--- | ---
Label | RPAVAIL
Routine | [RORRP011](http://code.osehra.org/dox/Routine_RORRP011_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
REGIEN | LITERAL |  | true | The REGIEN parameter should contain a valid registry IEN (IEN of theregistry parameters record in the ROR REGISTRY PARAMETERS file #798.1).The output list will contain reports available for the registry defined bythis parameter.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}