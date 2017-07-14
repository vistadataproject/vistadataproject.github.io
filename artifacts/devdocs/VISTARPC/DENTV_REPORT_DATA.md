---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DENTV REPORT DATA<br/>
# DENTV REPORT DATA

Retrieves Dental Report data for a specified time period and station. 

## Properties

Property | Value
--- | ---
Label | RPT
Routine | [DENTVAU](http://code.osehra.org/dox/Routine_DENTVAU_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PARAM | LIST | 30 | true | The input parameter list contains the following:  PARAM(&quot;RPT&quot;) &#x3D; Report to run:              0&#x3D;Provider Summary,  1&#x3D;Sittings by Provider              2&#x3D;Clinic Summary     3&#x3D;Individual Sittings              4&#x3D;Non Clinical Time  5&#x3D;Dental Fee Basis  PARAM(&quot;STN&quot;) &#x3D; station (external, e.g. 500, 500BZ)  PARAM(&quot;PROV&quot;)&#x3D; &quot;ALL&quot;, or p1^p2^p3 where the pieces are provider ids  PARAM(&quot;START&quot;)&#x3D; start date in external format (11/1/2003)  PARAM(&quot;END&quot;) &#x3D; end date in external format (11/30/2003)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}