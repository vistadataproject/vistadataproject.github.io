---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIC DPT GET ID<br/>
# DSIC DPT GET ID

This returns the patient's identifier based upon their eligibility code.  For the VA, this will be the SSN (dashed) ^ last 4 of SSN.  For non-VA systems this will be that systems ID.

## Properties

Property | Value
--- | ---
Label | ID
Routine | [DSICDPT](http://code.osehra.org/dox/Routine_DSICDPT_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PAT | LITERAL | 35 | true | This is the patient&#x27;s name, IFN, or any other acceptable lookup value.
ISSSN | LITERAL | 1 | true | This is a Boolean flag (1 or 0).  If 1 then the lookup value in the PAT input parameter is the patient&#x27;s SSN.
VAPTYP | LITERAL | 5 | true | This is a pointer value to the Eligibility file (#8).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}