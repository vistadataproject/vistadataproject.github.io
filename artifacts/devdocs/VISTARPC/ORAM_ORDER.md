---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORAM ORDER<br/>
# ORAM ORDER

This RPC supports placing INR and CBC orders from the Anticoagulator application.

## Properties

Property | Value
--- | ---
Label | ORDER
Routine | [ORAM](http://code.osehra.org/dox/Routine_ORAM_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL |  | true | This is the patient id (i.e., the entry number of the patient in file 2).
ORDOC | LITERAL |  | true | This is the ID of the ordering provider in file 200 (i.e., his &quot;DUZ&quot;).
ORQO | LITERAL |  | true | This is the internal entry number of the Quick Order to be placed (for either INR or CBC) in the Order Dialog file #101.41.
ORLOC | LITERAL |  | true | This is the internal entry number of the ordering location in the Hospital Location file (#42).
ORCDT | LITERAL |  | true | This is the expected Collection Date/Time of the lab test being ordered, in external date/time format.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}