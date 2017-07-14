---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MPIF CMOR PUSH REMOTE<br/>
# MPIF CMOR PUSH REMOTE

This remote procedure call (RPC) allows the DQ team to remotely create a change of CMOR push.

## Properties

Property | Value
--- | ---
Label | EN
Routine | [MPIFRCMP](http://code.osehra.org/dox/Routine_MPIFRCMP_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ICN | LITERAL | 10 | true | ICN - not including the checksum
NCMOR | LITERAL | 3 | true | The station number of the site that is to become the CMOR.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}