---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DENTV TP GET PROVIDERS
# DENTV TP GET PROVIDERS

This will return a list of all providers who have provided service to this patient.  Each provider will have a flag indicating whether or not the provider is current.

Property | Value
--- | ---
Label | PROV
Routine | [DENTVTP1](http://code.osehra.org/dox/Routine_DENTVTP1_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DENTL | LIST | 30 | true | DENTL(&quot;StartDate&quot;) - optional - start date in FM format - default &#x3D; 0DENTL(&quot;EndDate&quot;)   - optional - end date in FM format  - default &#x3D; todayDENTL(&quot;Patient&quot;)   - required - pointer to PATIENT file



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}