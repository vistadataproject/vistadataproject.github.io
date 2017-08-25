---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIRRPT1 BYCLRK RPT BY CLERK<br/>
# DSIRRPT1 BYCLRK RPT BY CLERK

Schedules areport to retrieve ROI requests for a given date range foruse in GUI reports.

## Properties

Property | Value
--- | ---
Label | BYCLRK
MUMPS Implementation | [DSIRRPT1](http://code.osehra.org/dox/Routine_DSIRRPT1_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FRDT | LITERAL | 7 | true | The FileMan Date to start retrieval process.
TODT | LITERAL | 7 | true | FileMan date to end retrieval process.
STATUS | LITERAL | 7 | true | &quot;A&quot;  : Get only the appealed requests  (-RV,-PR)&quot;O&quot;  : Get only the open&quot;C&quot;  : &quot;          &quot; closed  (-D,-G,-P)&quot;P&quot;  : &quot;          &quot; pending&quot;N&quot;  : &quot;          &quot;other nondisclosured (-NR,-RF,-ND,-NV,-RC)&quot;E&quot;  : &quot;          &quot; entered in error&quot;X&quot;  : &quot;          &quot; cancelled&quot;ALL&quot;: Gets all statuses This parameter may be any combination of the codes delimited by the &#x27;^&#x27;or the word &#x27;ALL&#x27;.
DIVL | LITERAL | 99 | true | This parameter is used by the routine if the person requesting thisreport holds the DSIR MDIV key.  It is a list of internal InstitutionFile entry numbers (File 4), delimited by &#x27;^&#x27;.
REQS | LIST | 99 | true | This is an array of clerk IENs.        (1-n)&#x3D;IEN to file 200
SCHED | LITERAL | 1 | true | Boolean flag that determines whether a report is scheduled or run immedieately. 0 - Immediate  1 - Schedule.
ESTART | LITERAL | 14 | true | Earliest time to start the scheduled task.  Mmust be inFileMan date/time format. 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}