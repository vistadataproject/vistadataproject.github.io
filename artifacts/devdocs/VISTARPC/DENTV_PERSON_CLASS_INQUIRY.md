---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DENTV PERSON CLASS INQUIRY<br/>
# DENTV PERSON CLASS INQUIRY

This is an RPC wrapper for the Kernal call $$GET^XUA4A72 to determine the active providers class information.

## Properties

Property | Value
--- | ---
Label | PROVINQ
Routine | [DENTVUTL](http://code.osehra.org/dox/Routine_DENTVUTL_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PROV | LITERAL |  | true | The provider DUZ that is to be checked.
DENTDAT | LITERAL |  |  | This is the date used to determine the providers class (in case a historical lookup is required).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}