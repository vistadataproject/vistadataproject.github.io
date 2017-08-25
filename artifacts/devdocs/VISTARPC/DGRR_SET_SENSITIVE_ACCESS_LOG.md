---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DGRR SET SENSITIVE ACCESS LOG<br/>
# DGRR SET SENSITIVE ACCESS LOG

This Remote Procedure Call (RPC) will add an entry to the DG SECURITY LOG(#38.1) file and/or generate the sensitive record access bulletindepending on the value in ACTION input parameter.  If ACTION parameter notdefined, defaults to update DG Security Log file and generate SensitiveRecord Access mail message.

## Properties

Property | Value
--- | ---
Label | NOTICE
MUMPS Implementation | [DGRRLU2](http://code.osehra.org/dox/Routine_DGRRLU2_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ACTION | LITERAL | 1 | true | ACTION &#x3D; 1 - Set DG Security Log entry         2 - Generate Sensitive Record Access bulletin         3 - Both
DFN | LITERAL |  | true | DFN &#x3D; Patient (#2) file DFN
DGOPT | LITERAL |  | true | DGOPT &#x3D; Option Name^Menu test         If not defined, OP^XQCHK identifies option or defaults to UNKNOWN.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}