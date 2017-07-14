---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIC PX GET SELECTED VISITS<br/>
# DSIC PX GET SELECTED VISITS

This will return information on selected visits for a patient based upon the screening factors.

## Properties

Property | Value
--- | ---
Label | SEL
Routine | [DSICPX3](http://code.osehra.org/dox/Routine_DSICPX3_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LIST | 256 | true | Setup up Parm.Mult[&#x27;&quot;sub&quot;&#x27;] :&#x3D; value   or DATA(SUB)&#x3D;value     sub     description  --------  ------------------------------------------------  DFN       pointer to the PATIENT file (#2)  SDT       in external format or FM format  EDT       in external format or FM format  LOC       pointer to Hospital Location (#44)  ENCTYPE   string of encounter types wanted set of codes from              ^DD(9000010,15003)  NENCTYPE  string of encounter types not wanted set of codes from              ^DD(9000010,15003)  SERVCAT   string of service categories to include set of codes from              ^DD(9000010,.07)  NSERVCAT  string of service categories not to include set of codes from              ^DD(9000010,.07)  MAX       maximum number of entries to return starting with end date and              going backwards



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}