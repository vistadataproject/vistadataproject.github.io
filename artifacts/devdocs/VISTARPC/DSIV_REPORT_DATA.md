---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIV REPORT DATA<br/>
# DSIV REPORT DATA

Retrieves data from the audit file 19625 for billing report.

## Properties

Property | Value
--- | ---
Label | RPT
Routine | [DSIVICR](http://code.osehra.org/dox/Routine_DSIVICR_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PARAM | LIST | 30 | true | Contains the parameters to search for data:  DATA(&quot;SDT&quot;)&#x3D;fileman start dt  DATA(&quot;EDT&quot;)&#x3D;fileman end dt  DATA(&quot;INDEX&quot;)&#x3D;index to use   &quot;C&quot; or &quot;D&quot; or &quot;E&quot; or &quot;F&quot; or &quot;H&quot;  DATA(&quot;FIELDS&quot;)&#x3D;fields to return  &quot;.01;.02;.03;.03I&quot;  DATA(&quot;NUMS&quot;)&#x3D;number of records to return (default&#x3D;99999), not required  DATA(&quot;MORE&quot;)&#x3D;1 to return addtl records, 0 to return first set               keep sending MORE&#x3D;1 until $END$ is reached. FIELDS are DD fields separated by semi-colons only (no colon &quot;ranged&quot; fields), FIELDS may be suffixed with &quot;I&quot; for internal data vs default of external data format.  Data is returned in FIELDS order.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}