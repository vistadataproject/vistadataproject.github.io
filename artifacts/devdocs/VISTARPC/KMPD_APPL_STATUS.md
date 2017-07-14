---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; KMPD APPL STATUS<br/>
# KMPD APPL STATUS

Returns the status for cm applications: HL7                                        RUM                                        SAGG                                        TIMING

## Properties

Property | Value
--- | ---
Label | STATUS
Routine | [KMPDU6](http://code.osehra.org/dox/Routine_KMPDU6_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
APPLICATION | LITERAL | 5 | true | &quot;H&quot; - hl7&quot;R&quot; - rum&quot;S&quot; - sagg&quot;T&quot; - timing
GLOBAL | LITERAL | 30 | true | Global in which to store data.  Ex: ^TMP($J)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}