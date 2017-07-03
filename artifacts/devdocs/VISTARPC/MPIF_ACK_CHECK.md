---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MPIF ACK CHECK
# MPIF ACK CHECK

This RPC will check to see if there are any messages on the sites before date BEFORE that haven't received the application level ack back.  If so, regenerate that message to the MPI.   If a message is generated 1 will be returned, otherwise 0.

Property | Value
--- | ---
Label | EN
Routine | [MPIFACHK](http://code.osehra.org/dox/Routine_MPIFACHK_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
BEFORE | LITERAL | 7 | true | The FM date that the message should be sent BEFORE.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}