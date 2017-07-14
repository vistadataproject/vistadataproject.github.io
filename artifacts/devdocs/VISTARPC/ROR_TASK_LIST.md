---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ROR TASK LIST<br/>
# ROR TASK LIST

The ROR TASK LIST remote procedure returns a list of user's tasks scheduled from the GUI.

## Properties

Property | Value
--- | ---
Label | TASKLIST
Routine | [RORRP010](http://code.osehra.org/dox/Routine_RORRP010_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
REGIEN | LITERAL |  |  | The REGIEN parameter should contain a valid registry IEN (IEN of the registry parameters record in the ROR REGISTRY PARAMETERS file #798.1).  The tasks associated with the provided registry will be returned by the procere. By default ($G(REGIEN)&#x27;&gt;0), all tasks are returned.
TYPE | LITERAL |  |  | The TYPE parameter defines which tasks (1-Generic, 2-Report) are returnedby the procedure. See the description of the TYPE field (.02) of the RORTASK file (#798.8) for more details.  By default ($G(TYPE)&#x27;&gt;0), all tasks are retrieved.
USER | LITERAL |  |  | A user IEN (DUZ) can be assigned to the USER parameter. Only tasksscheduled by this user are retrieved by the procedure. By default ($G(USER)&#x27;&gt;0), it utilizes the current user&#x27;s DUZ.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}