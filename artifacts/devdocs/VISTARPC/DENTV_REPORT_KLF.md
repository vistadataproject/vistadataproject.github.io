---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DENTV REPORT KLF
# DENTV REPORT KLF

Retrieves Dental KLF Report data for specified time period.Rep

Property | Value
--- | ---
Label | KLF
Routine | [DENTVAU](http://code.osehra.org/dox/Routine_DENTVAU_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PARAM | LIST | 30 | true | The input parameter list contains the following:   PARAM(&quot;RPT&quot;) &#x3D; Report to run:               0&#x3D;all  1 through 11 or any combination,               separated by commas retrieves KLF tables 1-11   PARAM(&quot;STN&quot;) &#x3D; station (external, e.g. 500, 500BZ), optional   PARAM(&quot;START&quot;)&#x3D; start date in external format (11/1/2003)   PARAM(&quot;END&quot;) &#x3D; end date in external format (11/30/2003)   PARAM(&quot;FY&quot;) &#x3D; fiscal year (2005, 2004, etc)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}