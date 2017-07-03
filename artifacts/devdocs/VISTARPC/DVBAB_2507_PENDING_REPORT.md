---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DVBAB 2507 PENDING REPORT
# DVBAB 2507 PENDING REPORT

Generates a report based on the status of 2507 requests.

Property | Value
--- | ---
Label | STRT
Routine | [DVBAB6](http://code.osehra.org/dox/Routine_DVBAB6_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DVBCSORT | LITERAL | 1 | true | This is  the status.  Valid choices are: A (age), S (status), V (veteranname), or R (routing location).
RSTAT | LITERAL | 1 | true | This is the Request Status.  Valid choices are: A (all), P (pending), N(new), or T (transcribed).  If DVBCSORT&#x3D;A,S, or V - RSTAT cannot be null.
ERDAYS | LITERAL | 3 | true | If DVBCSORT &#x3D; A (age) this must be the earliest age to start with (ie. 30days old).  This goes with the next variable OLDAYS which is the oldestage (ie. 1 day old and cannot be 0).  ERDAYS must be &lt; OLDAYS
OLDAYS | LITERAL | 3 | true | This is the Oldest age (ie 1 day) if DVBCSORT&#x3D;A (age).  This goes withERDAYS (earliest age - ie 30 days).  ERDAYS must be &lt; OLDAYS
ADIVNUM | LITERAL | 3 | true | This is the regional office number - this is required only if DVBCSORT&#x3D;R,otherwise send as null.
ELTYP | LITERAL | 1 | true | This is the elapsed time.  Values are C (calendar days - default) or W(workdays).  If DVBCSORT&#x3D;A,S, or V - this must not be null.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}