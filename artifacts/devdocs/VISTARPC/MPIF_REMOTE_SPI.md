---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MPIF REMOTE SPI<br/>
# MPIF REMOTE SPI

This remote procedure call (RPC) allows the remote sending of a specific patient at a specific site to the MPI for ICN assignment.  The patient is found based upon social security number.

## Properties

Property | Value
--- | ---
Label | SPI
MUMPS Implementation | [MPIFRPC2](http://code.osehra.org/dox/Routine_MPIFRPC2_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
SSN | LITERAL | 9 | true | SSN for the patient that is to be sent to the MPI for ICN assignment.  Should there be more than one entry with that SSN, all will be sent.
DFN | LITERAL | 20 | true | DFN for patient to be SPI&#x27;d.  DFN or SSN should be used to find patient.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}