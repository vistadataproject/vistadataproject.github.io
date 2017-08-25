---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIC ICD9 GET DIAGNOSIS<br/>
# DSIC ICD9 GET DIAGNOSIS

This will return specific information for a diagnosis code

## Properties

Property | Value
--- | ---
Label | ICD9
MUMPS Implementation | [DSICDRG](http://code.osehra.org/dox/Routine_DSICDRG_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
VICD | LITERAL | 7 | true | This is the ifn or .01 field value from the DIAGNOSIS file (#80)
FLDS | LITERAL | 50 | true | This is a &quot;^&quot;-delimited list of field values you wish returned for adiagnosis code. Acceptable field numbers:  ien - return ifn to file 80  .01 - ICD9 NAME (diagnosis code)    3 - DIAGNOSIS (short description 2-30 char)    5 - MAJOR DIAGNOSTIC CATEGORY (external value from 80.3)   10 - DESCRIPTION (long description 1-245 char)  9.5 - USE ONLY WITH SEX (M, F, or &lt;null&gt;)   15 - AGE (N:newborn;P:pediatric;A:adult)  100 - INACTIVE (1 or &lt;null&gt;)  101 - UNACCEPTABLE AS PRINCIPAL DX (1 if not acceptable)  102 - INACTIVE DATE Default value:  ien^.01^3
CDT | LITERAL | 14 | true | This date is optional.  It can be &lt;null&gt;, TODAY, NOW, or a internal Fileman format date.  Default value is TODAY.  This date will be used to check if the code was active as of that date. This parameter is not used at this time
SCR | LITERAL | 2 | true | This is a single or double character code used to screen out diagnoses.  SCR &#x3D; &quot;A&quot; - default value - return only active codes        &quot;U&quot; - return codes which are acceptable as a principal diagnosis        &quot;N&quot; - do not screen out any codes       &quot;AU&quot; - return codes which are both active and acceptable as a              principal diagnosis



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}