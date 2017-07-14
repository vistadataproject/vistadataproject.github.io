---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ROR LOG GET LIST<br/>
# ROR LOG GET LIST

The ROR LOG GET LIST remote procedure returns a list of logs associated with the registry in the provided time frame.

## Properties

Property | Value
--- | ---
Label | LOGLIST
Routine | [RORRP007](http://code.osehra.org/dox/Routine_RORRP007_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
REGIEN | LITERAL |  | true | The REGIEN parameter should contain a valid registry IEN (IEN of theregistry parameters record in the ROR REGISTRY PARAMETERS file #798.1).The output list will contain log activities associated with the registrydefined by this parameter.
STDT | LITERAL |  |  | The STDT parameter defines the start date for the search of the log activities. By default (if $G(STDT)&#x27;&gt;0), the search starts from the earliest record of the ROR LOG file.
ENDT | LITERAL |  |  | The ENDT parameter defines the end date for the search of the logactivities. By default (if $G(ENDT)&#x27;&gt;0), the search continues to the lastrecord of the ROR LOG file.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}