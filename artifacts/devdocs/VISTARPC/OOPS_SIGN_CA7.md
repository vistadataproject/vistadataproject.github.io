---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; OOPS SIGN CA7<br/>
# OOPS SIGN CA7

This broker call accepts an encrypted electronic signature, validates the entry and files the signature fields in the ASISTS COMPENSATION CLAIM (CA7) File (#2264).

## Properties

Property | Value
--- | ---
Label | SIGNCA7
MUMPS Implementation | [OOPSGUIS](http://code.osehra.org/dox/Routine_OOPSGUIS_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
INPUT | LITERAL | 30 | true | This parameter contains the file number, field number and internal recordnumber for verifying and filing the electronic signature.  The expected formatis:  FILE^FIELD^IEN.  An Example being 2264^84^5.
SIGN | LITERAL | 30 | true | This parameter contains the encrypted electronic signature code.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}