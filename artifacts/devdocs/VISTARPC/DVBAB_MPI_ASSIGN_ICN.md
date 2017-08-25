---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DVBAB MPI ASSIGN ICN<br/>
# DVBAB MPI ASSIGN ICN

This call should be made after a new patient is added into the patient file.  It will call the MPI to assign an ICN.  If no ICN can be obtained after 30 seconds, a local ICN will be assigned and the local ICN flag set.

## Properties

Property | Value
--- | ---
Label | MPI
MUMPS Implementation | [DVBCPATA](http://code.osehra.org/dox/Routine_DVBCPATA_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL |  | true | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}