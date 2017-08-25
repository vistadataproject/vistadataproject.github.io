---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MPIF ACK CHECK<br/>
# MPIF ACK CHECK

This RPC will check to see if there are any messages on the sites before date BEFORE that haven't received the application level ack back.  If so, regenerate that message to the MPI.   If a message is generated 1 will be returned, otherwise 0.

## Properties

Property | Value
--- | ---
Label | EN
MUMPS Implementation | [MPIFACHK](http://code.osehra.org/dox/Routine_MPIFACHK_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
BEFORE | LITERAL | 7 | true | The FM date that the message should be sent BEFORE.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}