---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MPIF CHANGE CMOR<br/>
# MPIF CHANGE CMOR

This remote procedure call (RPC) allows the changing/updating of the COORDINATING MASTER OF RECORD (#991.03) field in the PATIENT (#2) file for a specific patient. An A08 Update message can also be triggered.

## Properties

Property | Value
--- | ---
Label | RCCMOR
Routine | [MPIFRPC](http://code.osehra.org/dox/Routine_MPIFRPC_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ICN | LITERAL | 10 | true | ICN - not including the checksum
CMOR | LITERAL | 3 | true | The station number of the site that is to become the CMOR
SSN | LITERAL | 9 | true | Social Security Number for the patient that is to be changed.  SSN willonly be used if ICN is not found to check if the problem is with the AICNx-ref on the ICN field.
A08 | LITERAL | 1 | true | This field will serve as a flag to note whether or not an A08 update message should be triggered.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}