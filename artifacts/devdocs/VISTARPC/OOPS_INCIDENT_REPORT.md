---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; OOPS INCIDENT REPORT<br/>
# OOPS INCIDENT REPORT

This broker call returns the data for creating the Type of Incident reports.This report provides information on different Types of incidents. 

## Properties

Property | Value
--- | ---
Label | ENT
MUMPS Implementation | [OOPSGUIT](http://code.osehra.org/dox/Routine_OOPSGUIT_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
RPTTYP | LITERAL | 256 | true | This will determine which report will be run.  Report types are Type of Incident,Occupation Code, Characterization of Injury, Service, Body Parts, Day of Week,and Time of Day.
CSTAT | LITERAL | 10 | true | This parameter determines which cases to include: Open, Closed, or Both Openand Closed.
STDT | LITERAL | 30 | true | This parameter contains the start date of the report.  Those cases whose Dateof Occurrence is greater than or equal to the Start date will be included.
ENDDT | LITERAL | 30 | true | This parameter contains the end date of the report.  Those cases whose Dateof Occurrence is less than or equal to the End date will be included.
LTNTT | LITERAL | 30 | true | This parameter will determine whether or not Lost Time claims should be included on the report.
STAT | LITERAL | 256 | true | This parameter will determine whether to run the report for all stations ora single station.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}