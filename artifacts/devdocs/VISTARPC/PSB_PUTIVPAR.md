---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; PSB PUTIVPAR<br/>
# PSB PUTIVPAR

Sets 53.66 or parameters file w/input from 53.66 if ward is not "ALL"

## Properties

Property | Value
--- | ---
Label | PUTPAR
MUMPS Implementation | [PSBPARIV](http://code.osehra.org/dox/Routine_PSBPARIV_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PSBWARD | LITERAL | 1 | true | ^1&#x3D;Ward name^2&#x3D;IEN of ward as in file 53.66
PSBPARS | LITERAL | 1 | true | IV type - &quot;A&quot; for Additive          &quot;P&quot; for Piggyback          &quot;H&quot; for Hyperal          &quot;C&quot; for Chemo          &quot;S&quot; for Syringe          &quot;S&quot; for Syringe ^2-^16 Setting     1 for Warning     2 for Non-Verify     3 for Invalid
PSBDIV | LITERAL | 1 | true | ^1&#x3D;IEN of division as in the Ward Location file (File #42)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}