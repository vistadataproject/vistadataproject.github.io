---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; PRSN NURS LOCATION EXTRACTION<br/>
# PRSN NURS LOCATION EXTRACTION

VANOD shall have the ability to extract data from the Nursing Location (file # 211.4). For inpatient settings the location data can be used by VANOD as a map between nurse POC data and the patients for whom they provide care.  For other care settings the location data can be used to report an activity. Input Parameter Parameter 1:The date is in format 'YYYYMMDD' is optional. If there is nodate then the defult date will be 'TODAY'. The Nursing Location outputprovided in this RPC shall only include data for locations that are activein any one of the day # of the Pay Period of the parameter date. If thecurrent date is between day 1 and day 11 of the pay period, the NursingLocations RPC shall return locations that were active for the prior payperiod with the data that currently resides in the NURS LOCATION file(211.4).  If the current date is between day 12 and day 14 of the payperiod the Nursing Locations RPC shall return locations that are activefor the current pay period with the data that currently resides in theNURS LOCATION file (211.4).

## Properties

Property | Value
--- | ---
Label | NURSLOC
Routine | [PRSN9A](http://code.osehra.org/dox/Routine_PRSN9A_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PRSNDT | LITERAL | 15 | true | The PRSNDT is, in date format &#x27;YYYYMMDD&#x27;, for extracting all NURSLOCATIONS and their assocated Wards in File #211.4 that is active in anyone of the Day# (1-14) of the Pay Period of the PRSNDT.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}