---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DVBAB FIND DFN BY ICN
# DVBAB FIND DFN BY ICN

This remote procedure call returns the patient's DFN associated with the ICN passed to the RPC.  The DFN is the internal entry number in the Patient (#2) file.  The RPC is designed specifically for the FHIE VistA server not the local VAMC facilities.  It is distributed nationally with the CAPRI application to keep the remote procedures and the DVBA CAPRI GUI option consistent on all systems using CAPRI.  Please do not use.

Property | Value
--- | ---
Label | ICN
Routine | [DVBABDOD](http://code.osehra.org/dox/Routine_DVBABDOD_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ICN | LITERAL |  | true | INTEGRATION CONTROL NUMBER



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}