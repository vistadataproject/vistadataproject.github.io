---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ACKQAUD2<br/>
# ACKQAUD2

Input the IEN of the 509850.9 file entry as the second parameter.Input the DFN as the third parameter, array by reference as firstreturns a subscripted array of data values for this audiogramdata for the patient. Currently only uses 0 node for information.Used in the Enter/Edit Audiogram Delphi program

## Properties

Property | Value
--- | ---
Label | EN
Routine | [ACKQAG02](http://code.osehra.org/dox/Routine_ACKQAG02_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL |  | true | DFN of patient - IEN from DPT(
IEN | LITERAL |  | true | This is the pointer to the 509850.9 fileUsed in the Audiogram Enter/Edit program



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}