---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGV FIND STUDY BY UID<br/>
# MAGV FIND STUDY BY UID

Input parameters are name-value pairs sent as successive integersubscripts in an array that should be passed in by reference as thesecond argument to entry point FINDSTDY^MAGVRS05.  The first argumentto FINDSTDY^MAGVRS05 should be an array name (passed by reference)that will contain the returned value. The values that may be passed in are as follows.PAT_IEN: internal entry number of the patient record on the IMAGINGPATIENT REFERENCE File (#2005.6)PROC_IEN: internal entry number of the procedure on the IMAGING PROCEDURE File (#2005.61)STUDY_INSTANCE_UID: external identifier of the study

## Properties

Property | Value
--- | ---
Label | FINDSTDY
Routine | [MAGVRS05](http://code.osehra.org/dox/Routine_MAGVRS05_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
STUDYUID | LITERAL | 64 | true | This is the ISO object identifier of the study.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}