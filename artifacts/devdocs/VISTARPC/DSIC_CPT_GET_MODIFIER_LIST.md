---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIC CPT GET MODIFIER LIST<br/>
# DSIC CPT GET MODIFIER LIST

Return a list of all acceptable modifiers for a CPT code

## Properties

Property | Value
--- | ---
Label | CODM
Routine | [DSICCPT](http://code.osehra.org/dox/Routine_DSICCPT_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
CODE | LITERAL | 7 | true | This is the CPT, HCPCS, or level III code in either internal or external format.
CDT | LITERAL | 14 | true | This date in internal Fileman format is optional.Other acceptable input values: 0                               TODAY, NOW, or &lt;null&gt; for today&#x27;s date If CDT is 0 then both active and inactive modifiers will be returned.Else, only return modifiers active as of that date.
SRC | LITERAL | 1 | true | This Boolean flag (1 or 0) indicates whether or not level III codes should be returned
DFN | LITERAL | 14 | true | This is the ien to the PATIENT file.  It is not used at this time.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}