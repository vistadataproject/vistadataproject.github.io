---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; EC REPORTS
# EC REPORTS

This call is used by all Event Capture GUI reports.  Produces report based onoption selected from the Delphi application.

Property | Value
--- | ---
Label | RPTEN
Routine | [ECRRPC](http://code.osehra.org/dox/Routine_ECRRPC_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ECARY | LIST |  | true | The input array ECARY will be defined based on the report to be generated. Thereport handle or type must be defined.  It is also necessary to specify whether the report will be printed to a device or displayed. The following is an exampleof the variables defined for &#x27;Patient Summary Report&#x27;.      ECARY(&quot;ECDFN&quot;)&#x3D;170      ECARY(&quot;ECED&quot;)&#x3D;3010430      ECARY(&quot;ECHNDL&quot;)&#x3D;&quot;ECPAT&quot;      ECARY(&quot;ECPTYP&quot;)&#x3D;&quot;D&quot;      ECARY(&quot;ECRY&quot;)&#x3D;Y      ECARY(&quot;ECSD&quot;)&#x3D;3010401



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}