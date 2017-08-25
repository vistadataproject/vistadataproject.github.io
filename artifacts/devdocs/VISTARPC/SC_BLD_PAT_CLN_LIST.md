---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; SC BLD PAT CLN LIST<br/>
# SC BLD PAT CLN LIST

This RPC build a list of patients by assignment to a selected clinic.Lookup is in the Hospital location file, screening of "C" in the (0,3) node.  List is stored in ^TMP($J,"SCCLPT",N)=DFN.  List is alphabetized by name.

## Properties

Property | Value
--- | ---
Label | PTCLBLD
MUMPS Implementation | [SCMCBK](http://code.osehra.org/dox/Routine_SCMCBK_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PARAMETER LIST | LIST | 512 | true | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}