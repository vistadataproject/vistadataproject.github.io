---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ACKQROESD<br/>
# ACKQROESD

This is the RPC used to setup and send a deletion of an audiogram to the DDc when a deletion is processed on the home system for an audiogram that has been sent to the DDC.  It is triggered by the mDelete.OnClick action from the Enter/Edit program ACKQROES3E.EXE.

## Properties

Property | Value
--- | ---
Label | STARTD
Routine | [ACKQAG05](http://code.osehra.org/dox/Routine_ACKQAG05_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL |  | true | This is the internal number of the patient in the PATIENT file (#2).
IEN | LITERAL |  | true | This is the internal number of the record in the AUDIOMETRIC EXAM DATA file (#509850.9).
STANUM | LITERAL |  | true | This is the Station Number of the sending clinic
USRNAM | LITERAL | 32 | true | This is the name of the submitting user
USRSER | LITERAL |  | true | This is the name of the submitting user&#x27;s service.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}