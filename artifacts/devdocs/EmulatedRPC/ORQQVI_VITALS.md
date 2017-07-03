---
layout: default
title: VISTA Emulator Documentation
---

## [Emulated RPCs](TableOfContents) &#8594; ORQQVI VITALS
# ORQQVI VITALS

Array of patient most recent vitals within start and stop date/times.  If no start and stop dates are indicated, the most recent are returned.   If no start date is passed then the start date is 1 (i.e. before any dates).   If no stop date is passed then the start date is also the stop date and if there is not start date then 9999999 is used as the stop date.

Property | Value
--- | ---
Domain | Vitals
VISTA RPC Documentation | [ORQQVI VITALS](../VISTARPC/ORQQVI_VITALS)
MUMPS Implementation | [VITALS^ORQQVI](http://code.osehra.org/dox/Routine_ORQQVI_source.html)
Type | READ STRUCTURED
Complexity | MEDIUM
Uses | N/A
Return Type | ARRAY
Return Description | N/A
File Types Used | [120.5](../VDM/Gmrv_Vital_Measurement-120_5)
Parameters Used | DFN, START_DATETIME, STOP_DATETIME


### Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
DFN | LITERAL | true | Patient id (DFN) from Patient File (#2). | 
START_DATETIME | LITERAL |  | Start date/time for vital retrieval in Fileman format.<br/>If none is passed then the start date is 1 (i.e. before any dates). | 
STOP_DATETIME | LITERAL |  | Stop date/time for vital retrieval in Fileman format.<br/>If none is passed then the Start date is also the stop date and if there<br/>is not start date then 9999999 is used as the stop date | 

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:06 pm</p>{:/}