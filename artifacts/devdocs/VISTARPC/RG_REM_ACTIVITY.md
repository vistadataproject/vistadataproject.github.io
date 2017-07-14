---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; RG REM ACTIVITY<br/>
# RG REM ACTIVITY

This remote procedure call (RPC) returns Health Level Seven (HL7) message information and exception information for a patient.  The HL7 data is fromthe ADT/HL7 PIVOT (#391.71) file and exception date is from the CIRN HL7 EXCEPTION LOG (#991.1) file.

## Properties

Property | Value
--- | ---
Label | EN
Routine | [RGACTIV](http://code.osehra.org/dox/Routine_RGACTIV_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ICN | LITERAL | 16 | true | Integration Control Number (ICN) for patient on whom data is requested.
SSN | LITERAL | 9 | true | Social Security Number (SSN) for patient on whom data is requested.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}