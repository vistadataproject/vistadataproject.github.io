---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIC ICD9 ACTIVE<br/>
# DSIC ICD9 ACTIVE

Verify that an ICD9 code is active as of a certain date

## Properties

Property | Value
--- | ---
Label | ACTICD
MUMPS Implementation | [DSICDRG](http://code.osehra.org/dox/Routine_DSICDRG_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
VICD | LITERAL | 7 | true | This is the ifn or .01 field value from the DIAGNOSIS file (#80 - ^ICD9)
CDT | LITERAL | 14 | true | This date is optional.  It can be &lt;null&gt;, TODAY, NOW, or a internal Fileman format date.  Default value is TODAY.  This date will be used to check if the code was active as of that date. This parameter is not used at this time.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}