---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; GMV PTSELECT
# GMV PTSELECT

Used as a method of processing a patient DFN and returning all warnings and notices (i.e. sensitivity or same last 4 of SSN) to the client application for processing.  Also includes a call to log access of sensitive patients to the DG SECURITY LOG file.

Property | Value
--- | ---
Label | RPC
Routine | [GMVRPCP](http://code.osehra.org/dox/Routine_GMVRPCP_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
RESULT | REFERENCE | 30 | true | This is the RPC return array variable.
OPTION | LITERAL | 30 | true | Contains the appropriate method to perform within this RPC call. Options are:  SELECT: Performs a select of the supplied DFN (param 3) and returns the           notices and warnings for the DFN   LOGSEC: Logs a security entry in the DG SECURITY LOG file.
DFN | LITERAL | 12 | true | Contains the DFN of the patient to process in the SELECT or LOGSEC method of param 2.
DATA | LITERAL | 80 | true | Used to pass in the option name to DGSEC when logging against the DG SECURITY LOG file.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}