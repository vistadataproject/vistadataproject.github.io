---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; OOPS SENSITIVE DATA<br/>
# OOPS SENSITIVE DATA

This Broker call is used to pass data to the bulletin routine for supervisorsaccessing sensitive data and not creating an ASISTS case. 

## Properties

Property | Value
--- | ---
Label | SENSDATA
MUMPS Implementation | [OOPSGUI7](http://code.osehra.org/dox/Routine_OOPSGUI7_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
SDUZ | LITERAL |  | true | This is the DUZ of the supervisor accessing the Employee&#x27;s data.
EMP | LITERAL |  | true | This is the Employee&#x27;s name for which the sensitive date has been viewed.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}