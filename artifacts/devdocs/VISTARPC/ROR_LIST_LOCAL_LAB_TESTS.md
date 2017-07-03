---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ROR LIST LOCAL LAB TESTS
# ROR LIST LOCAL LAB TESTS

The ROR LIST LOCAL LAB TESTS remote procedure returns a list of local lab tests, which are referenced by the LOCAL TEST NAME multiple (28) of theROR REGISTRY PARAMETERS file (#798.1).

Property | Value
--- | ---
Label | LTLIST
Routine | [RORRP031](http://code.osehra.org/dox/Routine_RORRP031_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
REGIEN | LITERAL |  | true | The REGIEN parameter should contain a valid registry IEN (IEN of the registry parameters record in the ROR REGISTRY PARAMETERS file #798.1).
GROUP | LITERAL |  |  | If this parameter is defined and not zero, it should contain a valid codeof the Lab Group. In this case, only the tests associated with this groupwill be returned.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}