---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORRC TASK ADD<br/>
# ORRC TASK ADD

This call will accept data to create a new entry in the Patient Taskfile #102.3 and return the new identifier.

## Properties

Property | Value
--- | ---
Label | NEW
Routine | [ORRCTSK](http://code.osehra.org/dox/Routine_ORRCTSK_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LITERAL |  | true | This is a string of ^-delimited attributes of a new task, in the form  Subject^Created^ByWhom^Patient^Priority^Due^Completed^ByWhom^Itemswhere Subject   &#x3D; Text subject of task      Created   &#x3D; date task was created, as YYYYMMDDHHMMSS      ByWhom    &#x3D; user who created task, as pointer to #200      Patient   &#x3D; patient that task is for, as pointer to #2      Priority  &#x3D; H, M, or L      Due       &#x3D; date task is due to be completed, as YYYMMDD[HHMM]      Completed &#x3D; date task was completed as, YYYYMMDDHHMM      ByWhom    &#x3D; user who completed task, as pointer to #200      Items     &#x3D; linked items as ID,ID,...,ID where ID is XXX:### as                  DOC:### &#x3D; documents in #8925                  ORR:### &#x3D; order results in #100



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}