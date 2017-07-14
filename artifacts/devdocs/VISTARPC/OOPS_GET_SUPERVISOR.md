---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; OOPS GET SUPERVISOR<br/>
# OOPS GET SUPERVISOR

This call looks up the Supervisor from the new person file.  The IEN of theclaim is passed in to make sure that the person involved is not the supervisor.

## Properties

Property | Value
--- | ---
Label | SUPER
Routine | [OOPSGUI4](http://code.osehra.org/dox/Routine_OOPSGUI4_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
NAME | LITERAL | 256 | true | This is the name or the partial name of the individual being looked up.
CASESSN | LITERAL | 15 | true | This is the SSN for the Person Involved in the case.  It will be used to assurethat the Supervisor for the case is not the same as the Person Involved.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}