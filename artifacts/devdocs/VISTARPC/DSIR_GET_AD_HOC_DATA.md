---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIR GET AD HOC DATA<br/>
# DSIR GET AD HOC DATA

GET DATA FOR AN AD HOC REPORT

## Properties

Property | Value
--- | ---
Label | RPTDATA
MUMPS Implementation | [DSIROIA2](http://code.osehra.org/dox/Routine_DSIROIA2_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
INARRAY | LIST |  | true | Input Parameter(s) - ARRAY AS FOLLOWS: &quot;F1_IEN^F2_IEN^...^Fn_IEN FILTER/SELECTION FIELDS (OPTIONAL) &quot;F1&quot;^F1_IEN^F1_VALUE &quot;F2&quot;^F2_IEN^F1_VALUE &quot;F3&quot;^F3_IEN^F1_VALUE DATE RANGE FIELDS (OPTIONAL) &quot;R1&quot;^R1_IEN^F1_VALUE1^F1_VALUE2 &quot;R2&quot;^R2_IEN^R2_VALUE2^R2_VALUE2^ANDOR (A&#x3D;AND O&#x3D;OR DATE RANGES) SORT FIELDS (OPTIONAL) &quot;S1&quot;^S1_IEN^[&quot;A&quot;|&quot;D&quot;] (&quot;A - ASCENDING IS THE DEFAULT, &quot;D&quot; - DESCENDING) &quot;S2&quot;^S2_IEN^[&quot;A&quot;|&quot;D&quot;] (&quot;A - ASCENDING IS THE DEFAULT, &quot;D&quot; - DESCENDING)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}