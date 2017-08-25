---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIC GET SC CONDITIONS<br/>
# DSIC GET SC CONDITIONS

This will return a string indicating whether the service conditionquestions need to be asked:   Agent Orange exposure   Environmental Contaminant exposure   Ionizing Radiation Exposure   Service Connected   Military Sexual Trauma   Head & Neck Cancer   Combat Veteran   Proj 112/SHAD If VST is not passed, then APPT must be the scheduling appointmentdate/time and LOC must be the the hospital location data If VST is passed, then APPT and LOC are optional.

## Properties

Property | Value
--- | ---
Label | SCCND
MUMPS Implementation | [DSICVT1](http://code.osehra.org/dox/Routine_DSICVT1_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LITERAL | 80 | true |  DATA &#x3D; DFN ^ APPT ^ LOC ^ VST where  DFN &#x3D; required - pointer to the Patient file (2) APPT &#x3D; optional/required - FM date/time for the visit or the scheduled        appointment.  If VST passed, then APPT is optional  LOC &#x3D; required - either the name of the location (file 44) or the        pointer to file 44  VST &#x3D; optional/required - pointer to Visit file (#9000010)        If APPT passed, then VST is optional   You must send either APPT or VST or both.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}