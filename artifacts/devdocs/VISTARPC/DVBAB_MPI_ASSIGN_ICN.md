---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DVBAB MPI ASSIGN ICN
# DVBAB MPI ASSIGN ICN

This call should be made after a new patient is added into the patient file.  It will call the MPI to assign an ICN.  If no ICN can be obtained after 30 seconds, a local ICN will be assigned and the local ICN flag set.

Property | Value
--- | ---
Label | MPI
Routine | [DVBCPATA](http://code.osehra.org/dox/Routine_DVBCPATA_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL |  | true | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}