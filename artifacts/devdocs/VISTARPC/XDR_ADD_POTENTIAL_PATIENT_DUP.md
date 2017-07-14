---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; XDR ADD POTENTIAL PATIENT DUP<br/>
# XDR ADD POTENTIAL PATIENT DUP

Add a record to the VistA DUPLICATE RECORD file (#15), or find an existingrecord for the pair of potential duplicates passed to the RPC. This waswritten to allow MPI to add potential duplicate patients to the file, whenpotential duplicates are detected by the Person Service IdentityManagement (PSIM) probabilistic search.

## Properties

Property | Value
--- | ---
Label | ADD
Routine | [XDRDADDS](http://code.osehra.org/dox/Routine_XDRDADDS_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FILE NUMBER | LITERAL | 20 | true | File number for the file to which the potential duplicate records belong. For example, if the two potential duplicate entries are on the PATIENT file, this value is set to 2.
TO_IEN | LITERAL | 14 | true | Internal Entry Number (IEN) of one of the potential duplicate records. For example, this could be a DFN from the PATIENT file (file #2).
FROM_IEN | LITERAL | 14 | true | Internal Entry Number (IEN) of one of the potential duplicate records. For example, this could be a DFN from the PATIENT file (file #2).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}