---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MPIF REMOTE ICN UPDATE
# MPIF REMOTE ICN UPDATE

This remote procedure call (RPC) allows the remote update of the INTEGRATION CONTROL NUMBER (#991.01), ICN CHECKSUM (#991.02), and COORDINATING MASTER OF RECORD (#991.03) fields in the PATIENT (#2) file at a specified site. The patient is found based upon social security number.

Property | Value
--- | ---
Label | UPDATE
Routine | [MPIFRPC2](http://code.osehra.org/dox/Routine_MPIFRPC2_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
SSN | LITERAL | 9 | true | Social Security Number of the patient to be updated.
ICN | LITERAL | 16 | true | ICN - without the checksum to be updated in field 991.01
CHECK | LITERAL | 6 | true |  CHECKSUM for the patient to be stored in field 991.02
CMOR | LITERAL | 3 | true |  Station Number to be stored as the CMOR in field 991.03.
A08 | LITERAL | 1 | true | If an A08 message needs to be sent this flag should be set to 1.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}