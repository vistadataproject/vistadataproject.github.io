---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGQB QSL<br/>
# MAGQB QSL

This procedure call sets the queue file last process queue to the inputparameter.  This is used by the Queue Manager reset the queue method.

## Properties

Property | Value
--- | ---
Label | BPQSL
MUMPS Implementation | [MAGQBUT1](http://code.osehra.org/dox/Routine_MAGQBUT1_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
QUEUE TYPE | LITERAL | 256 | true | This defines the queue type to be reset.
IEN | LITERAL | 256 | true | This is the QUEUE file (#2006.03) internal entry number.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}