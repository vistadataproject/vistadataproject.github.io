---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; VAFC LOCAL GETCORRESPONDINGIDS<br/>
# VAFC LOCAL GETCORRESPONDINGIDS

Given a patient DFN, ICN, or EDIPI, this Remote Procedure Call returns a list of Treating Facilities, including SOURCE ID, station number, and IDENTIFIER STATUS.

## Properties

Property | Value
--- | ---
Label | TFL
MUMPS Implementation | [VAFCTFU2](http://code.osehra.org/dox/Routine_VAFCTFU2_source.html)
Return Type | WORD PROCESSING


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
Patient Identifier | WORD PROCESSING | 255 | true | The patient identifier will either be the PATIENT file (#2) IEN (aka DFN), Integration Control Number (aka ICN) or the DOD Identifier (aka EDIPI).  Following this format: Id^IdType^AssigningAuthority^AssigningFacility Examples: ICN example:   1008520438V882204^NI^USVHA^200MDFN example:   100000511^PI^USVHA^500EDIPI example: 852043888^NI^USDOD^200DOD



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}