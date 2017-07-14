---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DENTVX2 GETWP<br/>
# DENTVX2 GETWP

This RPC takes in an entity, parameter name, and instance number and returns the word processing information for the given instance of the parameter.

## Properties

Property | Value
--- | ---
Label | GETWP
Routine | [DENTVX2](http://code.osehra.org/dox/Routine_DENTVX2_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ENT | LITERAL | 30 | true | Entity Name   SYS &#x3D; System
PAR | LITERAL | 30 | true | The name of the stored parameter from which you wish to obtain word processing fields.
INST | LITERAL | 30 | true | This is the instance of the parameter you wish to return. If no value is passed, it will default to 1.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}