---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIRRPT5 DEAD PATIENT REQUESTS<br/>
# DSIRRPT5 DEAD PATIENT REQUESTS

This RPC will look for any ROI Plus request that was entered after the patient died.

## Properties

Property | Value
--- | ---
Label | DEAD
Routine | [DSIRRPT5](http://code.osehra.org/dox/Routine_DSIRRPT5_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
STDT | LITERAL | 7 | true | This is the start date in FileMan format.
ENDT | LITERAL | 7 | true | This is the end date of the report.
DIVL | LITERAL | 99 | true | Divisions - String of selected divisions delimited by &#x27;^&#x27; or null for allif the user holds the DSIR MDIV key
SORT | LITERAL | 1 | true | P &#x3D; Patient Name, D &#x3D; Request Date (P - Default)
SCHED | LITERAL | 1 | true | Schedule - Boolean for scheduled or immediate run 1 &#x3D; Schedule / 0 or Null&#x3D; Run Immediately
ESTART | LITERAL | 14 | true | Earliest time to start the scheduled task (FileMan Date/Time)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}