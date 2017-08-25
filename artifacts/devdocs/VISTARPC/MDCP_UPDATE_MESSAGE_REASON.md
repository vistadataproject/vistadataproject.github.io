---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MDCP UPDATE MESSAGE REASON<br/>
# MDCP UPDATE MESSAGE REASON

This RPC call will add word processing text to the CLIO_HL7_LOG file to explain the reason for the current status.  It is primarily intended to be used to store error text from CliO.

## Properties

Property | Value
--- | ---
Label | UPDRSN
MUMPS Implementation | [MDCPHL7B](http://code.osehra.org/dox/Routine_MDCPHL7B_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MDCPMSG | LITERAL | 250 | true | This is the IFN of the HL7 message in the CLIO_HL7_LOG file.
MDCPTEXT | LITERAL | 250 | true | This is the text to add to the CLIO_HL7_LOG file.  Note that this text will completely overwrite the text that was already in the reason field.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}