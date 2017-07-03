---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; OOPS GET PRT ACC STATUS RPT
# OOPS GET PRT ACC STATUS RPT

This broker call retrieves the data required to generate the PRINT ACCIDENTREPORT STATUS Report.

Property | Value
--- | ---
Label | ACCID
Routine | [OOPSGUIT](http://code.osehra.org/dox/Routine_OOPSGUIT_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
INPUT | LITERAL | 256 | true | This input parameter consists of the Start Date, End Date, and Station that the report should be run.  The Date/Time of Incident (field #4) is used in thedate criteria and the Station (field #13) is used for the Station.  The format is STARTDATE^ENDDATE^STATION IEN.
CALL | LITERAL | 10 | true | This input parameter contains the letter of the calling menu.  This will enable the name and SSN to be screened if the calling menu is the Union.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}