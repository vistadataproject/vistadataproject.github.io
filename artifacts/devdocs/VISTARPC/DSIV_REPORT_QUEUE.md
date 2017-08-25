---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIV REPORT QUEUE<br/>
# DSIV REPORT QUEUE

Queues up the report data from file 19625 for billing reports.  

## Properties

Property | Value
--- | ---
Label | PRPT
MUMPS Implementation | [DSIVICR](http://code.osehra.org/dox/Routine_DSIVICR_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DSIVHNDL | LITERAL | 50 | true | Contains the handle to &quot;find&quot; the report in the ^XTMP global after it has been queued and run by Taskman.
DSIVRPT | LITERAL | 30 | true | Contains the ICB report the user has requested.
DATA | LIST | 250 | true | Contains the parameters to search for data:   DATA(&quot;SDT&quot;)&#x3D;fileman start dt   DATA(&quot;EDT&quot;)&#x3D;fileman end dt   DATA(&quot;INDEX&quot;)&#x3D;index to use   &quot;C&quot; or &quot;D&quot; or &quot;E&quot; or &quot;F&quot; or &quot;H&quot;   DATA(&quot;FIELDS&quot;)&#x3D;fields to return  &quot;.01;.02;.03;.03I&quot; Note that &quot;NUMS&quot; and &quot;MORE&quot; are not used.  &quot;NUMS&quot; will be used when polling and retrieving results. FIELDS are DD fields separated by semi-colons only (no colon &quot;ranged&quot;  fields), FIELDS may be suffixed with &quot;I&quot; for internal data vs default of  external data format.  Data is returned in FIELDS order.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}