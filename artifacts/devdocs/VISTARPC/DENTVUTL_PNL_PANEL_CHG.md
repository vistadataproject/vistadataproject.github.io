---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DENTVUTL PNL PANEL CHG<br/>
# DENTVUTL PNL PANEL CHG

Returns a list of patients with the provider matching the lookup value.

## Properties

Property | Value
--- | ---
Label | PNL
MUMPS Implementation | [DENTVUTL](http://code.osehra.org/dox/Routine_DENTVUTL_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PROV | LITERAL | 15 | true | The lookup value entered by the user to find all patients with the entered provider in the format p1^p2.  P1 is provider ID and p2 is provider type (P or S).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}