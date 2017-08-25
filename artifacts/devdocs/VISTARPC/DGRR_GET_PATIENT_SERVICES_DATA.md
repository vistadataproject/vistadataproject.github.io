---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DGRR GET PATIENT SERVICES DATA<br/>
# DGRR GET PATIENT SERVICES DATA

This RPC will return an XML via VistaLink containing Patient ServiceDemographic information for any given Patient ICN

## Properties

Property | Value
--- | ---
Label | PATIENT
MUMPS Implementation | [DGRRPSGT](http://code.osehra.org/dox/Routine_DGRRPSGT_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PARAM | LIST | 999 | true | Input Parameters:   (Rq) Required parameter  (Op) Optional parameter      (Rq) PARAMS(&quot;PatientId_Type&quot;) &#x3D; the three letters &quot;DFN&quot; or &quot;ICN&quot;     (Rq) PARAMS(&quot;PatientId&quot;) &#x3D; the actual value of the patient DFN or ICN     (Op) PARAMS(REQUESTED_DATE) &#x3D; Date to be used for ADT Movement                                   List - defaults to DT      (Op) PARAMS(&quot;PrimaryDemo&quot;) &#x3D; 0 or 1 to request Primary Demographic                                  Info      (Op) PARAMS(&quot;SecondaryDemo&quot;) &#x3D; 0 or 1 to request Secondary                                    Demographic Info      (Op) PARAMS(&quot;TertiaryDemo&quot;) &#x3D; 0 or 1 to request Tertiary Demographic                                   Info      (Op) PARAMS(&quot;MainAddress&quot;) &#x3D; 0 or 1 to request Main Address Info      (Op) PARAMS(&quot;TemporaryAddress&quot;) &#x3D; 0 or 1 to request Temporary                                       Address Info      (Op) PARAMS(&quot;ConfidentialAddress&quot;) &#x3D; 0 or 1 to request                                          Confidential Address Info      (Op) PARAMS(&quot;ContactInfo&quot;) &#x3D; 0 or 1 to request Contact Information     (Op) PARAMS(&quot;ADTInfo&quot;) &#x3D; 0 or 1 to request ADT Information      (Op) PARAMS(&quot;EnrollEligibility&quot;) &#x3D; 0 or 1 to request Enrollment/                                        Eligibility Information



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}