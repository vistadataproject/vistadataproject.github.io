---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORRC TASK EDIT<br/>
# ORRC TASK EDIT

This call will update patient tasks using the data strings passed in, andreturn a true or false flag with each ID indicating if the update wassuccessful.

## Properties

Property | Value
--- | ---
Label | EDIT
MUMPS Implementation | [ORRCTSK](http://code.osehra.org/dox/Routine_ORRCTSK_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TASKS | LIST |  | true | This is a string of ^-delimited attributes of a new task, in the form  ID^Subject^Created^ByWhom^Patient^Priority^Due^Completed^ByWhom^Itemswhere ID        &#x3D; Task identifier, as TSK:## [##&#x3D;pointer to #102.3]      Subject   &#x3D; Text subject of task            Created   &#x3D; date task was created, as YYYYMMDDHHMMSS            ByWhom    &#x3D; user who created task, as pointer to #200            Patient   &#x3D; patient that task is for, as pointer to #2            Priority  &#x3D; H, M, or L            Due       &#x3D; date task is due to be completed, as YYYMMDD[HHMM]            Completed &#x3D; date task was completed as, YYYYMMDDHHMM            ByWhom    &#x3D; user who completed task, as pointer to #200            Items     &#x3D; linked items as ID,ID,...,ID where ID is XXX:### as                  DOC:### &#x3D; documents in #8925                  ORR:### &#x3D; order results in #100



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}