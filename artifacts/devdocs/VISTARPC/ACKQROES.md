---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ACKQROES<br/>
# ACKQROES

This is the RPC used to setup and send to the DDC, thesigned audiometric data file entry to the DDC from the application Audiogram Enter/Edit (AKCQROES3E.EXE). It is triggered bythe saving of a signed entry in 509850.9.  The RPC calls routine START^ACKQAG03 which in turn calls EN^ACKQAG04. The VADPT utilities are also used.

## Properties

Property | Value
--- | ---
Label | START
MUMPS Implementation | [ACKQAG03](http://code.osehra.org/dox/Routine_ACKQAG03_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL |  | true | This is the pointer to the patient file.
IEN | LITERAL |  | true | This is the entry in 509850.9 that the user is working on.
STANUM | LITERAL |  | true | This is the Sta # of the sending clinic
USRNAM | LITERAL | 32 | true | This is the name of the submitting user
USRSER | LITERAL | 32 | true | This is the name of the submitting user&#x27;s service



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}