---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGQB QSL
# MAGQB QSL

This procedure call sets the queue file last process queue to the inputparameter.  This is used by the Queue Manager reset the queue method.

Property | Value
--- | ---
Label | BPQSL
Routine | [MAGQBUT1](http://code.osehra.org/dox/Routine_MAGQBUT1_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
QUEUE TYPE | LITERAL | 256 | true | This defines the queue type to be reset.
IEN | LITERAL | 256 | true | This is the QUEUE file (#2006.03) internal entry number.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}