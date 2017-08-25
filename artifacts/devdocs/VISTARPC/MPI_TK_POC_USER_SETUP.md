---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MPI TK POC USER SETUP<br/>
# MPI TK POC USER SETUP

This remote procedure call (RPC) is invoked when a VistA user uses the option MPIF TK POC USER SETUP to confirm their traits and establish a TK POC record on the MPI in the New Person file (#200).

## Properties

Property | Value
--- | ---
Label | TKPOC
MUMPS Implementation | [MPIRPC12](http://code.osehra.org/dox/Routine_MPIRPC12_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
USER | LITERAL | 250 | true | NAME_&quot;~&quot;_SSN_&quot;~&quot;_NTNAME_&quot;~&quot;_PHONE



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}