---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DGRR SET PTLK PREFERENCES
# DGRR SET PTLK PREFERENCES

This remote procedure call updates the division/institutional preferences passed to the call. It returns an xml document containing the stationnumber and status.  If update was successful, status is returned astrue.  If errors were encountered during the update, false is returnedwith an error message.

Property | Value
--- | ---
Label | UPDATE
Routine | [DGRRLU4](http://code.osehra.org/dox/Routine_DGRRLU4_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PARAMS | LIST |  |  | PARAMS(&quot;stationNumber&quot;)&#x3D;station number for division/institutionPARAMS(&quot;maxNumberPatients&quot;)&#x3D;Number between 20 and 100PARAMS(&quot;patientsPerPage&quot;)&#x3D;Number between 5 and 20PARAMS(&quot;patientType&quot;)&#x3D;Disabled or EnabledPARAMS(&quot;gender&quot;)&#x3D;Disabled or EnabledPARAMS(&quot;primaryEligibility&quot;)&#x3D;Disabled or EnabledPARAMS(&quot;roomBed&quot;)&#x3D;Disabled or EnabledPARAMS(&quot;serviceConnected&quot;)&#x3D;Disabled or EnabledPARAMS(&quot;veteranStatus&quot;)&#x3D;Disabled or EnabledPARAMS(&quot;ward&quot;)&#x3D;Disabled or EnabledPARAMS(&quot;veteranImage&quot;)&#x3D;Disabled or EnabledPARAMS(&quot;veteranStatus&quot;)&#x3D;Disabled or EnabledPARAMS(&quot;ward&quot;)&#x3D;Disabled or EnabledPARAMS(&quot;veteranImage&quot;)&#x3D;Disabled or Enabled



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}