---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; SPN IDT DISCHARGE LOCATIONS
# SPN IDT DISCHARGE LOCATIONS

This RPC supports the Discharge Locations subscreen of the InfluenzaDiagnosis and Treatment Report. Returns discharge location and discharge date (Note: potentially, this can also be used for admission location and admission date, by passing a 1 in the TYPE parameter).  A TYPE parameter of 1 will return admissioninformation, whereas 3 will return discharge information. Parameter values:       DFN is ien of the patient      CUTDATE is the date from which to start collection of data      TYPE is 1 for Admission, 3 for Discharge  Sample ^TMP Global data string, using first item, and based on:DFN     = 4812CUTDATE = JAN 1,1980TYPE    = 3   Piece   1 is Date & Time of Admission --> NOV 27, 1996@08:30:35   2 is Ward admitted to --> 3SE   3 is Room-Bed --> 3D15-6   4 is Date & Time of Discharge --> NOV 29,1996@14:37:18   5 is Discharge Location --> RETURN TO COMMUNITY-INDEPENDENT   6 is Mumps global root and ien (for troubleshooting only)   7 is End of Line indicator (EOL999)  ^TMP(541077599,1) = NOV 27, 1996@08:30:35^3SE^3D15-6^NOV 29, 1996@14:37:18^RETURN TO COMMUNITY-INDEPENDENT^DGPT(101199^EOL999

Property | Value
--- | ---
Label | COL
Routine | [SPNRPCJ](http://code.osehra.org/dox/Routine_SPNRPCJ_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ICN | LITERAL |  |  | 
CUTDATE | LITERAL |  |  | 
TYPE | LITERAL |  |  | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}