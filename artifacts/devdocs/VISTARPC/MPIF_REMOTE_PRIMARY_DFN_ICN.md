---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MPIF REMOTE PRIMARY DFN ICN<br/>
# MPIF REMOTE PRIMARY DFN ICN

This remote procedure call will return the primary DFN and ICN fora particular station and DFN.

## Properties

Property | Value
--- | ---
Label | PRIMARY
Routine | [MPIFRPC3](http://code.osehra.org/dox/Routine_MPIFRPC3_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
SITE | LITERAL | 10 | true |  This is the site&#x27;s station number ... a legacy station number can be passed.
DFN | LITERAL | 20 | true | This is a patient&#x27;s internal IEN in the PATIENT file (#2).A legacy IEN can be passed along with a legacy station number.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}