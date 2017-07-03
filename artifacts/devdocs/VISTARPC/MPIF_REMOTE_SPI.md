---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MPIF REMOTE SPI
# MPIF REMOTE SPI

This remote procedure call (RPC) allows the remote sending of a specific patient at a specific site to the MPI for ICN assignment.  The patient is found based upon social security number.

Property | Value
--- | ---
Label | SPI
Routine | [MPIFRPC2](http://code.osehra.org/dox/Routine_MPIFRPC2_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
SSN | LITERAL | 9 | true | SSN for the patient that is to be sent to the MPI for ICN assignment.  Should there be more than one entry with that SSN, all will be sent.
DFN | LITERAL | 20 | true | DFN for patient to be SPI&#x27;d.  DFN or SSN should be used to find patient.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}