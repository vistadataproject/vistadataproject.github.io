---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIV DPT GET DEMO<br/>
# DSIV DPT GET DEMO

This will return specific patient demographic elements for a patient.

## Properties

Property | Value
--- | ---
Label | DEM
MUMPS Implementation | [DSIVDPT](http://code.osehra.org/dox/Routine_DSIVDPT_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 20 | true | This is the patient&#x27;s DFN or pointer (IEN) to the PATIENT file.
SSN | LITERAL | 10 | true | This is the patient&#x27;s 9 (or 10) digit SSN. You must pass either DFN or SSN.
PERM | LITERAL | 1 | true | This is a boolean flag (1 or 0). The default value is zero. If one, then always return the patient&#x27;s permanent address information. Otherwise return what is configured in the MAS software.
DSICONF | LITERAL | 13 | true | This flag determins whether or not to return the confidential address information. It is optional. If this is passed, then TODAY will be default date to use to check to see if a confidential address is active for that date.    DSICONF - optional - p1^p2        p1 - required - confidential address category - this is a string of                        one or more numerics, e.g, 134, where category                        numbers are                          1 for Eligibility/Enrollment                          2 for Appointment/Scheduling                          3 for Co-payments/Veterans Billing                          4 for Medical Records                          5 for All Others         p2 - optional - fileman date to determine if confidential date is                        effective.  Default value is TODAY
DSIVFLG | LITERAL | 1 | true | This boolean value (1 or 0) will determine the data returned for certaindata elements.  The default value is 0.  Any state, county or zip codedata elements return value will be affected by this flag   If DSIVFLG&#x3D;0, return state abbreviation, a 5 or 9 zip-code, and county                name   If DSIVFLG&#x3D;1, return ien to file 5^state name^state abbreviation                internal form of zip code^external zip code                multiple ien value^county name



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}